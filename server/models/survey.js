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
    questions: String
        

},
{
    collection: 'surveys'
});

module.exports = mongoose.model('Surveys', surveyModel);