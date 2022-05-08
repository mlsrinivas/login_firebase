import React, { useState } from 'react';
import{Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Grid} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './assets/logo.gif';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import {useNavigate} from "react-router-dom";

const LeftDrawer = ({defaultTab}) => {
    const navigate = useNavigate()
    const [openDrawer, setOpenDrawer] = useState(false);
    const tabsData = [
        {name: 'Home', icon: <HomeIcon/>},
        {name: 'Dashboard', icon: <DashboardIcon/>},
        {name: 'About', icon: <InfoIcon/>},
    ];
    const [tab, setTab] = useState(defaultTab);

    const handleClickTab = (text) => {
        setOpenDrawer(false)
        if(text !== tab){
            setTab(text)
        }
        switch(text){
            case "Home" : return navigate('/')
            case "Dashboard" : return navigate('dashboard')
            case "About": return navigate('about')
        }
    }

    return(
        <>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List>
                {tabsData.map((i) => {
                    return(
                        <>
                            <ListItemButton onClick={() => handleClickTab(i.name)} style={{backgroundColor: tab === i.name ? '#44ab60' : '#fff', borderBottom:'1px solid #44ab60'}}>
                                <ListItemIcon>
                                    <ListItemText style={{display:'flex', flexDirection:'row', alignItems:'center', color:tab === i.name ? '#fff' : '#44ab60'}}>{i.icon}{i.name}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        </>
                    )
                })}
            </List>
        </Drawer>
        <Grid style={{display:'flex', flexDirection:'row', justifyContent:'space-between', paddingLeft: 10, paddingRight: 10, alignItems:'center', paddingTop:5}}>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon style={{color:'#FFF'}} />
        </IconButton>
        <img src={logo} style={{height: 50, width: 50}}/>
        </Grid>
        </>
    )
}

export default LeftDrawer;