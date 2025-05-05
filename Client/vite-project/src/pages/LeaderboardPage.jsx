import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography } from '@mui/material';
import LeaderboardTable from '../components/LeaderboardTable';
import FilterControls from '../components/FilterControls';
import UserSearch from '../components/UserSearch';
import RecalculateButton from '../components/RecalculateButton';

const LeaderboardPage = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('day');
  const [searchId, setSearchId] = useState('');

  const fetchData = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URI}/leaderboard?filter=${filter}&search=${searchId}`);
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [filter, searchId]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Leaderboard</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}><UserSearch onSearch={setSearchId} /></Grid>
        <Grid item xs={12} md={3}><FilterControls value={filter} onChange={setFilter} /></Grid>
        <Grid item xs={12} md={3}><RecalculateButton onRecalculate={fetchData} /></Grid>
      </Grid>
      <LeaderboardTable data={data} />
    </Container>
  );
};

export default LeaderboardPage;