import axios from "axios"
import {
    CLEAR_ERRORS,
    INFRASTRUCTURE_SETUP,
    INFRASTRUCTURE_SETUP_FAIL,
    INFRASTRUCTURE_SETUP_SUCCESS,
    LOAD_INFRASTRUCTURE_FAIL,
    LOAD_INFRASTRUCTURE_REQUEST,
    LOAD_INFRASTRUCTURE_SUCCESS,
} from "../constants/libraryConstants";


export const createInfrastructure = (infrastructureData) => async (dispatch) => {
    try {
        dispatch({ type: INFRASTRUCTURE_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.post("/api/v1/library/librarySetup/infrastructure", infrastructureData, config);

        dispatch({
            type: INFRASTRUCTURE_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: INFRASTRUCTURE_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const updateInfrastructure = (year, month,infrastructureData) => async (dispatch) => {
    try {
        dispatch({ type: INFRASTRUCTURE_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.put(`/api/v1/library/librarySetup/infrastructure/${year}/${month}`
            , infrastructureData,
            config);

        dispatch({
            type: INFRASTRUCTURE_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: INFRASTRUCTURE_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}

// load Infrastructure
export const getInfrastructure = (year, month) => async (dispatch) => {
    try {

        dispatch({ type: LOAD_INFRASTRUCTURE_REQUEST });

        const { data } = await axios.get(`/api/v1/library/librarySetup/infrastructure/${year}/${month}`);
        dispatch({
            type: LOAD_INFRASTRUCTURE_SUCCESS,
            payload: data.infrastructure,
        });
    } catch (error) {
        alert(error)
        dispatch({
            type: LOAD_INFRASTRUCTURE_FAIL,
        });
    }
};

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}