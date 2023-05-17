const Finance = require('../models/library/financeModel');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const ErrorHandler = require('../utils/errorHandler');

exports.createFinance = asyncErrorHandler(async (req, res, next) => {

    req.body.user = req.user.id;
    const finance = await Finance.create(req.body);

    res.status(201).json({
        success: true,
        finance
    });
});


// updateInfrastructure
exports.updateFinance = asyncErrorHandler(async (req, res, next) => {
    let finance = await Finance.findOneAndUpdate({
        year: req.params.year,
        month: req.params.month,
    }, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    if (!finance) {
        return next(new ErrorHandler("finance Not Found", 404));
    }

    res.status(200).json({
        success: true,
        finance
    });
});

exports.getFinance = asyncErrorHandler(async (req, res, next) => {

    const finance = await Finance.findOne({
        year: req.params.year,
        month: req.params.month,
    });

    res.status(200).json({
        success: true,
        finance,
    });
});