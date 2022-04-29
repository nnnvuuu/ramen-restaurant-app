import React from 'react';
import {Grid,Typography,Box,Divider,makeStyles } from '@material-ui/core';
import NavBar from '../Navbar/Navbar';
const useStyle = makeStyles(()=>({
    root:{
      marginTop:'40px',
      marginLeft:'100px'
    }
}))
//gonna use cards, data will be pull out from database, will use redux for state management.

const CartPage = () => {
    const classes = useStyle();
    return ( 
        <div>
            <NavBar/>
            <Grid container className={classes.root}>
                <Grid item lg={8}>
                    <Typography variant='h4'>
                        <Box fontWeight='bold'>
                            My Orders
                        </Box>
                    </Typography>
                    <Typography>
                        <Box>
                           Ramen
                        </Box>
                    </Typography>
                    <Typography>
                        <Box>
                            Snack
                        </Box>
                    </Typography>
                    <Typography>
                        <Box>
                            Drinks
                        </Box>
                    </Typography>
                </Grid>
                <Grid item lg={4}>
                    cart
                </Grid>
            </Grid>
        </div>
     );
}
 
export default CartPage;