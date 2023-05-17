const mongoose = require('mongoose');

const processingSchema = new mongoose.Schema({
    requiredTitlesInCollection: {
        type: Number,
        required: [true, "Please Enter requiredTitlesInCollection"],
    },
    targetPopulationReached: {
        type: Number,
        required: [true, "Please Enter targetPopulationReached"],
    },
    numberOfAcademicPublicationsLast3Years: {
        type: Number,
        required: [true, "Please Enter numberOfAcademicPublicationsLast3Years"]
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

module.exports = mongoose.model('Processing', processingSchema);