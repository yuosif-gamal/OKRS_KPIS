const mongoose = require('mongoose');

const publicationsSchema = new mongoose.Schema({

    noOfRecordsInstitutionAcademicPublications: {
        type: Number,
        required: [true, "Please Enter No. of records Institution’s Academic Publications in the Institutional Repository"],
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

module.exports = mongoose.model('Publications', publicationsSchema);