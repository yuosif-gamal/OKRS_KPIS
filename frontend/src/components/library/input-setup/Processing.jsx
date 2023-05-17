import { Grid, } from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";
import {createProcessing, getProcessing, updateProcessing} from "../../../actions/processingAction";
import {clearErrors} from "../../../actions/productAction";
import TextField from "@mui/material/TextField";
import MetaData from "../../Layouts/MetaData";
import Loader from "../../Layouts/Loader";
import {PROCESSING_SETUP_RESET} from "../../../constants/libraryConstants";


const Processing = ({year, month}) => {

    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();

    const {processing, loading, success, error} = useSelector((state) => state.processing);
    const [requiredTitlesInCollection, setRequiredTitlesInCollection] = useState();
    const [targetPopulationReached, setTargetPopulationReached] = useState();
    const [numberOfAcademicPublicationsLast3Years, setNumberOfAcademicPublicationsLast3Years] = useState();



    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("requiredTitlesInCollection", requiredTitlesInCollection);
        formData.set("targetPopulationReached", targetPopulationReached);
        formData.set("numberOfAcademicPublicationsLast3Years", numberOfAcademicPublicationsLast3Years);
        formData.set("year", year);
        formData.set("month", month);
        if (processing.year != null) {
            dispatch(updateProcessing(year, month, formData));

        } else {
            dispatch(createProcessing(formData));
        }
    }
    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        dispatch(getProcessing(year, month));
        if(processing.year !=null){
            setRequiredTitlesInCollection(processing.requiredTitlesInCollection);
            setTargetPopulationReached(processing.targetPopulationReached);
            setNumberOfAcademicPublicationsLast3Years(processing.numberOfAcademicPublicationsLast3Years);
        }

    }, [dispatch, year, month, error, enqueueSnackbar]);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        if (success) {
            enqueueSnackbar("Processing Setup Done", {variant: "success"});
            dispatch({type: PROCESSING_SETUP_RESET});
        }
    }, [dispatch, error, success, navigate, enqueueSnackbar]);


    return (
        <>
            <MetaData title="Processing"/>
            {loading ? <Loader/> :
                <>
                    <main className="w-full mt-12 sm:mt-0">
                        <div>
                            <form onSubmit={handleSubmit} encType="multipart/form-data"
                                  className="flex flex-col sm:flex-row bg-white rounded-lg shadow p-4" id="mainform">
                                <Grid container spacing={6}>
                                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{mt: 2}}>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-col sm:flex-row items-center gap-3"
                                                 id="areaInputs">
                                                <div
                                                    className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                    <TextField
                                                        type="number"
                                                        label="Required Titles In Collection"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={requiredTitlesInCollection}
                                                        onChange={e => {
                                                            setRequiredTitlesInCollection(parseInt(e.target.value.toString()));
                                                        }}/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-col sm:flex-row items-center gap-3"
                                                 id="areaInputs">
                                                <div
                                                    className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                    <TextField
                                                        type="number"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        label="Target Population Reached"
                                                        value={targetPopulationReached}
                                                        onChange={e => {
                                                            setTargetPopulationReached(parseInt(e.target.value.toString()));
                                                        }}
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-col sm:flex-row items-center gap-3"
                                                 id="activitiesInputs">
                                                <div
                                                    className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                    <TextField
                                                        type="number"
                                                        label="Number Of Academic Publications Last 3 Years"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={numberOfAcademicPublicationsLast3Years}
                                                        onChange={e => {
                                                            setNumberOfAcademicPublicationsLast3Years(parseInt(e.target.value.toString()));
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <input form="mainform" type="submit"
                                                   className="backgroundgreen uppercase w-1/3 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer"
                                                   value={processing.year != null ? "Update":"Submit"}/>
                                        </div>
                                    </Grid>

                                </Grid>

                            </form>
                        </div>
                    </main>
                </>
            }
        </>
    );
};

export default Processing;

