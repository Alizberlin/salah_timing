import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StateContext } from './stateManager';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 8,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 8,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 1,
  },
}));

function createData(date, calories, fat, carbs, protein) {
  return { date, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const rows =[]
export default function Timings() {
  const {state, dispatch} = useContext(StateContext);
  console.log(state)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{minWidth: '3.8rem'}}>Date</StyledTableCell>
            <StyledTableCell sx={{maxWidth: '2.8rem'}} align="right">Imsak</StyledTableCell>
            <StyledTableCell sx={{maxWidth: '2.8rem'}} align="right">Fajr</StyledTableCell>
            <StyledTableCell sx={{maxWidth: '2.8rem'}} align="right">Sunrise</StyledTableCell>
            <StyledTableCell sx={{maxWidth: '2.8rem'}} align="right">Dhuhr</StyledTableCell>
            <StyledTableCell sx={{maxWidth: '2.8rem'}} align="right">Asr</StyledTableCell>
            <StyledTableCell sx={{maxWidth: '2.8rem'}} align="right">Sunset</StyledTableCell>
            <StyledTableCell sx={{maxWidth: '2.8rem'}} align="right">Maghrib</StyledTableCell>
            <StyledTableCell sx={{maxWidth: '2.8rem'}} align="right">Isha</StyledTableCell>
            <StyledTableCell sx={{maxWidth: '2.8rem'}} align="right">Midnight</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {state.calender.map(x => (
            <StyledTableRow key={x.date.readable}>
            <StyledTableCell component="th">
              {x.date.readable}
            </StyledTableCell>
            <StyledTableCell align="right">{x.calories}</StyledTableCell>
            <StyledTableCell align="right">{x.fat}</StyledTableCell>
            <StyledTableCell align="right">{x.carbs}</StyledTableCell>
            <StyledTableCell align="right">{x.protein}</StyledTableCell>
          </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
