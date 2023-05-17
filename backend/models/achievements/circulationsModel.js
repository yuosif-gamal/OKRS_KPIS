const mongoose = require('mongoose');

const circulationsSchema = new mongoose.Schema({

    electronicResources: {
        type: Number,
        required: [true, "Please Enter Electronic resources"],
    },
    books: {
        type: Number,
        required: [true, "Please Enter noOfStaff"],
    },
    noOfDownloadsElectronicResource: {
        type: Number,
        required: [true, "Please Enter noOfDownloadsElectronicResource"],
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

module.exports = mongoose.model('Circulations', circulationsSchema);