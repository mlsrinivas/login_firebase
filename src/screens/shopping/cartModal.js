import React from 'react';
import {Grid, Button, Modal} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CartModal = ({openModal, onCloseModal}) => {

    const cartData = useSelector(state => state.cartReducer.cart)
    const totalAmt = 0;
    const reduceFun = cartData.reduce((totalAmt, obj) => {
        return totalAmt += parseInt(obj.price)
    }, 0)
    
    return(
        <Grid>
            <Modal
                open={openModal}
                onClose={onCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Grid style={{backgroundColor:'#FFF', height: 'auto', width: '90%', position: 'absolute', top: '50%', left: '50%', transform:'translate(-50%, -50%)', borderRadius: 20, alignItems:'center', display:'flex', flexDirection:'column', padding: 20}}>
                <>
                {cartData.map((item, index) => {
                    return <EachItem item={item} key={index}/>
                })}
                </>

                <p>Total: {`$${reduceFun.toFixed(2)}`}</p>
                <Button variant="contained" onClick={onCloseModal} style={{marginTop: 20, backgroundColor:'#FF8E3C'}}>Checkout</Button>
            </Grid>
            </Modal>
        </Grid>
    )
}

const EachItem = ({item}) => {

    const dispatch = useDispatch();

    const handleDeleteItem = (id) => {
        dispatch({ type: 'DELETE_ITEM', payload: id})
    }

    return(
        <Grid style={{height: 70, width: '100%', borderBottom: '1px solid #EEE', alignItems:'center', justifyContent:'space-between', display:'flex', flexDirection:'row'}}>
            <Grid style={{flexDirection:'row', display:'flex', alignItems:'center'}}>
                <img src={item.img} height={50} width={50} style={{borderRadius:10}}/>
                <Grid style={{padding: 10}}>
                    <h5>{item.name}</h5>
                    <h6>{`$${item.price}`}</h6>
                </Grid>
            </Grid>
            <Grid style={{flexDirection:'row', alignItems:'center', display:'flex'}}>
                <ItemQuantity />
                <Grid onClick={() => handleDeleteItem(item.id)} style={{cursor:'pointer', color:'#E16162'}}>
                    <DeleteForeverIcon fontSize="large"/>
                </Grid>
            </Grid>
        </Grid>
    )
}

const ItemQuantity = () => {

    const [age, setAge] = React.useState(1);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return(
        // <Box sx={{ minWidth: 40 }}>
            <FormControl sx={{ m: 1, minWidth: 40 }} size="small">
                <InputLabel id="demo-simple-select-label">Qty</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                </Select>
            </FormControl>
        // </Box>
    )
}

export default CartModal;