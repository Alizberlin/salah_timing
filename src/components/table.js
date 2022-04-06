import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StateContext } from './stateManager';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 9.5,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 9.5,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  height: 10,
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 1,
  },
}));

// function createData(date, calories, fat, carbs, protein) {
//   return { date, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function Timings() {
  const {state} = useContext(StateContext);
  console.log('state', state)
  return (
    <TableContainer >
      <Table aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell >Date</StyledTableCell>
            <StyledTableCell  align="right">Imsak</StyledTableCell>
            <StyledTableCell  align="right">Fajr</StyledTableCell>
            <StyledTableCell  align="right">Sunrise</StyledTableCell>
            <StyledTableCell  align="right">Dhuhr</StyledTableCell>
            <StyledTableCell  align="right">Asr</StyledTableCell>
            <StyledTableCell  align="right">Sunset</StyledTableCell>
            <StyledTableCell  align="right">Maghrib</StyledTableCell>
            <StyledTableCell  align="right">Isha</StyledTableCell>
            <StyledTableCell  align="right">Midnight</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {state.calender.map((x, i) => (
            <StyledTableRow key={x+i} className={{tableHead: {height: '44rem'}}}>
            <StyledTableCell >
              {x.date.readable.split(' ')[0]}
            </StyledTableCell>
            <StyledTableCell align="right">{x.timings.Imsak.split(' ')[0]}</StyledTableCell>
            <StyledTableCell align="right">{x.timings.Fajr.split(' ')[0]}</StyledTableCell>
            <StyledTableCell align="right">{x.timings.Sunrise.split(' ')[0]}</StyledTableCell>
            <StyledTableCell align="right">{x.timings.Dhuhr.split(' ')[0]}</StyledTableCell>
            <StyledTableCell align="right">{x.timings.Asr.split(' ')[0]}</StyledTableCell>
            <StyledTableCell align="right">{x.timings.Sunset.split(' ')[0]}</StyledTableCell>
            <StyledTableCell align="right">{x.timings.Maghrib.split(' ')[0]}</StyledTableCell>
            <StyledTableCell align="right">{x.timings.Isha.split(' ')[0]}</StyledTableCell>
            <StyledTableCell align="right">{x.timings.Midnight.split(' ')[0]}</StyledTableCell>

          </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
