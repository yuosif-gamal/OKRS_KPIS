import axios from "axios"
import {
    CLEAR_ERRORS,
    HUMAN_RESOURCES_SETUP,
    HUMAN_RESOURCES_SETUP_FAIL,
    HUMAN_RESOURCES_SETUP_SUCCESS, INFRASTRUCTURE_SETUP, INFRASTRUCTURE_SETUP_FAIL, INFRASTRUCTURE_SETUP_SUCCESS,
    LOAD_HUMAN_RESOURCES_FAIL,
    LOAD_HUMAN_RESOURCES_REQUEST,
    LOAD_HUMAN_RESOURCES_SUCCESS,
} from "../constants/libraryConstants";


export const createHumanResources  = (humanResourcesData) => async (dispatch) => {
    try {
        dispatch({ type: HUMAN_RESOURCES_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.post("/api/v1/library/librarySetup/humanResources", humanResourcesData, config);

        dispatch({
            type: HUMAN_RESOURCES_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: HUMAN_RESOURCES_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const updateHumanResources = (year, month,humanResourcesData) => async (dispatch) => {
    try {
        dispatch({ type: HUMAN_RESOURCES_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.put(`/api/v1/library/librarySetup/humanResources/${year}/${month}`
            , humanResourcesData,
            config);

        dispatch({
            type: HUMAN_RESOURCES_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: HUMAN_RESOURCES_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}



// load HumanResources
export const getHumanResources = (year, month) => async (dispatch) => {
    try {

        dispatch({ type: LOAD_HUMAN_RESOURCES_REQUEST });

        const { data } = await axios.get(`/api/v1/library/librarySetup/humanResources/${year}/${month}`);

        dispatch({
            type: LOAD_HUMAN_RESOURCES_SUCCESS,
            payload: data.humanResources,
        });

    } catch (error) {
        dispatch({
            type: LOAD_HUMAN_RESOURCES_FAIL,
        });
    }
};

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}