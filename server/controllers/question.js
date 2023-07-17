// let mongoose = require('mongoose');

// // create model class
// let questionModel = mongoose.Schema({
//     surveyID: String,
//     Question: String,
//     OptionOne: String,
//     OptionTwo: String,
//     OptionThree: String,
//     OptionFour: String,
//     Response: String
// },
// {
//     collection: 'question'
// });

// module.exports = mongoose.model('Question', questionModel);






// let mongoose = require('mongoose');
// let Question = require('./question');

// // create model class
// let surveyModel = mongoose.Schema({
//     name: String, 
//     creator: String,

//     startDate: {
//         type: Date,
//         default: Date.now
//     },
//     endDate: Date, 
//     questions: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Question'
//     }]
        

// },
// {
//     collection: 'surveys'
// });

// module.exports = mongoose.model('Surveys', surveyModel);