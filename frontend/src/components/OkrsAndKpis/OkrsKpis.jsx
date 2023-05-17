import {Accordion, AccordionDetails, AccordionSummary, Box, Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import Container from "@mui/material/Container";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MetaData from "../Layouts/MetaData";
import "react-datepicker/dist/react-datepicker.css";

import {makeStyles} from '@material-ui/core/styles';
import Environment from "./okrskpis/Environment";
import Availability from "./okrskpis/Availability";
import Use from "./okrskpis/Use";
import UserOrientation from "./okrskpis/UserOrientation";
import EconomicImpact from "./okrskpis/EconomicImact";
import Time from "./okrskpis/Time";
import DigitalTransformation from "./okrskpis/DigitalTransformation";
import StaffAndInnovation from "./okrskpis/StaffAndInnovation";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));


export default function OkrsKpis() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <>
            <MetaData title="OKRs and KPIs"/>
            <>
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-medium ">OKRs and KPIs for October 2022 with October 2021 comparison</h1>
                </div>
                <Container>
                    <Box>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Environment</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Environment/>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>Availability</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Availability/>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>

                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography className={classes.heading}>Use</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Use/>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>

                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel4a-content"
                                id="panel4a-header"
                            >
                                <Typography className={classes.heading}>User Orientation</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <UserOrientation/>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>

                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel5a-content"
                                id="panel5a-header"
                            >
                                <Typography className={classes.heading}>Economic Impact</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <EconomicImpact/>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>

                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel6a-content"
                                id="panel6a-header"
                            >

                                <Typography className={classes.heading}>Time</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Time/>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>

                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel7a-content"
                                id="panel7a-header"
                            >
                                <Typography className={classes.heading}>Staff & Innovation</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                               <StaffAndInnovation/>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>

                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel8a-content"
                                id="panel8a-header"
                            >
                                <Typography className={classes.heading}>Digital Transformation</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <DigitalTransformation/>
                            </AccordionDetails>
                        </Accordion>


                    </Box>
                </Container>
            </>
        </>
    );
}
