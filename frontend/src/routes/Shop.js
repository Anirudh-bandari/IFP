import { Grid } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/marketplace/Header';
import List from '../components/marketplace/List';
export default function Shop() {
  return (
    <>
    <Navbar />
    <br/>
    <Header/>
    <br/>
    <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={8}>
          {/* <Map /> */}
        </Grid>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
      </Grid>

    </>
  )
}
