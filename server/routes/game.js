let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let gameController = require('../controllers/game')

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

// Get Route for the Game List page - READ Operation
router.get('/', gameController.displayGameList);

// Get Route for the Add page - CREATE Operation
router.get('/add', gameController.displayAddPage);

router.get('/takesurvey', gameController.displayTakeSurveyPage);

// Post Route for processing the Add page - CREATE Operation
router.post('/add', gameController.processAddPage);

// Get Route for displaying the Edit page - UPDATE Operation
router.get('/edit/:id', requireAuth, gameController.displayEditPage);

// Post Route for processing the Edit page - UPDATE Operation
router.post('/edit/:id', requireAuth, gameController.processEditPage);

// Get to perform Deletion - Delete Operation
router.get('/delete/:id', requireAuth, gameController.performDelete);

module.exports = router;