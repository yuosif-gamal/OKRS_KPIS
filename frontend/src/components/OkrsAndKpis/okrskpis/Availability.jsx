import React from 'react';
import BackdropLoader from "../../Layouts/BackdropLoader";
import {IconButton} from "@mui/material";
import TrendingUp from '@mui/icons-material/TrendingUp';
import {useSelector} from "react-redux";
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {TrendingDown} from "@material-ui/icons";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


function createData(
    name: string,
    nameAr: string,
    result: number,
    upOrDown: number,
    lastYear: number,

) {
    return {name, nameAr, result, upOrDown,lastYear};
}

const rows = [
    createData('Number of Documents Digitized per 1000 Documents in the Collection',
        'عدد الوثائق المرقمنة لكل ١٠٠٠ وثيقة في مجموعات المكتبة',
        29.0,
        10.2,
        18.79 ),
    createData('Percentage of the Owner Institution’s Academic Publications in the Institutional Repository',
        'النسبة المئوية للمنشورات الأكاديمية للمؤسسة الأم في المستودع الرقمي للمؤسسة (نسبة إصدارات المؤسسة في المستودع الخاص بها)',
        23,
        -7,
        29),
    createData('Percentage of Rare Materials Accessible via Web Catalogues',
        'النسبة المئوية للمواد النادرة التي يمكن الوصول إليها عبر فهارس الويب ',
        26,
        6,
        20),
];


const Availability = () => {
    const {loading} = useSelector((state) => state.product);
    return (
        <>
            {loading && <BackdropLoader/>}

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}<br/>{row.nameAr}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.result}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <IconButton title={row.upOrDown}>
                                        {row.upOrDown > 0 ? (
                                                <TrendingUp className="text-green-800"/>
                                            )
                                            : (
                                                <TrendingDown className="text-red-700"/>
                                            )}
                                    </IconButton>
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.lastYear}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Availability;