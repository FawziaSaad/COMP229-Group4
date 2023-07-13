let mongoose = require('mongoose');

// create model class
let surveyModel = mongoose.Schema({
    name: String, 
    creator: String,

    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: Date, 
    questionOne: {
        Question: String,
        OptionOne: String,
        OptionTwo: String,
        OptionThree: String,
        OptionFour: String,
        answerMark: int,
    },
    questionTwo: {
        Question: String,
        OptionOne: String,
        OptionTwo: String,
        OptionThree: String,
        OptionFour: String,
        answerMark: int,
    },
    questionThree: {
        Question: String,
        OptionOne: String,
        OptionTwo: String,
        OptionThree: String,
        OptionFour: String,
        answerMark: int,
    }
},
{
    collection: 'surveys'
});