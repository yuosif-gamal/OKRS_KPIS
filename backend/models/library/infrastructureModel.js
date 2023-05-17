const mongoose = require('mongoose');

const infrastructureSchema = new mongoose.Schema({
    squaredMetersOfBuildings: {
        type: Number,
        required: [true, "Please Enter Squared Meters Of Buildings"],
    },
    squaredMetersAvailableForPublic: {
        type: Number,
        required: [true, "Please Enter Squared Meters Available For Public"],
    },
    readingHallsSeats: {
        type: Number,
        required: [true, "Please Enter readingHallsSeats"]
    },
    readingHallsTables: {
        type: Number,
        required: [true, "Please Enter readingHallsTables"],
    },
    activitiesHallsTables: {
        type: Number,
        required: [true, "Please Enter activitiesHallsTables"]
    },
    activitiesHallsSeats: {
        type: Number,
        required: [true, "Please Enter activitiesHallsSeats"],
    },
    noOfPc: {
        type: Number,
        required: [true, "Please Enter noOfPc"],
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

module.exports = mongoose.model('Infrastructure', infrastructureSchema);