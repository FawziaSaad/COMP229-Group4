let mongoose = require('mongoose');
// let Question = require('./question');

// create model class
let SurveyModel = mongoose.Schema({
    name: String, 
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    creator: String,

    startDate: {
        type: Date,
        default: Date.now
            },
    surveyType: {
        type: String,
        enum: ['SA', 'MCQ'],
        required: true
    },
    endDate: {
        type: Date,
        default: () => {
          const now = new Date();
          const fiveDaysFromNow = new Date(now.getTime() + (5 * 24 * 60 * 60 * 1000));
          return fiveDaysFromNow;
        },
    },
    questions: [{
        Question: String,
        OptionOne: String,
        OptionTwo: String,
        OptionThree: String,
        OptionFour: String,
    }]
},
{
    collection: 'surveys'
});

module.exports = mongoose.model('Surveys', SurveyModel);