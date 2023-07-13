var express = require('express');
var router = express.Router();

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
router.get('/home', indexController.displayHomePage);

/* GET create survey page. */
router.get('/create-survey',  indexController.displayCreateSurvey);  // remember to add in requireAuth -> removed for debugging

// POST Route for processing the Create Survey Page - CREATE Operation
router.post('/create-survey', indexController.processCreateSurvey); // remember to add in requireAuth -> removed for debugging

// POST Route for processing the Create Survey Page - CREATE Operation
router.get('/survey/report/:id', indexController.reportSurvey); // remember to add in requireAuth -> removed for debugging

// Get to perform Deletion - Delete Operation
router.get('/delete/:id', indexController.performDelete); // remember to add in requireAuth -> removed for debugging

// 13.07.2023
// TODO: Confirm that the data is getting into the DB okay
// TODO: Implement a take survey option -> remember to create a response object for each survey and user where the responses are held
//       ... we can then just take the response entry and map the questions and answers to fill out the table int the reports section.


// Leave the login / logout
/* Get Route for displaying the Login Page */
router.get('/login', indexController.displayLoginPage);

/* Post Route for processing the Login Page */
router.post('/login', indexController.processLoginPage);

/* Get Route for displaying the Register Page */
router.get('/register', indexController.displayRegisterPage);

/* Get Route for processing the Register Page */
router.post('/register', indexController.processRegisterPage);

/* Get to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;
