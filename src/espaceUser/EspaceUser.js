import { Link } from "react-router-dom";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import * as React from 'react';
import { PaiementAtom, UserAtom, reservationAtom } from './userAtom';
import { useAtom, useAtomValue } from 'jotai';
import Item from "../rdvs/Item";


export default function NestedList() {
    const [open, setOpen] = React.useState(true);
    const [reservation, setReservation] = useAtom(reservationAtom)
    const [, setUser] = useAtom(UserAtom)
    const [, setPaiement] = useAtom(PaiementAtom)

    const handleClick = () => {
        setOpen(!open);
    };

    const handleDelete = () => {
        setReservation({})
        setPaiement({})
        setUser({})
    }
    const isEmpty = Object.keys(reservation).length === 0

    return (
        <>
            {isEmpty ? <h4 style={{ display: 'flex', justifyContent: 'center' }}> Pas de reservations
                <Link to={'/rdvs'}>  cliquer ici </Link> pour reserver!</h4> : (
                <List
                    sx={{ width: '100%', bgcolor: 'background.paper' }}
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
                                <Grid item xs={8}>
                                    <Item>{reservation.date}</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item>Adresse</Item>
                                </Grid>
                                <Grid item xs={8}>
                                    <Item>{reservation.adresse}</Item>
                                </Grid>
                            </Grid>

                        </List>
                        <div style={{ display: 'flex', justifyContent: 'end', marginTop: 10 }}>

                            <Button variant="contained" onClick={handleDelete}>Delete</Button>
                        </div>

                    </Collapse>
                </List>)}
        </>
    );
}