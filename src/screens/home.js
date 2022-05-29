import React from 'react';
import {Grid, Button} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {connect} from 'react-redux';
import {incAction, decAction} from '../redux/action';

const Home = ({countData, incAction, decAction}) => {

    const dispatch = useDispatch();
    console.log(countData, 'countDatacountData')
    // const countData = useSelector(state => state.counterReducer.count);

    // const handleIncrement = () => {
    //     dispatch({type: 'COUNTER', payload: countData+1})
    // }

    // const handleDecrement = () => {
    //     var deCount = countData
    //     if(deCount <= 0){
    //         deCount = 0
    //     }else{
    //         deCount = deCount - 1 
    //     }
    //     dispatch({type: 'COUNTER', payload: deCount})
    // }

    return(
        <Grid>
        <center>
        <h1 style={{backgroundColor:'red'}}>Home page</h1>
        <Button type="contained" onClick={incAction} style={{height: 30, width: 50, backgroundColor:'orange'}}>Add</Button>
        <p>{countData}</p>
        <Button type="contained" onClick={decAction} style={{height: 30, width: 50, backgroundColor:'orange'}}>Remove</Button>
        </center>
        </Grid>

    )
}

const mapStateToProps = state => ({
    countData: state.counterReducer
})
export default connect(mapStateToProps, {incAction, decAction})(Home);