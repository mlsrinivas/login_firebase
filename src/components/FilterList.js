import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FilterListIcon from '@mui/icons-material/FilterList';
import {Grid} from '@mui/material';

const FilterList = ({priceHighToLow, priceLowToHigh, handleFastDelvery}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickItem = (i) => {
    handleClose()
    console.log(i)
    switch(i){
        case 1: priceLowToHigh();
                break;
        case 2: priceHighToLow();
                break;
        case 3: handleFastDelvery();
                break;
        default: console.log(' entered null');
                break;
    }
  }

  return (
    <div style={{marginRight: 40}}>
      <Grid
        // id="basic-button"
        // aria-controls={open ? 'basic-menu' : undefined}
        // aria-haspopup="true"
        // aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{cursor:'pointer'}}
      >
        <FilterListIcon fontSize="large"/>
      </Grid>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleClickItem(1)}>Price low-high</MenuItem>
        <MenuItem onClick={() => handleClickItem(2)}>Price high-low</MenuItem>
        <MenuItem onClick={() => handleClickItem(3)}>Fast delivery</MenuItem>
      </Menu>
    </div>
  );
}

export default FilterList;
