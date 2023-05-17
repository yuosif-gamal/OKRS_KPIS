const mongoose = require('mongoose');

const humanResourcesSchema = new mongoose.Schema({
    noPrimaryUserGroup: {
        type: Number,
        required: [true, "Please Enter noPrimaryUserGroup"],
    },
    openingHoursTotal: {
        type: Number,
        required: [true, "Please Enter openingHoursTotal"],
    },
    totalNumOfHours: {
        type: Number,
        required: [true, "Please Enter totalNumOfHours"]
    },
    noOfStaff: {
        type: Number,
        required: [true, "Please Enter noOfStaff"],
    },
    staffHoursTotal: {
        type: Number,
        required: [true, "Please Enter staffHoursTotal"]
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

module.exports = mongoose.model('HumanResources', humanResourcesSchema);