/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useAtomValue } from 'jotai';
import * as React from 'react';
import { PaiementAtom, UserAtom } from '../espaceUser/userAtom';
import Item from '../rdvs/Item';

const Confirmation = ({ data }) => {
  const paiment = useAtomValue(PaiementAtom);
  const user = useAtomValue(UserAtom);

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#fff' }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>Raison sociale</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>{data.name}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Date</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>{data.date}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>User name</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>{user.name}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>User email</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>{user.email}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Montant</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>{paiment.montant} euro</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Confirmation;
