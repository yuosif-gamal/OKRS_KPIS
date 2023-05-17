const mongoose = require('mongoose');



const activitiesSchema = new mongoose.Schema({
    scientificAndEducationalActivities: {
        type: Number,
        required: [true, "Please Enter scientificAndEducationalActivities"],
    },
    seminarsAndConferences: {
        type: Number,
        required: [true, "Please Enter seminarsAndConferences"],
    },
    outreachActivities: {
        type: Number,
        required: [true, "Please Enter outreachActivities"],
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

module.exports = mongoose.model('Activities', activitiesSchema);