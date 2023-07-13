var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

// TODO: Move survey list into the landing page
// TODO: Finish Survey model/schema
// TODO: Populate dummy data on Atlas   
// TODO: - READ functionality


/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);


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
