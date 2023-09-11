import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Main from './Main';
import DrawerHeader from './DrawerHeader';
import AppBar from './AppBar';

const drawerWidth = 240;


export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const navigate = useNavigate();
    const { pathname } = useLocation()

    console.log({ pathname })

    const data = [{ text: 'Listes des rdvs', url: '/rdvs', icon: <InboxIcon /> }, { text: 'Mes reservation', url: '/mon-espace', icon: <MailIcon /> }]

    const [open, setOpen] = React.useState(true);

    const handleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    {!open && (<IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawer}
                        edge="start"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>)}
                    <Typography variant="h6" noWrap component="div">
                        Réservation de date d’examen pour passer le permis de conduire
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        // backgroundColor: 'black',
                        // color: 'white'
                    },
                    // '&.MuiIconButton-root': {
                    //     color: 'white'
                    // }
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawer}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {data.map(({ text, url, icon }, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={() => navigate(url)}>
                                <ListItemIcon>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Outlet />
            </Main>
        </Box>
    );
}
