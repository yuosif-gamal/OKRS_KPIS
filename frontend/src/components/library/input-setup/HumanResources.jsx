import {Grid,} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";
import {createHumanResources, getHumanResources, updateHumanResources} from "../../../actions/humanResourcesAction";
import {clearErrors} from "../../../actions/productAction";
import TextField from "@mui/material/TextField";
import MetaData from "../../Layouts/MetaData";
import Loader from "../../Layouts/Loader";
import {HUMAN_RESOURCES_SETUP_RESET} from "../../../constants/libraryConstants";


const HumanResources = ({year, month}) => {

    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();

    const {humanResources, loading, success, error} = useSelector((state) => state.humanResources);
    const [noPrimaryUserGroup, setNoPrimaryUserGroup] = useState();
    const [openingHoursTotal, setOpeningHoursTotal] = useState();
    const [totalNumOfHours, setTotalNumOfHours] = useState();
    const [staffHoursTotal, setStaffHoursTotal] = useState();
    const [noOfStaff, setNoOfStaff] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("noPrimaryUserGroup", noPrimaryUserGroup);
        formData.set("openingHoursTotal", openingHoursTotal);
        formData.set("totalNumOfHours", totalNumOfHours);
        formData.set("noOfStaff", noOfStaff);
        formData.set("staffHoursTotal", staffHoursTotal);

        formData.set("year", year);
        formData.set("month", month);
        if (humanResources.year != null) {
            dispatch(updateHumanResources(year, month, formData));
        } else {
            dispatch(createHumanResources(formData));
        }
    }
    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        dispatch(getHumanResources(year, month));
        if (humanResources.year != null) {
            setNoPrimaryUserGroup(humanResources.noPrimaryUserGroup);
            setOpeningHoursTotal(humanResources.openingHoursTotal);
            setTotalNumOfHours(humanResources.totalNumOfHours);
            setStaffHoursTotal(humanResources.noOfStaff);
            setNoOfStaff(humanResources.staffHoursTotal);
        }
    }, [dispatch, year, month, error, enqueueSnackbar]);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        if (success) {
            enqueueSnackbar("HumanResources Setup Done", {variant: "success"});
            dispatch({type: HUMAN_RESOURCES_SETUP_RESET});
        }

    }, [dispatch, error, success, navigate, enqueueSnackbar]);


    return (
        <>
            <MetaData title="HumanResources"/>
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
                                                        label="No Primary User Group"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={noPrimaryUserGroup}
                                                        onChange={e => {
                                                            setNoPrimaryUserGroup(parseInt(e.target.value.toString()));
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
                                                        label="Total Staff Hours"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={staffHoursTotal}
                                                        onChange={e => {
                                                            setStaffHoursTotal(parseInt(e.target.value.toString()));
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
                                                        label="Opening Hours Total"
                                                        value={openingHoursTotal}
                                                        onChange={e => {
                                                            setOpeningHoursTotal(parseInt(e.target.value.toString()));
                                                        }}
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{mt: 2}}>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-col sm:flex-row items-center gap-3"
                                                 id="activitiesInputs">
                                                <div
                                                    className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                    <TextField
                                                        type="number"
                                                        label="Total NumOfHours"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={totalNumOfHours}
                                                        onChange={e => {
                                                            setTotalNumOfHours(parseInt(e.target.value.toString()));
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col sm:flex-row items-center gap-3"
                                                 id="activitiesInputs">
                                                <div
                                                    className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                    <TextField
                                                        type="number"
                                                        label="No Of Staff"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={noOfStaff}
                                                        onChange={e => {
                                                            setNoOfStaff(parseInt(e.target.value.toString()));
                                                        }}
                                                    />
                                                </div>

                                            </div>
                                            <div className="flex justify-end">
                                                <input form="mainform" type="submit"
                                                       className="backgroundgreen uppercase w-1/3 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer"
                                                       value={humanResources.year != null ? "Update" : "Submit"}/>
                                            </div>
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

export default HumanResources;

