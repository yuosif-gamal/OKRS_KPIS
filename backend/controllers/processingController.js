const Processing = require('../models/library/processingModel');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const ErrorHandler = require('../utils/errorHandler');

exports.createProcessing = asyncErrorHandler(async (req, res, next) => {

    req.body.user = req.user.id;
    const processing = await Processing.create(req.body);

    res.status(201).json({
        success: true,
        processing
    });
});


// updateCollections
exports.updateProcessing = asyncErrorHandler(async (req, res, next) => {
    let processing = await Processing.findOneAndUpdate({
        year: req.params.year,
        month: req.params.month,
    }, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    if (!processing) {
        return next(new ErrorHandler("Processing Not Found", 404));
    }

    res.status(200).json({
        success: true,
        processing
    });
});

exports.getProcessing = asyncErrorHandler(async (req, res, next) => {

    const processing = await Processing.findOne({
        year: req.params.year,
        month: req.params.month,
    });

    res.status(200).json({
        success: true,
        processing,
    });
});