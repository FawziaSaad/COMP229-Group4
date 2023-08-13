let mongoose = require('mongoose');


// create model class
let ResponseModel = mongoose.Schema({
    
    surveyId: {
        // type: mongoose.Schema.Types.ObjectId // must uncomment when User is implemented!
        type: String,
    },
    respondentId: {
        // type: mongoose.Schema.Types.ObjectId // must uncomment when User is implemented!
        type: String,
    },
    takenBy:{
        type: String, 
        require: "a response must belong to a user"
    },
    dateTaken: {
        type: Date,
        default: Date.now
    },
    questions: [{
        type: String
    }],
    responses: [{   
        type: String
    }]
},
{
    collection: 'responses'
});

module.exports = mongoose.model('Response', ResponseModel);