import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MuiAlert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Snackbar from '@mui/material/Snackbar';
import { useAtom } from 'jotai';
import * as React from 'react';
import Item from '../rdvs/Item';
import useStyles from '../rdvs/rdvs.styles';
import Actions from './Actions';
import EditReservation from './EditReservation';
import EmptyMessage from './EmptyMessage';
import { PaiementAtom, UserAtom, reservationAtom } from './userAtom';

const NestedList = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [mode, setMode] = React.useState('view');
  const [isDateUpdated, setDateUpdated] = React.useState(false);
  const [reservation, setReservation] = useAtom(reservationAtom);
  const [, setUser] = useAtom(UserAtom);
  const [, setPaiement] = useAtom(PaiementAtom);
  const isEmpty = Object.keys(reservation).length === 0;

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDelete = () => {
    setReservation({});
    setPaiement({});
    setUser({});
  };
  const handleUpdateDateReservation = (date) => {
    setReservation({ ...reservation, date });
    setMode('view');
    setDateUpdated(true);
  };

  React.useEffect(() => {
    if (!isDateUpdated) {
      return;
    }
    setTimeout(() => {
      setDateUpdated(false);
    }, 1000);
  }, [isDateUpdated]);

  return (
    <React.Suspense fallback={<div>Loading</div>}>
      {isEmpty ? (
        <EmptyMessage />
      ) : (
        <List
          className={classes.list}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Ma reservation" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Item>Raison sociale</Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>{reservation.name}</Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>Date</Item>
                </Grid>
                {mode === 'view' ? (
                  <Grid item xs={8}>
                    <Item>{reservation.date}</Item>
                  </Grid>
                ) : (
                  <EditReservation
                    reservation={reservation}
                    onUpdateReservationDate={handleUpdateDateReservation}
                  />
                )}
                <Grid item xs={4}>
                  <Item>Adresse</Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>{reservation.adresse}</Item>
                </Grid>
              </Grid>
            </List>
          </Collapse>
          <Actions onDelete={handleDelete} onUpdate={() => setMode('edit')} />
          <Snackbar
            open={isDateUpdated}
            autoHideDuration={1000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <MuiAlert severity="success" sx={{ width: '100%' }}>
              la date a été mise à jour avec succès!
            </MuiAlert>
          </Snackbar>
        </List>
      )}
    </React.Suspense>
  );
};

export default NestedList;
