import React from 'react';
import {
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@mui/material';

export default function SortBar(props) {

    return (
        <RadioGroup >
      <FormControlLabel checked={props.defaultState} control={<Radio onClick={props.handleClick}/>} sx={{ '& .MuiTypography-root': {fontSize: 11, fontFamily: "dogica", fontWeight: 900} }} label= {props.label} sortType={props.sortType} />
       </RadioGroup>
    )
}
