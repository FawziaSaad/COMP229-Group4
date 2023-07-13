let mongoose = require('mongoose');


// create model class
let ResponseModel = mongoose.Schema({
    
    surveyId: {
        type: mongoose.Schema.Types.ObjectId
    },
    respondentId: {
        type: mongoose.Schema.Types.ObjectId
    },
    response: [{
        type: String
    }]
},
{
    collection: 'responses'
});

module.exports = mongoose.model('Response', ResponseModel);