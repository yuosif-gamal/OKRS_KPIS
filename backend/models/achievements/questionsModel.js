const mongoose = require('mongoose');

const questionsSchema = new mongoose.Schema({
    noOfQuestionsAnswered: {
        type: Number,
        required: [true, "Please Enter digitalActiveUsers"],
    },
    totalNoOfQuestionsHandled: {
        type: Number,
        required: [true, "Please Enter totalNoOfQuestionsHandled"],
    },
    createdAt: {
        type: Date,
        default:
        Date.now,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    year: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Questions', questionsSchema);