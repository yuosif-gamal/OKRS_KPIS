const express = require('express');
const {
    createInfrastructure,
    getInfrastructure,
    updateInfrastructure
} = require('../controllers/infrastructureController');
const {isAuthenticatedUser, authorizeRoles} = require("../middlewares/auth");
const {createCollections, getCollections, updateCollections} = require("../controllers/collectionsController");
const {
    createHumanResources,
    getHumanResources,
    updateHumanResources
} = require("../controllers/humanResourcesController");
const {createProcessing, getProcessing, updateProcessing} = require("../controllers/processingController");
const {createFinance, getFinance, updateFinance} = require("../controllers/financeController");

const router = express.Router();

router.route('/library/librarySetup/infrastructure').post(isAuthenticatedUser, createInfrastructure);
router.route('/library/librarySetup/infrastructure/:year/:month').get(isAuthenticatedUser, getInfrastructure);
router.route('/library/librarySetup/infrastructure/:year/:month').put(isAuthenticatedUser, updateInfrastructure);

router.route('/library/librarySetup/collections').post(isAuthenticatedUser, createCollections);
router.route('/library/librarySetup/collections/:year/:month').get(isAuthenticatedUser, getCollections);
router.route('/library/librarySetup/collections/:year/:month').put(isAuthenticatedUser, updateCollections);

router.route('/library/librarySetup/humanResources').post(isAuthenticatedUser, createHumanResources);
router.route('/library/librarySetup/humanResources/:year/:month').get(isAuthenticatedUser, getHumanResources);
router.route('/library/librarySetup/humanResources/:year/:month').put(isAuthenticatedUser, updateHumanResources);

router.route('/library/librarySetup/processing').post(isAuthenticatedUser, createProcessing);
router.route('/library/librarySetup/processing/:year/:month').get(isAuthenticatedUser, getProcessing);
router.route('/library/librarySetup/processing/:year/:month').put(isAuthenticatedUser, updateProcessing);

router.route('/library/librarySetup/finance').post(isAuthenticatedUser, createFinance);
router.route('/library/librarySetup/finance/:year/:month').get(isAuthenticatedUser, getFinance);
router.route('/library/librarySetup/finance/:year/:month').put(isAuthenticatedUser, updateFinance);

module.exports = router;