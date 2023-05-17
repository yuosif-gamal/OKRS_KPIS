const mongoose = require('mongoose');



const collectionsSchema = new mongoose.Schema({
    children: {
        type: Number,
        required: [true, "Please Enter children"],
    },
    journalsAndPeriodicals: {
        type: Number,
        required: [true, "Please Enter journalsAndPeriodicals"],
    },
    electronicResources: {
        type: Number,
        required: [true, "Please Enter electronicResources"]
    },
    database: {
        type: Number,
        required: [true, "Please Enter database"],
    },
    digitalCollection: {
        type: Number,
        required: [true, "Please Enter digitalCollection"]
    },
    digitalRepository3Years: {
        type: Number,
        required: [true, "Please Enter digitalRepository3Years"],
    },
    adults: {
        type: Number,
        required: [true, "Please Enter adults"],
    },
    totalNoOfRareMaterials: {
        type: Number,
        required: [true, "Please Enter totalNoOfRareMaterials"],
    },
    totalOfRareMaterialsNeedConservation: {
        type: Number,
        required: [true, "Please Enter totalOfRareMaterialsNeedConservation"],
    },
    numberOfAllInterLibraryLoans: {
        type: Number,
        required: [true, "Please Enter numberOfAllInterLibraryLoans"],
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

module.exports = mongoose.model('Collections', collectionsSchema);