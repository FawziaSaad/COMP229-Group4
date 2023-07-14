let mongoose = require('mongoose');


// create model class
let ResponseModel = mongoose.Schema({
    
    surveyId: {
        type: mongoose.Schema.Types.ObjectId
    },
    respondentId: {
        type: mongoose.Schema.Types.ObjectId
    },
    dateTaken: {
        type: Date,
        default: Date.now
    },
    // Moh, Should we update also the question here? So for the reporting, it's all in this Schema?
    questions: [{
        type: String
    }],
    responses: [{   // Also, changed the name from 'response' to 'responses'
        type: String
    }]
},
{
    collection: 'responses'
});

module.exports = mongoose.model('Response', ResponseModel);