import {Grid} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";
import {createFinance, getFinance, updateFinance} from "../../../actions/financeAction";
import {clearErrors} from "../../../actions/productAction";
import TextField from "@mui/material/TextField";
import MetaData from "../../Layouts/MetaData";
import Loader from "../../Layouts/Loader";
import {FINANCE_SETUP_RESET} from "../../../constants/libraryConstants";


const Finance = ({year, month}) => {

    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();
    const {finance, loading, success, error} = useSelector((state) => state.finance);
    const [acquisition, setAcquisition] = useState()
    const [waterAndLighting, setWaterAndLighting] = useState()
    const [variousRequirements, setVariousRequirements] = useState()
    const [maintenance, setMaintenance] = useState()
    const [postAndTelecommunications, setPostAndTelecommunications] = useState()
    const [publishingAndAdvertisingAndReception, setPublishingAndAdvertisingAndReception] = useState()
    const [expensesPrintingAndTranslationsAndJournalsAndCopyright, setExpensesPrintingAndTranslationsAndJournalsAndCopyright] = useState()
    const [publicTransportAndTransitions, setPublicTransportAndTransitions] = useState()
    const [expensesOfVariousService, setExpensesOfVariousService] = useState()
    const [booksAndMediaItems, setBooksAndMediaItems] = useState()
    const [conferences, setConferences] = useState()
    const [trainingPrograms, setTrainingPrograms] = useState()
    const [otherExpenditures, setOtherExpenditures] = useState()
    const [institutionalMeansAllocated, setInstitutionalMeansAllocated] = useState()
    const [costOfEachElectronicResourceForSpecifiedPeriod, setCostOfEachElectronicResourceForSpecifiedPeriod] = useState()


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("acquisition", acquisition);
        formData.set("waterAndLighting", waterAndLighting);
        formData.set("variousRequirements", variousRequirements);
        formData.set("maintenance", maintenance);
        formData.set("postAndTelecommunications", postAndTelecommunications);
        formData.set("publishingAndAdvertisingAndReception", publishingAndAdvertisingAndReception);
        formData.set("expensesPrintingAndTranslationsAndJournalsAndCopyright", expensesPrintingAndTranslationsAndJournalsAndCopyright);
        formData.set("publicTransportAndTransitions", publicTransportAndTransitions);
        formData.set("expensesOfVariousService", expensesOfVariousService);
        formData.set("booksAndMediaItems", booksAndMediaItems);
        formData.set("conferences", conferences);
        formData.set("trainingPrograms", trainingPrograms);
        formData.set("otherExpenditures", otherExpenditures);
        formData.set("institutionalMeansAllocated", institutionalMeansAllocated);
        formData.set("costOfEachElectronicResourceForSpecifiedPeriod", costOfEachElectronicResourceForSpecifiedPeriod);
        formData.set("year", year);
        formData.set("month", month);
        if (finance.year != null) {
            dispatch(updateFinance(year, month, formData));

        } else {
            dispatch(createFinance(formData));
        }
    }
    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        dispatch(getFinance(year, month));
        if (finance.year != null) {
            setAcquisition(finance.acquisition);
            setWaterAndLighting(finance.waterAndLighting);
            setVariousRequirements(finance.variousRequirements);
            setMaintenance(finance.maintenance);
            setPostAndTelecommunications(finance.postAndTelecommunications);
            setPublishingAndAdvertisingAndReception(finance.publishingAndAdvertisingAndReception);
            setExpensesPrintingAndTranslationsAndJournalsAndCopyright(finance.expensesPrintingAndTranslationsAndJournalsAndCopyright);
            setPublicTransportAndTransitions(finance.publicTransportAndTransitions);
            setExpensesOfVariousService(finance.expensesOfVariousService);
            setBooksAndMediaItems(finance.booksAndMediaItems);
            setConferences(finance.conferences);
            setTrainingPrograms(finance.trainingPrograms);
            setOtherExpenditures(finance.otherExpenditures);
            setInstitutionalMeansAllocated(finance.institutionalMeansAllocated);
            setCostOfEachElectronicResourceForSpecifiedPeriod(finance.costOfEachElectronicResourceForSpecifiedPeriod);
        }
    }, [dispatch, year, month, error, enqueueSnackbar]);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        if (success) {
            enqueueSnackbar("Finance Setup Done", {variant: "success"});
            dispatch({type: FINANCE_SETUP_RESET});
        }
    }, [dispatch, error, success, navigate, enqueueSnackbar]);


    return (<>

            <MetaData title="Finance"/>

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
                                                        label="acquisition"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={acquisition}
                                                        onChange={e => {
                                                            setAcquisition(parseInt(e.target.value.toString()));
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
                                                        label="Various Requirements"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={variousRequirements}
                                                        onChange={e => {
                                                            setVariousRequirements(parseInt(e.target.value.toString()));
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div
                                                className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                <TextField
                                                    type="number"
                                                    variant="outlined"
                                                    size="small"
                                                    required
                                                    label="Public transport and transitions"
                                                    value={publicTransportAndTransitions}

                                                    onChange={e => {
                                                        setPublicTransportAndTransitions(parseInt(e.target.value.toString()));
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
                                                    label="Expenses Of Various Service"
                                                    value={expensesOfVariousService}

                                                    onChange={e => {
                                                        setExpensesOfVariousService(parseInt(e.target.value.toString()));
                                                    }}
                                                />

                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div
                                                className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                <TextField
                                                    type="number"
                                                    variant="outlined"
                                                    size="small"
                                                    required
                                                    label="Books and media items"
                                                    value={booksAndMediaItems}
                                                    onChange={e => {
                                                        setBooksAndMediaItems(parseInt(e.target.value.toString()));
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
                                                    label="Conferences"
                                                    value={conferences}

                                                    onChange={e => {
                                                        setConferences(parseInt(e.target.value.toString()));
                                                    }}
                                                />

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
                                                        label="Water And Lighting"
                                                        value={waterAndLighting}
                                                        onChange={e => {
                                                            setWaterAndLighting(parseInt(e.target.value.toString()));
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
                                                        label="Maintenance"
                                                        value={maintenance}
                                                        onChange={e => {
                                                            setMaintenance(parseInt(e.target.value.toString()));
                                                        }}
                                                    />

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
                                                        label="Post and Telecommunications"
                                                        value={postAndTelecommunications}
                                                        onChange={e => {
                                                            setPostAndTelecommunications(parseInt(e.target.value.toString()));
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div
                                                className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                <TextField
                                                    type="number"
                                                    variant="outlined"
                                                    size="small"
                                                    required
                                                    label="Expenses printing, Translations, Journals and Copyright"
                                                    value={expensesPrintingAndTranslationsAndJournalsAndCopyright}

                                                    onChange={e => {
                                                        setExpensesPrintingAndTranslationsAndJournalsAndCopyright(parseInt(e.target.value.toString()));
                                                    }}
                                                />

                                            </div>


                                            <div className="flex flex-col gap-2">
                                                <div
                                                    className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                    <TextField
                                                        type="number"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        label="Training Programs"
                                                        value={trainingPrograms}

                                                        onChange={e => {
                                                            setTrainingPrograms(parseInt(e.target.value.toString()));
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
                                                        label="Other Expenditures"
                                                        value={otherExpenditures}

                                                        onChange={e => {
                                                            setOtherExpenditures(parseInt(e.target.value.toString()));
                                                        }}
                                                    />

                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <div
                                                    className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                    <TextField
                                                        type="number"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        label="Institutional Means Allocated"
                                                        value={institutionalMeansAllocated}

                                                        onChange={e => {
                                                            setInstitutionalMeansAllocated(parseInt(e.target.value.toString()));
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
                                                        label="Cost Of Each Electronic Resource For Specified Period"
                                                        value={costOfEachElectronicResourceForSpecifiedPeriod}

                                                        onChange={e => {
                                                            setCostOfEachElectronicResourceForSpecifiedPeriod(parseInt(e.target.value.toString()));
                                                        }}
                                                    />

                                                </div>


                                            </div>
                                        </div>
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
                                                        label="Publishing,advertising and reception"
                                                        value={publishingAndAdvertisingAndReception}
                                                        onChange={e => {
                                                            setPublishingAndAdvertisingAndReception(parseInt(e.target.value.toString()));
                                                        }}
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <input form="mainform" type="submit"
                                                   className="backgroundgreen uppercase w-1/3 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer"
                                                   value={finance.year != null ? "Update" : "Submit"}/>
                                        </div>
                                    </Grid>

                                </Grid>

                            </form>
                        </div>
                    </main>
                </>}
        </>);
};

export default Finance;

