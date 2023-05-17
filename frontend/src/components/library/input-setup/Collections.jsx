import {Button, CircularProgress, Grid, IconButton,} from "@mui/material";
import React, {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";
import {clearErrors} from "../../../actions/productAction";
import TextField from "@mui/material/TextField";
import MetaData from "../../Layouts/MetaData";
import Loader from "../../Layouts/Loader";
import {createCollections, getCollections, updateCollections} from "../../../actions/collectionsAction";
import {COLLECTIONS_SETUP_RESET} from "../../../constants/libraryConstants";

const Collections = ({year, month}) => {

    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();

    const {collections, loading, success, error} = useSelector((state) => state.collections);

    let [total, setTotal] = useState(0);
    const [open, setOpen] = useState(false);

    const [children, setChildren] = useState();
    const [journalsAndPeriodicals, setJournalsAndPeriodicals] = useState();
    const [electronicResources, setElectronicResources] = useState();
    const [database, setDatabase] = useState();
    const [digitalCollection, setDigitalCollection] = useState();
    const [digitalRepository3Years, setDigitalRepository3Years] = useState();
    const [adults, setAdults] = useState();
    const [totalNoOfRareMaterials, setTotalNoOfRareMaterials] = useState();

    const [totalOfRareMaterialsNeedConservation, setTotalOfRareMaterialsNeedConservation] = useState();
    const [numberOfAllInterLibraryLoans, setNumberOfAllInterLibraryLoans] = useState();
    const toggle = () => {
        setTotal(((children == null) ? 0 : parseInt(children.toString())) + ((journalsAndPeriodicals == null) ? 0 : parseInt(journalsAndPeriodicals.toString())) + ((electronicResources == null) ? 0 : parseInt(electronicResources.toString())) + ((database == null) ? 0 : parseInt(database.toString())) + ((digitalCollection == null) ? 0 : parseInt(digitalCollection.toString())) + ((digitalRepository3Years == null) ? 0 : parseInt(digitalRepository3Years.toString())) + ((totalOfRareMaterialsNeedConservation == null) ? 0 : parseInt(totalOfRareMaterialsNeedConservation.toString())) + ((adults == null) ? 0 : parseInt(adults.toString())))
        if (total == null) setTotal(0);
        setOpen(!open);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("children", children);
        formData.set("journalsAndPeriodicals", journalsAndPeriodicals);
        formData.set("electronicResources", electronicResources);
        formData.set("database", database);
        formData.set("digitalCollection", digitalCollection);
        formData.set("digitalRepository3Years", digitalRepository3Years);
        formData.set("adults", adults);
        formData.set("totalNoOfRareMaterials", totalNoOfRareMaterials);
        formData.set("totalOfRareMaterialsNeedConservation", totalOfRareMaterialsNeedConservation);
        formData.set("numberOfAllInterLibraryLoans", numberOfAllInterLibraryLoans);
        formData.set("year", year);
        formData.set("month", month);
        if (collections.year != null) {
            dispatch(updateCollections(year, month, formData));
        } else {
            dispatch(createCollections(formData));
        }
    }
    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        dispatch(getCollections(year, month));
        if (collections.year !== null) {
            setChildren(collections.children);
            setJournalsAndPeriodicals(collections.journalsAndPeriodicals);
            setElectronicResources(collections.electronicResources);
            setDatabase(collections.database);
            setDigitalCollection(collections.digitalCollection);
            setDigitalRepository3Years(collections.digitalRepository3Years);
            setAdults(collections.adults);
            setTotalNoOfRareMaterials(collections.totalNoOfRareMaterials);
            setTotalOfRareMaterialsNeedConservation(collections.totalOfRareMaterialsNeedConservation);
            setNumberOfAllInterLibraryLoans(collections.numberOfAllInterLibraryLoans);
        }
    }, [dispatch, year, month, error, enqueueSnackbar]);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        if (success) {
            enqueueSnackbar("Collection Setup Done", {variant: "success"});
            dispatch({type: COLLECTIONS_SETUP_RESET});
        }
    }, [dispatch, error, success, navigate, enqueueSnackbar]);


    return (<>
        <MetaData title="My Profile"/>

        {loading ? <Loader/> : <>
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
                                                label="Children"
                                                variant="outlined"
                                                size="small"
                                                required
                                                value={children}
                                                onChange={e => {
                                                    setChildren(parseInt(e.target.value.toString()));
                                                }}/>
                                        </div>

                                        <div
                                            className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                            <TextField
                                                type="number"
                                                variant="outlined"
                                                size="small"
                                                required
                                                label="Adults"
                                                value={adults}
                                                onChange={e => {
                                                    setAdults(parseInt(e.target.value.toString()));
                                                }}
                                            />

                                        </div>

                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">

                                    <div className="flex flex-col sm:flex-row items-center gap-3"
                                         id="activitiesInputs">
                                        <div
                                            className="flex flex-col gap-1.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                            <TextField
                                                type="number"
                                                variant="outlined"
                                                size="small"
                                                required
                                                label="Journals & Periodicals"
                                                value={journalsAndPeriodicals}
                                                onChange={e => {
                                                    setJournalsAndPeriodicals(parseInt(e.target.value.toString()));
                                                }}
                                            />

                                        </div>
                                        <div
                                            className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                            <TextField
                                                type="number"
                                                variant="outlined"
                                                size="small"
                                                required
                                                label="Database"
                                                value={database}
                                                onChange={e => {
                                                    setDatabase(parseInt(e.target.value.toString()));
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
                                                variant="outlined"
                                                size="small"
                                                required
                                                label="Digital Repository - 3 years"
                                                value={digitalRepository3Years}
                                                onChange={e => {
                                                    setDigitalRepository3Years(parseInt(e.target.value.toString()));
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                            <TextField
                                                type="number"
                                                variant="outlined"
                                                size="small"
                                                required
                                                label="Total no. of Rare Materials"
                                                value={totalNoOfRareMaterials}
                                                onChange={e => {
                                                    setTotalNoOfRareMaterials(parseInt(e.target.value.toString()));
                                                }}/>
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
                                                variant="outlined"
                                                size="small"
                                                required
                                                label="Electronic resources"
                                                value={electronicResources}
                                                onChange={e => {
                                                    setElectronicResources(parseInt(e.target.value.toString()));
                                                }}
                                            />

                                        </div>

                                        <div
                                            className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                            <TextField
                                                type="number"
                                                variant="outlined"
                                                size="small"
                                                required
                                                label="DigitalCollection"
                                                value={digitalCollection}
                                                onChange={e => {
                                                    setDigitalCollection(parseInt(e.target.value.toString()));
                                                }}/>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-col gap-2">

                                    <div className="flex flex-col sm:flex-row items-center gap-3"
                                         id="activitiesInputs">

                                        <div className="flex flex-col gap-2">
                                            <React.Fragment>
                                                {!open && (<Button onClick={toggle} class="text-[#006d76]">Calculate
                                                    Total Collections
                                                </Button>)}
                                                {open && (<Container>
                                                    Total Collections : {total}
                                                    <IconButton onClick={toggle}
                                                                sx={{mx: 2, verticalAlign: 'middle'}}>
                                                        <CircularProgress className="progress"/>
                                                    </IconButton>
                                                </Container>)}
                                            </React.Fragment>
                                        </div>
                                    </div>
                                </div>

                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12} sx={{mt: 2}}>
                                <div className="flex flex-col gap-2">

                                    <div className="flex flex-col sm:flex-row items-center gap-3"
                                         id="readingInputs">
                                        <div
                                            className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                            <TextField
                                                type="number"
                                                variant="outlined"
                                                size="small"
                                                required
                                                label="Total no. of Rare Materials Needing Conservation/Restoration Treatment"
                                                value={totalOfRareMaterialsNeedConservation}
                                                onChange={e => {
                                                    setTotalOfRareMaterialsNeedConservation(parseInt(e.target.value.toString()));
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
                                                variant="outlined"
                                                size="small"
                                                required
                                                label="Number of all inter library loans + electronic document delivery transactions"
                                                value={numberOfAllInterLibraryLoans}
                                                onChange={e => {
                                                    setNumberOfAllInterLibraryLoans(parseInt(e.target.value.toString()));
                                                }}/>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex justify-end">
                                    <input form="mainform" type="submit"
                                           className="backgroundgreen uppercase w-1/3 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer"
                                           value={collections.year != null ? "Update":"Submit"}/>
                                </div>
                            </Grid>

                        </Grid>

                    </form>
                </div>
            </main>
        </>}
    </>);
};

export default Collections;

