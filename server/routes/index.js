let express = require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');
let passport = require('passport');

let indexController = require('../controllers/index');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// 12.07.2023
// TODO: Move survey list into the landing page -- I thought we were moving it to the main page? Or are we moving them all to the Survey Route?
// TODO: Finish Survey model/schema  -- OK
// TODO: Populate dummy data on Atlas -- OK  
// TODO: - READ functionality         -- Create Survey and Delete Survey Okay
// How do we want to deal with the Update?


/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
// router.get('/home', indexController.displayHomePage);

/* GET create survey page. */
//router.get('/create-survey',   indexController.displayCreateSurvey);  
// POST Route for processing the Create Survey Page - CREATE Operation
router.post('/create-survey', indexController.processCreateSurvey); 

// Get to perform Deletion - Delete Operation
// router.get('/delete/:id', requireAuth, indexController.performDelete); 
// router.delete('/survey/delete/:id',passport.authenticate('jwt', {session: false}), indexController.performDelete); 

router.delete('/survey/delete/:id', indexController.performDelete); 

router.get('/survey/report/', indexController.reportSurvey); 

/* GET my survey page. */
//router.get('/survey/mysurveys',  indexController.displayMySurvey);

// 14.07.2023
// 2-add button to front if the user is the owner of a survey they can edit it. <<<
// 3-implement the edit controller / route / view

// Get to edit survey
//router.get('/survey/edit/:id', indexController.displayEditSurvey);
router.put('/survey/edit/:id', passport.authenticate('jwt', {session: false}), indexController.processEditSurvey); 

// Get to edit survey
// router.post('/survey/edit/:id', indexController.processEditSurvey);

// 13.07.2023
// TODO: Confirm that the data is getting into the DB okay
// TODO: Implement a take survey option -> remember to create a response object for each survey and user where the responses are held
//       ... we can then just take the response entry and map the questions and answers to fill out the table int the reports section.

//GET ROUTE FOR BRINGING UP THE SURVEY
router.get('/survey/:id',  indexController.respondtoSurvey); 

//POST ROUTE FOR POSTING THE RESPONSES
router.post('/survey/:id', indexController.submitSurveyResponses);  // Auth removed for nowSS

// Leave the login / logout
/* Get Route for displaying the Login Page */
// router.get('/login', indexController.displayLoginPage);
/* Post Route for processing the Login Page */
// router.post('/login', indexController.processLoginPage);
/* Get Route for displaying the Register Page */
// router.get('/register', indexController.displayRegisterPage);
/* Get Route for processing the Register Page */
// router.post('/register', indexController.processRegisterPage);
/* Get to perform UserLogout */
// router.get('/logout', indexController.performLogout);

router.post('/login', indexController.processLoginPage);
router.post('/register', indexController.processRegisterPage);
router.post('/logout', indexController.performLogout);

router.get('/surveys', (req, res) => {
    Survey.find({}, (err, surveys) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching surveys' });
      }
      return res.json(surveys);
    });
  });
module.exports = router;