let mongoose = require('mongoose');


// Backup for Garbage Collection
// create model class
let surveyModelOld = mongoose.Schema({
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
        Response: String
    },
    questionTwo: {
        Question: String,
        OptionOne: String,
        OptionTwo: String,
        OptionThree: String,
        OptionFour: String,
        Response: String
    },
    questionThree: {
        Question: String,
        OptionOne: String,
        OptionTwo: String,
        OptionThree: String,
        OptionFour: String,
        Response: String
    }
},
{
    collection: 'surveysOld'
});

module.exports = mongoose.model('SurveysOld', surveyModelOld);