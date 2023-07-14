let mongoose = require('mongoose');


const responseSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    surveyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Survey',
      required: true
    },
    surveyName: {
      type: String,
      required: true
    },
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true
    },
    response: {
      type: String,
      required: true
    }
  },
  {
    collection: 'responses'
  });

  module.exports = mongoose.model('Response', responseSchema);