import React from 'react';
import { TextField } from '@mui/material';

const UserSearch = ({ onSearch }) => (
  <TextField label="User ID" fullWidth onChange={(e) => onSearch(e.target.value)} />
);

export default UserSearch;