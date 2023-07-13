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

// TODO: Move survey list into the landing page
// TODO: Finish Survey model/schema
// TODO: Populate dummy data on Atlas   
// TODO: - READ functionality




/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET create survey page. */
router.get('/create-survey', requireAuth, indexController.displayCreateSurvey);

// POST Route for processing the Create Survey Page - CREATE Operation
router.post('/create-survey', requireAuth, indexController.displayCreateSurvey);


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
