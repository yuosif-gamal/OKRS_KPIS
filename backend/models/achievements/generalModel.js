const mongoose = require('mongoose');

const generalSchema = new mongoose.Schema({
    noOfWorkingDays: {
        type: Number,
        required: [true, "Please Enter noOfWorkingDays"],
    },
    noOfStaff: {
        type: Number,
        required: [true, "Please Enter noOfStaff"],
    },
    noOfTotalWorkingHours: {
        type: Number,
        required: [true, "Please Enter noOfTotalWorkingHours"],
    },
    noOfStaffWorkingHours: {
        type: Number,
        required: [true, "Please Enter noOfStaffWorkingHours"]
    },
    fte: {
        type: Number,
        required: [true, "Please Enter The number of full-time equivalent (FTE) employees assigned to user services"]
    },
    userAttendancesAtTrainingLessons: {
        type: Number,
        required: [true, "Please userAttendancesAtTrainingLessons"]
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

module.exports = mongoose.model('General', generalSchema);