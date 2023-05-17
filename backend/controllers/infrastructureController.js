const Infrastructure = require('../models/library/infrastructureModel');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const SearchFeatures = require('../utils/searchFeatures');
const ErrorHandler = require('../utils/errorHandler');
const Product = require("../models/productModel");
const cloudinary = require("cloudinary");

exports.createInfrastructure = asyncErrorHandler(async (req, res, next) => {

    req.body.user = req.user.id;
    const infrastructure = await Infrastructure.create(req.body);

    res.status(201).json({
        success: true,
        infrastructure
    });
});


// updateInfrastructure
exports.updateInfrastructure = asyncErrorHandler(async (req, res, next) => {
    let infrastructure = await Infrastructure.findOneAndUpdate({
        year: req.params.year,
        month: req.params.month,
    }, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    if (!infrastructure) {
        return next(new ErrorHandler("Infrastructure Not Found", 404));
    }

    res.status(200).json({
        success: true,
        infrastructure
    });
});

exports.getInfrastructure = asyncErrorHandler(async (req, res, next) => {
    const infrastructure = await Infrastructure.findOne({
        year: req.params.year,
        month: req.params.month,
    });

    res.status(200).json({
        success: true,
        infrastructure,
    });
});

