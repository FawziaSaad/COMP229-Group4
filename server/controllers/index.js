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

module.exports.reportSurvey = async (req, res, next)=> {
    let id = req.params.id;

    try {
        var survey = await Surveys.findById(id);
        console.log(survey);
        res.render('surveys/report', {title: 'Survey Report', survey: survey, displayName: req.user ? req.user.displayName : ''});
    }catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};
// module.exports.displayHomePage = (req, res, next) => {
//     res.render('index', { title: 'Home', displayName: req.user ? req.user.displayName : '' });
// }

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
        creator: "am,r", //req.user.displayName,
        questions: questions,
        startDate: new Date(),
        endDate: new Date(),
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

//TODO:
// POST THE RESPONSES FOR THE SURVEY
// -- CREATING A RESPONSE OBJECT WITH REF TO USER, SURVEY AND RESPONSES
// THIS RESPONSE OBJECT WILL BE WHAT IS REFERENCED IN THE GENERATE REPORT SECTION



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
            return res.redirect('/surveys');
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
                res.redirect('/surveys')
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

