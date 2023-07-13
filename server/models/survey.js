let mongoose = require('mongoose');

// create a model class
let surveyModel = mongoose.Schema({
    name: String,
    creator: String,
    // We need the surveys to have an expiry date, 
    // I'm thinking this is what we will need to make that work:
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: Date,
    // Integrated question data, this will be moved into another schema(s) at a later date
    questionOne: {
        Question: String,
        OptionOne: String,
        OptionTwo: String,
        optionThree: String,
        optionFour: String,
        answerMark: int,
    },
    questionTwo: {
        Question: String,
        OptionOne: String,
        OptionTwo: String,
        optionThree: String,
        optionFour: String,
        answerMark: int,
    },
    questionThree: {
        Question: String,
        OptionOne: String,
        OptionTwo: String,
        optionThree: String,
        optionFour: String,
        answerMark: int,
    } 
},
{
    collection: 'surveys'
});

module.exports = mongoose.model('Surveys', surveyModel);