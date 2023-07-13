let mongoose = require('mongoose');
// let Question = require('./question');

// create model class
let surveyModel = mongoose.Schema({
    name: String, 
    creator: String,

    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: Date, 
    questions: [{
        Question: String,
        OptionOne: String,
        OptionTwo: String,
        OptionThree: String,
        OptionFour: String,
        Response: String
    }]
},
{
    collection: 'surveys'
});

module.exports = mongoose.model('Surveys', surveyModel);