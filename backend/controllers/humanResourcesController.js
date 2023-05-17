const HumanResources = require('../models/library/humanResourcesModel');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const SearchFeatures = require('../utils/searchFeatures');
const ErrorHandler = require('../utils/errorHandler');

exports.createHumanResources = asyncErrorHandler(async (req, res, next) => {

    req.body.user = req.user.id;
    const humanResources = await HumanResources.create(req.body);

    res.status(201).json({
        success: true,
        humanResources
    });
});


// updateCollections
exports.updateHumanResources = asyncErrorHandler(async (req, res, next) => {
    let humanResources = await HumanResources.findOneAndUpdate({
        year: req.params.year,
        month: req.params.month,
    }, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    if (!humanResources) {
        return next(new ErrorHandler("humanResources Not Found", 404));
    }

    res.status(200).json({
        success: true,
        humanResources
    });
});

exports.getHumanResources = asyncErrorHandler(async (req, res, next) => {

    const humanResources = await HumanResources.findOne({
        year: req.params.year,
        month: req.params.month,
    });

    res.status(200).json({
        success: true,
        humanResources,
    });
});