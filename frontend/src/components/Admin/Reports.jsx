import React from "react";

import MetaData from "../Layouts/MetaData";
import "react-datepicker/dist/react-datepicker.css";

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));


export default function Reports() {

    return (
        <>
            <MetaData title="Reports"/>
            <>
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-medium ">Supported Report</h1>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-6">
                    <div className="flex flex-col bg-purple-600 text-white gap-2 rounded-xl shadow-lg hover:shadow-xl p-6">
                        <h2 className="text-2xl font-bold">Monthly statistic Report</h2>
                    </div>
                    <div className="flex flex-col bg-red-500 text-white gap-2 rounded-xl shadow-lg hover:shadow-xl p-6">
                        <h2 className="text-2xl font-bold">Accumulative data Report</h2>
                    </div>
                    <div className="flex flex-col bg-yellow-500 text-white gap-2 rounded-xl shadow-lg hover:shadow-xl p-6">
                        <h2 className="text-2xl font-bold">Annual statistics Report</h2>
                    </div>


                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-6">
                    <div className="flex flex-col bg-purple-600 text-white gap-2 rounded-xl shadow-lg hover:shadow-xl p-6">
                        <h2 className="text-2xl font-bold">KRs - Quarterly compared with achievements Report</h2>
                    </div>
                    <div className="flex flex-col bg-red-500 text-white gap-2 rounded-xl shadow-lg hover:shadow-xl p-6">
                        <h2 className="text-2xl font-bold">OKRs Annual Report</h2>
                    </div>
                    <div className="flex flex-col bg-yellow-500 text-white gap-2 rounded-xl shadow-lg hover:shadow-xl p-6">
                        <h2 className="text-2xl font-bold">Comparison with other libraries Report</h2>
                    </div>
                </div>
            </>
        </>
    );
}
