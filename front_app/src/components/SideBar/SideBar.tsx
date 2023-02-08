import * as React from 'react';
import {styled, useTheme, Theme, CSSObject} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './SideBar.module.css'
import Link from "next/link";
import {Typography} from "@mui/material";
import SideBarList from "@/components/SideBar/SideBarList";
// icon
import People from "@mui/icons-material/PeopleOutlined";
import Home from "@mui/icons-material/HomeOutlined";
import MenuIcon from '@mui/icons-material/Menu';
// import MailIcon from '@mui/Icons-material/Mail';
import Contacts from "@mui/icons-material/ContactsOutlined";
import Receipt from "@mui/icons-material/ReceiptOutlined";
import Person from "@mui/icons-material/PersonOutlined";
import Calendar from "@mui/icons-material/CalendarTodayOutlined";
import Help from "@mui/icons-material/HelpOutlineOutlined";


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#07100d',
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    backgroundColor: '#07100d',
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#07100d',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: '#07100d',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box className="sideBar" sx={{display: 'flex'}}>

            <Drawer variant="permanent" open={open}>

                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}
                                sx={{
                                    color: '#B68D40',
                                    ...(!open && {display: 'none'}),
                                }}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            color: '#B68D40',
                            mr: 0.5 ,
                            justifyContent: "center",
                            ...(open && {display: 'none'}),
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                </DrawerHeader>


                <SideBarList
                    icon={<Home />}
                    text="Home"
                    open={open}
                    link="/"
                />

                <List >
                    <ListItem>
                        <Typography
                            sx={{
                                my: "5px",
                                color: '#B68D40',
                                ...(!open && {display: 'none'}),
                            }}
                        >
                            Data
                        </Typography>

                        <Divider
                            sx={{
                                m: "15px",
                                color: '#B68D40',
                                ...(open && {display: 'none'}),
                            }}
                        >

                        </Divider>
                    </ListItem>
                </List>

                <SideBarList
                    icon={<People />}
                    text="Manage Team"
                    open={open}
                    link="/"
                />

                <SideBarList
                    icon={<Contacts />}
                    text="Contacts Information"
                    open={open}
                    link="/"
                />

                <SideBarList
                    icon={<Receipt />}
                    text="Invoices Balances"
                    open={open}
                    link="/"
                />

                <List >
                    <ListItem>
                        <Typography
                            sx={{
                                my: "5px",
                                color: '#B68D40',
                                ...(!open && {display: 'none'}),
                            }}
                        >
                            Pages
                        </Typography>

                        <Divider
                            sx={{
                                m: "15px",
                                color: '#B68D40',
                                ...(open && {display: 'none'}),
                            }}
                        >

                        </Divider>
                    </ListItem>
                </List>

                <SideBarList
                    icon={<Person />}
                    text="Profile From"
                    open={open}
                    link="/"
                />
                <SideBarList
                    icon={<Calendar />}
                    text="Calendar"
                    open={open}
                    link="/"
                />
                <SideBarList
                    icon={<Help />}
                    text="FAQ Page"
                    open={open}
                    link="/"
                />

            </Drawer>

        </Box>
    );
}


