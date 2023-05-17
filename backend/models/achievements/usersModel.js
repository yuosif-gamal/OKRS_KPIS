const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({

    visitsPhysical: {
        type: Number,
        required: [true, "Please Enter visitsPhysical"],
    },
    visitsVirtual: {
        type: Number,
        required: [true, "Please Enter visitsVirtual"],
    },
    activeBorrowers: {
        type: Number,
        required: [true, "Please Enter activeBorrowers"],
    },
    digitalActiveUsers: {
        type: Number,
        required: [true, "Please Enter digitalActiveUsers"],
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

module.exports = mongoose.model('Users', usersSchema);