import axios from "axios"
import {
    CLEAR_ERRORS,
    COLLECTIONS_SETUP, COLLECTIONS_SETUP_FAIL, COLLECTIONS_SETUP_SUCCESS,
    LOAD_COLLECTIONS_FAIL,
    LOAD_COLLECTIONS_REQUEST,
    LOAD_COLLECTIONS_SUCCESS,
} from "../constants/libraryConstants";


export const createCollections = (collectionsData) => async (dispatch) => {
    try {
        dispatch({type: COLLECTIONS_SETUP});
        const config = {header: {"Content-Type": "application/json"}}
        const {data} = await axios.post("/api/v1/library/librarySetup/collections", collectionsData, config);

        dispatch({
            type: COLLECTIONS_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: COLLECTIONS_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const updateCollections = (year, month,collectionsData) => async (dispatch) => {
    try {
        dispatch({ type: COLLECTIONS_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.put(`/api/v1/library/librarySetup/collections/${year}/${month}`
            , collectionsData,
            config);

        dispatch({
            type: COLLECTIONS_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: COLLECTIONS_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}


// getCollections
export const getCollections = (year, month) => async (dispatch) => {

    try {
        dispatch({type: LOAD_COLLECTIONS_REQUEST});
        const {data} = await axios.get(`/api/v1/library/librarySetup/collections/${year}/${month}`);
        dispatch({
            type: LOAD_COLLECTIONS_SUCCESS,
            payload: data.collections,
        });

    } catch (error) {
        dispatch({
            type: LOAD_COLLECTIONS_FAIL,
        });
    }
};

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({type: CLEAR_ERRORS});
}