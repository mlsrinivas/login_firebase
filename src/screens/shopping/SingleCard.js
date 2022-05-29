import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Grid, Button} from '@mui/material'

const SingleCard = ({itemData, callbackAddItem}) => {

    const {name, price, desc, img, rating, inStock, fastDelivery, id} = itemData

  return (
    <Grid style={{borderWidth: '1px solid red', width: '33%', padding: 20}}>
        <Card style={{backgroundColor:'#b8c1ec'}}>
            <CardHeader
                title={name}
                // subheader={price}
            />
            <CardMedia
                component="img"
                height="194"
                image={img}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" style={{textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>
                {desc}
                </Typography>
                <Grid style={{flexDirection:'row', alignItems:'center', display:'flex', justifyContent:'space-between'}}>
                    <Grid style={{flexDirection:'column', display:'flex'}}>
                    <h4>{`$${price}`}</h4>
                    <Typography>{fastDelivery ? 'Fast delivery' : '4 days delivery'}</Typography>
                    </Grid>
                    <Button variant="contained" onClick={() => callbackAddItem(id)} style={{backgroundColor:'#FF8E3C'}}>Add to card</Button>
                    </Grid>
            </CardContent>
        </Card>
    </Grid>
  );
}

export default SingleCard;
