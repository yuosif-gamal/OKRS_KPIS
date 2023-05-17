const mongoose = require('mongoose');



const financeSchema = new mongoose.Schema({
    acquisition: {
        type: Number,
        required: [true, "Please Enter acquisition"],
    },
    waterAndLighting: {
        type: Number,
        required: [true, "Please Enter waterAndLighting"],
    },
    variousRequirements: {
        type: Number,
        required: [true, "Please Enter variousRequirements"]
    },
    maintenance: {
        type: Number,
        required: [true, "Please Enter maintenance"],
    },
    postAndTelecommunications: {
        type: Number,
        required: [true, "Please Enter postAndTelecommunications"]
    },
    publishingAndAdvertisingAndReception: {
        type: Number,
        required: [true, "Please Enter publishingAndAdvertisingAndReception"]
    },
    expensesPrintingAndTranslationsAndJournalsAndCopyright: {
        type: Number,
        required: [true, "Please Enter expensesPrintingAndTranslationsAndJournalsAndCopyright"]
    }, publicTransportAndTransitions: {
        type: Number,
        required: [true, "Please Enter publicTransportAndTransitions"]
    }, expensesOfVariousService: {
        type: Number,
        required: [true, "Please Enter expensesOfVariousService"]
    }, booksAndMediaItems: {
        type: Number,
        required: [true, "Please Enter booksAndMediaItems"]
    }, conferences: {
        type: Number,
        required: [true, "Please Enter conferences"]
    }, trainingPrograms: {
        type: Number,
        required: [true, "Please Enter trainingPrograms"]
    }, otherExpenditures: {
        type: Number,
        required: [true, "Please Enter otherExpenditures"]
    }, institutionalMeansAllocated: {
        type: Number,
        required: [true, "Please Enter institutionalMeansAllocated"]
    }, costOfEachElectronicResourceForSpecifiedPeriod: {
        type: Number,
        required: [true, "Please Enter costOfEachElectronicResourceForSpecifiedPeriod"]
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

module.exports = mongoose.model('Finance', financeSchema);