import React from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

const RecalculateButton = ({ onRecalculate }) => {
  const handleClick = async () => {
    await axios.post(`${import.meta.env.VITE_API_URI}/leaderboard/recalculate`);
    onRecalculate();
  };

  return <Button variant="contained" fullWidth onClick={handleClick}>Recalculate</Button>;
};

export default RecalculateButton;