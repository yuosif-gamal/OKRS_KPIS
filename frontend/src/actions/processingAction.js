import axios from "axios"
import {
    CLEAR_ERRORS,
    LOAD_PROCESSING_FAIL,
    LOAD_PROCESSING_REQUEST,
    LOAD_PROCESSING_SUCCESS,
    PROCESSING_SETUP,
    PROCESSING_SETUP_FAIL,
    PROCESSING_SETUP_SUCCESS,
} from "../constants/libraryConstants";


export const createProcessing = (processingData) => async (dispatch) => {
    try {
        dispatch({type: PROCESSING_SETUP});
        const config = {header: {"Content-Type": "application/json"}}
        const {data} = await axios.post("/api/v1/library/librarySetup/processing", processingData, config);

        dispatch({
            type: PROCESSING_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PROCESSING_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const updateProcessing = (year, month, processingData) => async (dispatch) => {
    try {
        dispatch({type: PROCESSING_SETUP});
        const config = {header: {"Content-Type": "application/json"}}
        const {data} = await axios.put(`/api/v1/library/librarySetup/processing/${year}/${month}`
            , processingData,
            config);

        dispatch({
            type: PROCESSING_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PROCESSING_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}


// load Processing
export const getProcessing = (year, month) => async (dispatch) => {
    try {

        dispatch({type: LOAD_PROCESSING_REQUEST});

        const {data} = await axios.get(`/api/v1/library/librarySetup/processing/${year}/${month}`);

        dispatch({
            type: LOAD_PROCESSING_SUCCESS,
            payload: data.processing,
        });

    } catch (error) {
        dispatch({
            type: LOAD_PROCESSING_FAIL,
        });
    }
};

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({type: CLEAR_ERRORS});
}