import React, { useState } from 'react';
import {AppBar, Toolbar, Typography, useTheme, Tabs, Tab, Grid, Button} from '@mui/material';
import LeftDrawer from './leftDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { auth } from './screens/firebase';
import {Link} from 'react-router-dom';
import logo from './assets/logo.gif';
import LogoutIcon from '@mui/icons-material/Logout';
import Dashboard from './screens/dashboard';
import {useNavigate} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';

const NavBar = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const tabsData = [
        {name: 'Home', icon: <HomeIcon/>},
        {name: 'Dashboard', icon: <DashboardIcon/>},
        {name: 'About', icon: <InfoIcon/>},
    ];
    const [tab, setTab] = useState('Home');
    const navigate = useNavigate();

    const handleClickTab = (i) => {
        if(i.name !== tab){
            setTab(i.name)
        }
        switch(i.name){
            case "Home": return navigate("/") ;
            case "Dashboard": return navigate("/Dashboard") ;
            case "About": return navigate("/about") ;
            default : return navigate("/");
        }
    }
    return(
        <Grid style={{height: 60, backgroundColor:'#44ab60'}}>
            {matches 
            ? 
                <LeftDrawer defaultTab={tab}/> 
            : 
                <Grid style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingLeft:30, paddingRight: 30, paddingTop: 7}}>
                    <img src={logo} style={{height: 50, width: 50}}/>
                    <Grid style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        {tabsData.map((i) => {
                            return(
                                <Grid onClick={() => handleClickTab(i)}
                                    style={{display:'flex', flexDirection:'row', alignItems:'center', marginRight: 10, color:tab === i.name ? '#44ab60' : '#000', cursor:'pointer', padding: 7, backgroundColor:'#FFF', borderRadius: 5, textDecoration: tab === i ? 'underline' : 'none', height: 40}}>
                                    {i.icon}
                                    <h3 >{i.name}</h3>
                                </Grid>
                            )
                        })}
                        <Button variant='contained' onClick={() => auth.signOut()} style={{height: 35,  width: 130, backgroundColor:'#FFF', color:'#44ab60', marginLeft: 50}}><LogoutIcon style={{paddingRight: 10}}/><h3>Logout</h3></Button>
                    </Grid>
                </Grid>
            }
        </Grid>
    )
}

export default NavBar;