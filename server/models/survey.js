let mongoose = require('mongoose');
// let Question = require('./question');

const questionSchema = new mongoose.Schema({
    questionMessage: {
      type: String,
      required: true
    },
    options: [{
      type: String,
      required: true
    }],
    answer: {
      type: String,
      required: true
    },
    questionType: {
      type: String,
      enum: ['SA', 'MCQ'],
      required: true
    }
  });

// create model class
let SurveyModel = mongoose.Schema({
    name: String, 
    creator: String,

    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: Date,
    questions: [questionSchema]
},
{
    collection: 'surveys'
});

module.exports = mongoose.model('Surveys', SurveyModel);