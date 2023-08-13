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


/* GET home page. */
router.get('/', indexController.displayHomePage);

// POST Route for processing the Create Survey Page - CREATE Operation
router.post('/create-survey', indexController.processCreateSurvey); 

// Get to perform Deletion - Delete Operation

router.delete('/survey/delete/:id', indexController.performDelete); 

router.get('/survey/report/', indexController.reportSurvey); 

// Get to edit survey
router.post('/survey/edit/:id', indexController.processEditSurvey);

//GET ROUTE FOR BRINGING UP THE SURVEY
router.get('/survey/:id',  indexController.respondtoSurvey); 

//POST ROUTE FOR POSTING THE RESPONSES
router.post('/survey/:id', indexController.submitSurveyResponses);  

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