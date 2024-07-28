import { Suspense } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useLocation } from 'react-router-dom';
import Item from './Item';
import useStyles from './rdvs.styles';

const DetailsRdv = () => {
  const classes = useStyles();
  const { state } = useLocation();

  return (
    <Box cassName={classes.containerDetail}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>Raison sociale</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>{state.name}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Numéro agrément</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>{state.agrement}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Adresse</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>{state.adresse}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Date</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>{state.date}</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailsRdv;
