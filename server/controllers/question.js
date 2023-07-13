let mongoose = require('mongoose');

// create model class
let questionModel = mongoose.Schema({
    surveyID: String,
    Question: String,
    OptionOne: String,
    OptionTwo: String,
    OptionThree: String,
    OptionFour: String,
    Response: String
},
{
    collection: 'question'
});

module.exports = mongoose.model('Question', questionModel);