let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// create the User Model instance
let userModel = require('../models/user');
let User = userModel.User; //alias

// import the Survey Model instance
let Surveys = require('../models/survey');

// import the Response Model instance
let Response = require('../models/response');

// enable jwt
let jwt = require('jsonwebtoken');
let DB = require('../config/db');


module.exports.displayHomePage = async (req, res, next) => {
    try {
        let id = req.user;
        let SurveyList = await Surveys.find({ userid: { $ne: id } });
         res.json({ 
            title: 'Home', 
            SurveyList: SurveyList,
            displayName: req.user ? req.user.displayName : '' })
    } catch (err){
        console.log(err);
        res.status(500).json({ error: err.message });

    }
}


module.exports.displayMySurvey = async (req, res, next) => {
    let id = req.user._id
    try {

        let SurveyList = await Surveys.find({ userid: id });
            res.json({ 
            title: 'My Surveys', 
            SurveyList: SurveyList,
            displayName: req.user ? req.user.displayName : '' })
    } catch (err){
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}


module.exports.displayCreateSurvey = async (req, res, next)=>{
    try {
        res.render('surveys/create', 
        {title: 'Create survey',})
    } catch (err){
        console.log(err);
    }
};

module.exports.processCreateSurvey = async (req, res, next) => {
    const surveyData = req.body;
    // Extract survey name
    const surveyName = surveyData.surveyName;
    //extract survey type
    const surveyType = surveyData.surveyType;
    const displayName = surveyData.displayName;
    const userid = surveyData.userid;
    // Extract questions and responses
    const questions = [];
    for (let count = 0; count < 2; count++) {           
        const questionKey = `Question${count + 1}`;
        const responseKey = `response${count + 1}`;
        const question = surveyData[questionKey];
        const responses = surveyData[responseKey];

        if (surveyType === "MCQ") {
            questions.push({
                Question: question,
                OptionOne: responses[0] || "",
                OptionTwo: responses[1] || "",
                OptionThree: responses[2] || "",
                OptionFour: responses[3] || "",
            });
        } else if (surveyType === "SA") {
            questions.push({
                Question: question
            });
        }
    }
    
    try {
        // Create a new SurveyModel object
        const newSurvey = new Surveys({
        name: surveyName,
        creator:displayName,
        userid: userid,
        surveyType: surveyType,                    
        questions: questions,
        });
    
        // Save the new survey to the database
        await newSurvey.save();
    
        await newSurvey.save();
    res.json({ message: "Survey created successfully!" });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

    
    
};

// GET ROUTE FOR EDITING A SURVEY
module.exports.displayEditSurvey = async (req, res, next) => {
    let id = req.params.id;

    try {
        let surveyToEdit = await Surveys.findById(id);
        res.json({
            title: 'Edit', 
            surveyToEdit: surveyToEdit,
            displayName: req.user ? req.user.displayName : ''
        });
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};


module.exports.processEditSurvey = async (req, res, next) => {
    let id = req.params.id;
    
    const surveyData = req.body;
    // Extract survey name
    const surveyName = surveyData.surveyName;
    //extract survey type

    const surveyType = surveyData.surveyType;

    // Extract questions and responses
    const questions = [];
    for (let count = 0; count < 2; count++) { 
        if (surveyType === "MCQ") {
            const questionKey = `Question${count + 1}`;
            const responseKey = `response${count + 1}`;
            const question = surveyData[questionKey];
            const responses = surveyData[responseKey].map((response) => response || "");
    
            questions.push({
                Question: question,
                OptionOne: responses[0] || "",
                OptionTwo: responses[1] || "",
                OptionThree: responses[2] || "",
                OptionFour: responses[3] || "",
            });
        } else {
            const questionKey = `Question${count + 1}`;
            const question = surveyData[questionKey];
            questions.push({
                Question: question,
            });
        }


    }

    let updatedSurvey = {
        "name": surveyName,
        "questions": questions,
    };

    try {
        await Surveys.updateOne({_id: id}, updatedSurvey);
        res.json({ message: "Survey updated successfully!" });

    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};


// DELETE a survey
module.exports.performDelete = async (req, res, next) => {
    let id = req.params.id;

    try {
        await Surveys.findByIdAndRemove(id);
        res.json({ message: "Survey deleted successfully!" });

    }catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};

// GET ROUTE FOR TAKING THE SURVEY
module.exports.respondtoSurvey = async (req, res, next) => {
    let id = req.params.id;
    let surveyToTake = await Surveys.findById(id);
    console.log(surveyToTake);
    res.header("Access-Control-Allow-Origin", "*");
    res.json(surveyToTake)

}

// -- CREATING A RESPONSE OBJECT WITH REF TO USER, SURVEY AND RESPONSES
// THIS RESPONSE OBJECT WILL BE WHAT IS REFERENCED IN THE GENERATE REPORT SECTION
module.exports.submitSurveyResponses = async (req, res, next) => {
    
    let id = req.params.id; // get the survey to be referrenced
    try {

        // get questions
        let questions = [];
        let responses = [];

        // Get the questions
        let survey = await Surveys.findById(id);
        for (let i = 0; i < survey.questions.length; i++) {
            questions.push(survey.questions[i].Question);
            responses.push(req.body.responses[i]);
        }

        // Create a new SurveyModel object
        const newResponse = new Response({
        surveyId: id,
        respondentId: req.body.respondentId,
        takenBy: req.body.takenBy,
        questions: questions,
        responses: responses
        });
        await newResponse.save();
    
        res.json({ message: "Survey responses submitted successfully!", backend: newResponse });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}


module.exports.reportSurvey = async (req, res, next)=> {
    let id = req.params.id;
    
    try {
        let survey = await Surveys.findById(id);
        let responses = await Response.find();
 
        res.json({ success: true,
            title: 'Survey Report', 
            survey: survey, 
            responses: responses, 
            displayName: req.user ? req.user.displayName : '' });

    }catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.displayLoginPage = (req, res, next) => {
    // check if the user is already logged in
    if(!req.user)
    {
        res.render('auth/login', 
        {
           title: "Login",
           messages: req.flash('loginMessage'),
           displayName: req.user ? req.user.displayName : '' 
        })
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
        // server err?
        if(err)
        {
            return next(err);
        }
        // is there a user login error?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            // server error?
            if(err)
            {
                return next(err);
            }

            const payload = 
            {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
            }

            const authToken = jwt.sign(payload, DB.Secret, {
                expiresIn: 604800 // 1 week
            });
            
            return res.json({success: true, msg: 'User Logged in Successfully!', user: {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
            }, token: authToken});

        });
    })(req, res, next);
}


module.exports.displayRegisterPage = (req, res, next) => {
    // check if the user is not already logged in
    if(!req.user)
    {
        res.render('auth/register',
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    // instantiate a user object
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if(err)
        {
            console.log("Error: Inserting New User");
            if(err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!')
            }
            return res.render('auth/register',
            {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        }
        else
        {
            // if no error exists, then registration is successful

            // redirect the user and authenticate them

            return res.json({success: true, msg: 'User Registered Successfully!'});
        }
    });
}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.json({success: true, msg: 'User Successfully Logged out!'});
}

