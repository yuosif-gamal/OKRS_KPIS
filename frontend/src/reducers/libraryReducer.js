import {
    CLEAR_ERRORS,
    COLLECTIONS_SETUP,
    COLLECTIONS_SETUP_FAIL,
    COLLECTIONS_SETUP_RESET,
    COLLECTIONS_SETUP_SUCCESS,
    CURRENT_DATE_SETUP,
    INFRASTRUCTURE_SETUP,
    INFRASTRUCTURE_SETUP_FAIL,
    INFRASTRUCTURE_SETUP_RESET,
    INFRASTRUCTURE_SETUP_SUCCESS,
    FINANCE_SETUP,
    FINANCE_SETUP_FAIL,
    FINANCE_SETUP_RESET,
    FINANCE_SETUP_SUCCESS,
    HUMAN_RESOURCES_SETUP,
    HUMAN_RESOURCES_SETUP_FAIL,
    HUMAN_RESOURCES_SETUP_RESET,
    HUMAN_RESOURCES_SETUP_SUCCESS,
    PROCESSING_SETUP,
    PROCESSING_SETUP_FAIL,
    PROCESSING_SETUP_RESET,
    PROCESSING_SETUP_SUCCESS,
    LOAD_INFRASTRUCTURE_SUCCESS,
    LOAD_COLLECTIONS_SUCCESS,
    LOAD_PROCESSING_SUCCESS,
    LOAD_HUMAN_RESOURCES_SUCCESS,
    LOAD_INFRASTRUCTURE_REQUEST,
    LOAD_INFRASTRUCTURE_FAIL,
    LOAD_COLLECTIONS_REQUEST,
    LOAD_COLLECTIONS_FAIL,
    LOAD_PROCESSING_REQUEST,
    LOAD_PROCESSING_FAIL,
    LOAD_HUMAN_RESOURCES_REQUEST,
    LOAD_HUMAN_RESOURCES_FAIL, LOAD_FINANCE_REQUEST, LOAD_FINANCE_SUCCESS, LOAD_FINANCE_FAIL
} from "../constants/libraryConstants";

// infrastructure Reducer
export const infrastructureReducer = (state = {infrastructure: {}}, {type, payload}) => {
    switch (type) {
        case LOAD_INFRASTRUCTURE_REQUEST:
        case INFRASTRUCTURE_SETUP:
            return {
                ...state,
                loading: true,
            };
        case LOAD_INFRASTRUCTURE_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                infrastructure: payload,
            };
        case INFRASTRUCTURE_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                infrastructure: payload.infrastructure,
            };
        case LOAD_INFRASTRUCTURE_FAIL:
            return {
                ...state,
                loading: false,
            };
        case INFRASTRUCTURE_SETUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case INFRASTRUCTURE_SETUP_RESET:
            return {
                ...state,
                success: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

// Collections Reducer
export const collectionsReducer = (state = {collections: {}}, {type, payload}) => {
    switch (type) {
        case LOAD_COLLECTIONS_REQUEST:
        case COLLECTIONS_SETUP:
            return {
                ...state,
                loading: true,
            };
        case LOAD_COLLECTIONS_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                collections: payload,
            };
        case COLLECTIONS_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                collections: payload.collections,
            };
        case LOAD_COLLECTIONS_FAIL:
        case COLLECTIONS_SETUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case COLLECTIONS_SETUP_RESET:
            return {
                ...state,
                success: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}


// processing Reducer
export const processingReducer = (state = {processing: {}}, {type, payload}) => {
    switch (type) {
        case LOAD_PROCESSING_REQUEST:
        case PROCESSING_SETUP:
            return {
                ...state,
                loading: true,
            };
        case  LOAD_PROCESSING_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                processing: payload,
            };
        case  PROCESSING_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                processing: payload.processing,
            };
        case  LOAD_PROCESSING_FAIL:
        case  PROCESSING_SETUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case  PROCESSING_SETUP_RESET:
            return {
                ...state,
                success: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}


//  humanResources Reducer
export const humanResourcesReducer = (state = {humanResources: {}}, {type, payload}) => {
    switch (type) {
        case LOAD_HUMAN_RESOURCES_REQUEST:
        case HUMAN_RESOURCES_SETUP:
            return {
                ...state,
                loading: true,
            };
        case  LOAD_HUMAN_RESOURCES_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                humanResources: payload,
            };
        case HUMAN_RESOURCES_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                humanResources: payload.humanResources,
            };
        case  LOAD_HUMAN_RESOURCES_FAIL:
        case HUMAN_RESOURCES_SETUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case HUMAN_RESOURCES_SETUP_RESET:
            return {
                ...state,
                success: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

// finance Reducer
export const financeReducer = (state = {finance: {}}, {type, payload}) => {
    switch (type) {
        case LOAD_FINANCE_REQUEST:
        case  FINANCE_SETUP:
            return {
                ...state,
                loading: true,
            };
        case LOAD_FINANCE_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                finance: payload,
            };
        case  FINANCE_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                finance: payload.finance,
            };
        case LOAD_FINANCE_FAIL:
        case  FINANCE_SETUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case  FINANCE_SETUP_RESET:
            return {
                ...state,
                success: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}


// setupDateReducer Reducer
export const currentSetupDateReducer = (state = {currentSetupDate: {}}, {type, payload}) => {
    switch (type) {
        case CURRENT_DATE_SETUP:
            return state;
        default:
            return state;
    }
}