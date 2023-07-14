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


module.exports.displayHomePage = async (req, res, next) => {
    try {
        let SurveyList = await Surveys.find();
        // res.json(surveyList);
        res.render('index', { 
            title: 'Home', 
            SurveyList: SurveyList,
            displayName: req.user ? req.user.displayName : '' })
    } catch (err){
        console.log(err);
    }
}

// module.exports.displayHomePage = (req, res, next) => {
//     res.render('index', { title: 'Home', displayName: req.user ? req.user.displayName : '' });
// }

module.exports.displayCreateSurvey = async (req, res, next)=>{
    try {
        res.render('surveys/createTEST', 
        {title: 'Create survey',})
    } catch (err){
        console.log(err);
    }
};

module.exports.processCreateSurvey = async (req, res, next) => {
    const surveyData = req.body;
    
    // Extract survey name
    const surveyName = surveyData.surveyName;
    
    // TODO: get the amount of questions from the backend

    // Extract questions and responses
    const questions = [];
    for (let count = 0; count < 2; count++) {
        const questionKey = `Question${count + 1}`;
        const responseKey = `response${count + 1}`;
        const question = surveyData[questionKey];
        const responses = surveyData[responseKey];

        questions.push({
        Question: question,
        OptionOne: responses[0] || "",
        OptionTwo: responses[1] || "",
        OptionThree: responses[2] || "",
        OptionFour: responses[3] || "",
        });
    }
    
    try {
        // Create a new SurveyModel object
        const newSurvey = new Surveys({
        name: surveyName,
        creator: req.user.displayName,
        surveyType: 'MCQ',                      // remember to dynamically specify, NOT HARD CODE
        questions: questions,
        });
    
        // Save the new survey to the database
        await newSurvey.save();
    
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

// DELETE a survey
module.exports.performDelete = async (req, res, next) => {
    let id = req.params.id;

    try {
        await Surveys.findByIdAndRemove(id);
        res.redirect('/');
    }catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};

//TODO:
// GET ROUTE FOR TAKING THE SURVEY
module.exports.respondtoSurvey = async (req, res, next) => {
    let id = req.params.id;
    let surveyToTake = await Surveys.findById(id);
    res.render('survey',{
        title: "Taking a Survey",
        surveyToTake: surveyToTake
    })

}

//TODO:
// POST THE RESPONSES FOR THE SURVEY
// -- CREATING A RESPONSE OBJECT WITH REF TO USER, SURVEY AND RESPONSES
// THIS RESPONSE OBJECT WILL BE WHAT IS REFERENCED IN THE GENERATE REPORT SECTION
module.exports.submitSurveyResponses = async (req, res, next) => {
    
    let id = req.params.id; // get the survey to be referrenced
    try {

        let { responsesBody } = req.body;
        // get questions
        let questions = [];
        let responses = [];

        // Get the answers
        for (const answerKey in responsesBody) {
            responses.push(responsesBody[answerKey]);
          }


        // Get the questions
        let survey = await Surveys.findById(id);
        for (let i = 0; i < survey.questions.length; i++) {
            questions.push(survey.questions[i].Question);
            responses.push(req.body[`answers[${i}]`]);
        }

        // Debugging
        // res.json({
        //     questions: questions,
        //     responses: responses
        // });

        // Create a new SurveyModel object
        const newResponse = new Response({
        surveyId: id,
        respondentId: req.user.id,
        questions: questions,
        responses: responses
        });
    
        // Save the new survey to the database
        await newResponse.save();
    
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}


module.exports.reportSurvey = async (req, res, next)=> {
    let id = req.params.id;

    try {
        let survey = await Surveys.findById(id);
        console.log(survey);
        res.render('surveys/report', {title: 'Survey Report', survey: survey, displayName: req.user ? req.user.displayName : ''});

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
        });
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
        //server err?
        if(err)
        {
            return next(err);
        }
        // is there a user login err?
        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            //server err?
            if(err)
            {
                return next(err);
            }
            return res.redirect('/');
        });
    })(req, res, next);
}

module.exports.displayRegisterPage = (req, res, next) => {
    // check if the user is not already logged in
    if(!req.user)
    {
        res.render('auth/register',
        {
            title: "Register",
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
    //initialize an user object
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if(err)
        {
            console.log(err);
            console.log("Error: Inserting New User");
            if(err.name == 'UserExistsError')
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!');
            }
            return res.render('auth/register',
            {
                title: "Register",
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        }
        else
        {
            //if registration is success
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/')
            });
        }
    });
}

module.exports.performLogout = (req, res, next) => {
    req.logout((err) => {
        if (err)
        {
            //handle error here
            console.log(err);
            return next(err);
        }
        return res.redirect('/');
    });
}

