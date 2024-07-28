/* eslint-disable react/jsx-key */
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import Item from '../rdvs/Item';
import { addDays } from '../rdvs/utils';

const dates = [addDays(14), addDays(15), addDays(16), addDays(17)];

const EditReservation = ({ onUpdateReservationDate, reservation }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Grid xs={8} sx={{ paddingLeft: 2 }}>
      <Item sx={{ padding: 0, marginTop: 2 }}>
        <ListItemButton
          sx={{ padding: 0 }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <ListItemText primary="selectionner une date" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {[reservation.date, ...dates].map((item) => (
            <ListItemButton onClick={() => onUpdateReservationDate(item)}>
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </Collapse>
      </Item>
    </Grid>
  );
};
export default EditReservation;
