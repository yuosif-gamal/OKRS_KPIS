import {Box, styled} from "@mui/material";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import React from "react";
import Infrastructure from "./input-setup/Infrastructure";
import Container from "@mui/material/Container";
import Collections from "./input-setup/Collections";
import Finance from "./input-setup/Finance";
import Processing from "./input-setup/Processing";
import HumanResources from "./input-setup/HumanResources";

import MetaData from "../Layouts/MetaData";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-date-picker';

function getSteps() {
    return ["Infrastructure", "Collections", "Human Resources", "Finance", "Processing"];
}

let year;
let month;


function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <Infrastructure year={year} month={month}/>
        case 1:
            return <Collections year={year} month={month}/>
        case 2:
            return <HumanResources year={year} month={month}/>
        case 3:
            return <Finance year={year} month={month}/>

        case 4:
            return <Processing year={year} month={month}/>

    }
}

export default function LibrarySetup() {

    const [activeStep, setActiveStep] = React.useState(0);
    const [openSteps, setOpenSteps] = React.useState(false);
    const [setupDate, setSetupDate] = React.useState(new Date());

    const steps = getSteps();

    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const handleReset = () => setActiveStep(0);
    const Container = styled("div")(({theme}) => ({
        margin: "30px",
        [theme.breakpoints.down("sm")]: {margin: "16px"},
        "& .breadcrumb": {
            marginBottom: "30px",
            [theme.breakpoints.down("sm")]: {marginBottom: "16px"},
        },
    }));

    function handleSubmit(s) {
        setOpenSteps(true)
        year = setupDate.getFullYear();
        month = setupDate.getMonth();
    }

    return (
        <>
            <MetaData title="Library Setup"/>
            <>
                <Container>
                    {openSteps ? (
                        <Box>
                            <Stepper activeStep={activeStep} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>

                            <Box mt={4}>
                                {activeStep === steps.length ? (
                                    <Box>
                                        <Typography>All setup for this month completed</Typography>

                                        <Button sx={{mt: 2}} variant="contained" color="secondary"
                                                onClick={handleReset}>
                                            Reset
                                        </Button>
                                    </Box>
                                ) : (
                                    <Box>
                                        <Typography>{getStepContent(activeStep)}</Typography>

                                        <Box pt={2}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                            >
                                                Back
                                            </Button>

                                            <Button sx={{ml: 2}} variant="contained" color="primary"
                                                    onClick={handleNext}>
                                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                            </Button>
                                        </Box>
                                    </Box>
                                )}
                            </Box>
                        </Box>) : (
                        <Box>
                            <form onSubmit={handleSubmit} encType="multipart/form-data"
                                  className="flex flex-col sm:flex-row bg-white rounded-lg shadow p-4"
                                  id="mainform">
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-sm">Setup your library for year and month :</h2>
                                    <div
                                        className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                        <DatePicker
                                            onChange={e => {
                                                setSetupDate(e);
                                            }}
                                            value={setupDate}
                                            dateFormat="MM/YYYY"
                                            showMonthYearPicker
                                        />
                                        <input form="mainform" type="submit"
                                               className="backgroundgreen uppercase w-1/3 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer"
                                               value="Submit"/>
                                    </div>
                                </div>
                            </form>
                        </ Box>


                    )
                    }
                </Container>
            </>
        </>
    );
}
