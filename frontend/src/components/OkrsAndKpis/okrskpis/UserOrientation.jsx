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
    createData('Library Visits per Capital',
        'زيارات المكتبة لكل فرد ',
        0.1,
        -0.04,
        0.10 ),
    createData('Percentage of the Target Population Reached',
        'النسبة المئوية للسكان المستهدفين الذين تم الوصول إليهم',
        9,
        1,
        8),
    createData('Number of User Attendances at Training Lessons per Capital',
        'عدد حضور المستخدمين في الدروس التدريبية لكل فرد',
        4.8,
        -7.18,
        11.93),

];

const Environment = () => {
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

export default Environment;