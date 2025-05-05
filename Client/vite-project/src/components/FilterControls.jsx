import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const FilterControls = ({ value, onChange }) => (
  <FormControl fullWidth>
    <InputLabel>Sort by</InputLabel>
    <Select value={value} onChange={(e) => onChange(e.target.value)}>
      <MenuItem value="day">Day</MenuItem>
      <MenuItem value="month">Month</MenuItem>
      <MenuItem value="year">Year</MenuItem>
    </Select>
  </FormControl>
);

export default FilterControls;