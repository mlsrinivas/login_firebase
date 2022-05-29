import React, {useEffect, useState} from 'react';
import { Grid, TextField, Button } from '@mui/material';
import faker from 'faker';
import SingleCard from './SingleCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FilterList from '../../components/FilterList';
import { useSelector, useDispatch } from 'react-redux';
import CartModal from './cartModal';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const ShoppingPage = () => {

    const Data = [...Array(21)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        desc: faker.commerce.productDescription(),
        img: faker.random.image(),
        fastDelivery: faker.datatype.boolean(),
        rating: faker.random.arrayElement([1,2,3,4,5]),
        inStock: faker.random.arrayElement([0,3,5,6,7]),
    }))

    const dispatch = useDispatch()
    const cartData = useSelector(state => state.cartReducer.cart)
    const [productsData, setProductsData] = useState([])
    const [searchText, setSearchText] = useState('')
    const [openModal, setOpenModal] = useState(false);
    const [goToTop, setGoToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                setGoToTop(true)
            }else{
                setGoToTop(false)
            }
        })
    }, [])

    const onClickTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const handleSearch = (text) => {
        setSearchText(text)
    }

    useEffect(() => {
        const productsData1 = [...productsData]
        const filterproductsData = productsData1.filter(e => e.name.toLowerCase().match(searchText.toLowerCase())) 
        if(searchText != ''){
            setProductsData(filterproductsData)
        }else{
            setProductsData(Data)      
        }

    }, [searchText])

    const priceLowToHigh = () => {
        const productsData1 = [...productsData]
        const sortproductsPrice = productsData1.sort((a,b) => a.price - b.price)
        setProductsData(sortproductsPrice)
    }

    const priceHighToLow = () => {
        const productsData1 = [...productsData]
        const sortproductsPrice = productsData1.sort((a,b) => b.price - a.price)
        setProductsData(sortproductsPrice)
    }

    const handleFastDelvery = () => {
        const productsData1 = [...productsData]
        const sortproductsPrice = productsData1.filter(e => e.fastDelivery == true ? true : false)
        setProductsData(sortproductsPrice)
    }

    const handleClear = () => {
        setProductsData(Data)      
    }

    const callbackAddItem = (id) => {
        const productsData1 = [...productsData]
        const addItem = productsData1.filter(e => e.id == id)
        dispatch({type: 'ADD_PRODUCT', payload: addItem})
        console.log('addItemaddItem', addItem)
    }

    const handleModal = () => {
        if(cartData.length > 0){
            setOpenModal(!openModal)
        }
    }

    return(
        <Grid >
            <Grid style={{height: 50, backgroundColor:'#ABD1C6', alignItems:'center', justifyContent:'space-between', display:'flex', paddingLeft: 30, paddingRight: 30}} >
                <TextField 
                    id="outlined-basic" 
                    label="Search items..." 
                    variant="outlined"
                    value={searchText}
                    onChange={(e) => handleSearch(e.target.value)}
                    InputProps={{
                        style: {height: 40, width: 500}
                    }}
                />
                <Grid style={{flexDirection:'row', display: 'flex'}}>
                    <Button onClick={handleClear} variant="contained" size="small" style={{backgroundColor:'grey', opacity: 0.6, marginRight: 20}}>
                        Clear all filters
                    </Button>
                    <FilterList 
                        priceLowToHigh={priceLowToHigh}
                        priceHighToLow={priceHighToLow}
                        handleFastDelvery={handleFastDelvery}
                    />
                    <Grid onClick={handleModal} style={{cursor:'pointer', flexDirection:'row', alignItems:'center', display:'flex'}}>
                        <ShoppingCartIcon fontSize='large' />
                        <Grid style={{height: 20, width: 20, backgroundColor: cartData.length > 0 ? '#FFF' : 'gray', borderRadius: 10, alignItems:'center', justifyContent:'center', display:'flex'}}>
                            <h6>{cartData.length}</h6>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid style={{flexDirection:'row', display:'flex', flexWrap:'wrap', width:'100%'}}>
                {productsData.length > 0 ? 
                <>
                    {productsData.map((item, index) => {
                        return(
                            <SingleCard 
                                itemData = {item} 
                                key = {index}
                                callbackAddItem={callbackAddItem}
                            />
                        )
                    })}
                </>
                :
                <h1>No data found...</h1>
                }
            </Grid>
            {goToTop &&
                <Grid     
                    onClick={onClickTop}
                    variant="contained" 
                    style={{position:'fixed', bottom: '50px', right: '50px', height: 50, width: 50, borderRadius: 25, backgroundColor:'#2CB67D', display:'flex', alignItems:'center', justifyContent:'center', cursor: 'pointer'}}
                >
                    <KeyboardDoubleArrowUpIcon />
                </Grid>
            }
            {openModal &&
                <CartModal 
                    openModal = {openModal}
                    onCloseModal = {() => setOpenModal(false)}
                />
            }
        </Grid>
    )
}

export default ShoppingPage;
