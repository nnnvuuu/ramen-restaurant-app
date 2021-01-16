import React from 'react';
import './MenuSection.css';
import { makeStyles,Grid,Divider} from '@material-ui/core';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down('lg')]: {
    root: {
      maxWidth: 350,
      marginLeft:'4rem',
      marginTop:'8rem',
      height:'auto',
      position:'absolute',
      zIndex:82,
      width:'100%',
      textAlign:'center',
      display:'flex',
      flexDirection:'column',
     
    },
  },

  [theme.breakpoints.down('md')]: {
    root: {
      maxWidth: 350,
      marginLeft:'0rem',
      marginTop:'8rem',
      height:'auto',
      position:'absolute',
      zIndex:82,
      width:'100%',
      textAlign:'center',
      display:'flex',
      flexDirection:'column',
     
    },
  },

  [theme.breakpoints.down('sm')]: {
    root: {
      // maxWidth: 400,
      marginLeft:'0rem',
      marginTop:'8rem',
      height:'auto',
      position:'absolute',
      zIndex:82,
      width:'50%',
      textAlign:'center',
      display:'flex',
      flexDirection:'column',
  
    },
    [theme.breakpoints.down('xs')]: {
      root: {
        maxWidth: '100%',
        marginTop:'8rem',
        height:'auto',
        position:'absolute',
        zIndex:82,
        width:'100%',
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
       
      },
    },
  },
   
    
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  
    content:{
  
    },

  
    cardIcons:{
      display:'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      // justifyContent: 'space-around',
 
    }
 
  }));
  




const MenuCard = (props) => {
    const classes = useStyles();
    return ( 
  <Grid container flexDirection='row'>
    <Card className={classes.root} >
  <Grid item  >
       <CardHeader
         title={props.headerTitle}
         subheader={props.subheaderTitle}
       />
       <CardMedia
         className={classes.media}
         image={props.image}
         title={props.mediaTitle}
       />
   </Grid>

    <Grid item >
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {props.content}
      </Typography>
    </CardContent>
    <CardContent>
    <Typography variant="h4"  component="p">
        {props.price}
      </Typography>
    </CardContent>
    <Divider variant='middle'/>
    <CardActions disableSpacing className={classes.cardIcons}>
      <IconButton aria-label="add to favorites" >
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <IconButton aria-label="add to cart" >
        <AddShoppingCartIcon />
      </IconButton>
    </CardActions>
    </Grid>
  </Card>
</Grid>
   );
}
 
export default MenuCard;