import React from 'react';
import {makeStyles,Typography,Box,Grid,IconButton,Button} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
const useStyles = makeStyles(()=>({
    root:{
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        height:'70px',  
        // width:'100%',
        // margin: '0 auto',
        bottom: 0,
        position:'sticky',
        backgroundColor:'#ffda08',
     

    },

 
    flexContents:{
        // display:'flex',
        margin: '0 10px',
        // justifyContent:'space-evenly',
        // alignItems:'center',

    },
    checkoutButton:{
        background:'#000000',
        backgroundColor:'#000000',
        color:'#ffffff',
        padding:'10px',
        borderRadius:7,
        '&:hover':{
            background:'#000000',
            backgroundColor:'#000000',
           
        }
    },
    cart:{
        background:'#000000',
        backgroundColor:'#000000',
        color:'#ffffff',
        borderRadius:7,
        '&:hover':{
            background:'#000000',
            backgroundColor:'#000000',
            borderRadius:7,
           
        }
    },

    cartIcon:{
        marginRight:'8px'
    },
    link:{
       textDecoration:'none'
    }
}))

const PopoutFooter = () => {
    const classes = useStyles();
    return ( 
    <div className={classes.root}>
         <div className={classes.flexContents}>
                 <Typography className={classes.text} variant='h4'>
                     <Box letterSpacing={2} fontWeight='bold' >
                      Total:  $ 0
                      </Box>
                  </Typography>
         </div>
         <div className={classes.flexContents}>
             <Link to='cart' className={classes.link}>
                <IconButton className={classes.cart}>
                    <ShoppingCartIcon className={classes.cartIcon}/>
                    <Typography className={classes.text} variant='h6'>
                     <Box letterSpacing={2} >
                        CART
                      </Box>
                  </Typography>
                </IconButton>
             </Link>
         </div>
         <div className={classes.flexContents}>
             <Link to='checkout' className={classes.link}>
               <Button className={classes.checkoutButton}>
                <Typography className={classes.text} variant='h6'>
                     <Box letterSpacing={2}>
                     Check out
                     </Box>
                </Typography>
                </Button>
              </Link>
         </div>

        {/* <Typography className={classes.text} variant='h3'>
            <Box letterSpacing={5}>
                Total: $
            </Box>
        </Typography>
        <Typography className={classes.text} variant='h2'>
            <Box>
                Check out
            </Box>
        </Typography> */}
        {/* <Grid container 
        justify='center'
        alignItems='center'
        >
         
            <Grid item lg>
            <Typography className={classes.text} variant='h3'>
                   <Box letterSpacing={5}>
                   Cart
                   </Box>
              </Typography>
            </Grid>
            <Grid item lg>
            <Typography className={classes.text} variant='h3'>
                   <Box letterSpacing={5}>
                   Check out
                   </Box>
              </Typography>
            </Grid>
        </Grid> */}
    </div>
     );
}
 
export default PopoutFooter;