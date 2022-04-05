import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';
import { StateContext } from './stateManager';

export default function ViewsDatePicker() {
  const [value, setValue] = React.useState(new Date());
  const {dispatch} = React.useContext(StateContext);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        {/* <DatePicker
          views={['year']}
          label="Year only"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        /> */}
        <DatePicker
          views={['year', 'month']}
          label="Pick Month and Year"
          minDate={new Date('1900-01-01')}
          maxDate={new Date('3000-01-01')}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            dispatch({type: 'date', payLoad: {m: newValue.getMonth()+1, y: newValue.getFullYear()}})
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
        {/* <DatePicker
          openTo="year"
          views={['year', 'month', 'day']}
          label="Year, month and date"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
        <DatePicker
          views={['day', 'month', 'year']}
          label="Invert the order of views"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
        <DatePicker
          views={['day']}
          label="Just date"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        /> */}
      </Stack>
    </LocalizationProvider>
  );
}
