import axios from "axios"
import {
    CLEAR_ERRORS,
    FINANCE_SETUP,
    FINANCE_SETUP_FAIL,
    FINANCE_SETUP_SUCCESS,
    LOAD_FINANCE_FAIL,
    LOAD_FINANCE_REQUEST,
    LOAD_FINANCE_SUCCESS,
} from "../constants/libraryConstants";


export const createFinance = (financeData) => async (dispatch) => {
    try {
        dispatch({ type: FINANCE_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.post("/api/v1/library/librarySetup/finance", financeData, config);

        dispatch({
            type: FINANCE_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FINANCE_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const updateFinance = (year, month,financeData) => async (dispatch) => {
    try {
        dispatch({ type: FINANCE_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.put(`/api/v1/library/librarySetup/finance/${year}/${month}`
            , financeData,
            config);

        dispatch({
            type: FINANCE_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FINANCE_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}

// load Finance
export const getFinance = (year, month) => async (dispatch) => {
    try {

        dispatch({ type: LOAD_FINANCE_REQUEST });

        const { data } = await axios.get(`/api/v1/library/librarySetup/finance/${year}/${month}`);

        dispatch({
            type: LOAD_FINANCE_SUCCESS,
            payload: data.finance,
        });

    } catch (error) {
        dispatch({
            type: LOAD_FINANCE_FAIL,
        });
    }
};

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}