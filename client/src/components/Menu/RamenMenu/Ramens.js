import React from 'react';
import {Card,CardHeader,makeStyles,Grid, Divider, CardMedia, Typography,Box,IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';

const useStyle = makeStyles((theme)=>({
  root:{
    // width:'100%',
  },
  ramenImages:{
    width:'100%',
    height:'35rem'
  },
  title:{
      textAlign:'center',
  },
  iconbutton:{
      display:'flex',
      flexDirection: "row",
      borderRadius:0,
      "&:hover": {
        backgroundColor:'#000000',
        color:'#ffffff',
    }
  },
  iconbuttonWrapper:{
    display:'flex',
    flexDirection: "column"
  },

  bar:{
    backgroundColor:'#f8f8f8',
    height:'60px',
    width:'100%',
  }
}));

const Ramens = (props) => {
    const classes = useStyle();
    return( 
         <Grid
          container
          className={classes.root}
          justify='center'
          alignItems='center'
         align='center'
          >
             <Grid item lg={8}>
                <img src={props.image} className={classes.ramenImages}/>
             </Grid>
             <Grid item lg={4}>
                <Typography className={classes.title} variant='h3'>
                    <Box letterSpacing={3}>
                         {props.engTitle}
                    </Box>
                </Typography>
                <Typography className={classes.title} variant='h5'>
                    <Box >
                         {props.chnTitle}
                         <Divider orientation="vertical" />
                         {props.japTitle}
                    </Box>
                </Typography>
                <Grid container 
                 justify='center'
                 alignItems='center'
                 align='center'
                >
                    <Grid item >
                        <Typography variant='caption'>
                            <Box letterSpacing={3}mt={3}>
                                {props.numberOfRating + ' RATINGS  '}
                            </Box> 
                        </Typography></Grid>
                    <Grid item >
                        <Box mt={3}>
                             <Rating name="size-large" defaultValue={props.rating} size="large" />
                         </Box>
                    </Grid>
                
                </Grid>
                <Typography className={classes.title} variant='h4'>
                    <Box letterSpacing={5} mt={6}>
                        {props.price}
                    </Box>
                </Typography>
                <Box mt={4} className={classes.iconbuttonWrapper}>
                  <IconButton className={classes.iconbutton}>
                      <AddShoppingCartIcon/>
                     <Typography variant='h6'>
                        <Box ml={1}>
                          Add to Cart
                        </Box>
                     </Typography>
                  </IconButton>
                  <IconButton className={classes.iconbutton}>
                      <FavoriteBorderIcon/>
                      <Typography variant='h6'>
                        <Box ml={1}>
                          Add Favorite
                        </Box>
                     </Typography>
                  </IconButton>
                  <IconButton className={classes.iconbutton}>
                      <CommentIcon/>
                      <Typography variant='h6'>
                        <Box ml={1}>
                          Comment
                        </Box>
                     </Typography>
                  </IconButton>
                </Box>
             </Grid>
             <div className={classes.bar}/>
            
         </Grid>
    );
}



export default Ramens;