import React,{useState} from 'react';
import Navbar from '../Navbar/Navbar';
import {Grid,Typography,makeStyles, Box,Button,Paper } from '@material-ui/core';
import RamenMenu from './RamenMenu/RamenMenu';
import SnackMenu from './SnackMenu/SnackMenu';
import DrinkMenu from './DrinkMenu/DrinkMenu';


const useStyles = makeStyles((theme)=>({
    title:{
      textAlign:'center'
    },
    titleBg:{
        backgroundColor: '#ffda08',
        height:'200px',
        width:'100%',
    },
    subtitleBg:{
        backgroundColor:'#f8f8f8',
        height:'60px',
        width:'100%',
    },
    subtitle:{
        backgroundColor:'#000000',
        color:'#ffffff',
        "&:hover": {
            backgroundColor:'#000000',
            color:'#ffffff'
        }
    },
    subtitleHover:{
        "&:hover": {
            backgroundColor:'#000000',
            color:'#ffffff'
        }
    }

}));



const MenuPage = () => {
    const classes = useStyles();
    const [ramenClick,setRamenClick] = useState(true);
    const [snackClick,setSnackClick] = useState(false);
    const [drinkClick,setDrinkClick] = useState(false);

    const RamenOnclick = () =>{
        setRamenClick(true);
        setSnackClick(false);
        setDrinkClick(false);
    }

    const snackOnclick = () =>{
        setRamenClick(false);
        setSnackClick(true);
        setDrinkClick(false);
    }

    const drinkOnclick = () =>{
        setRamenClick(false);
        setSnackClick(false);
        setDrinkClick(true);
    }
    
  return (
    <div>
        <Navbar/>
        <Grid container 
         justify="center"
         alignItems="center"
         className={classes.titleBg}
         >
            <Grid item >
                <Typography variant='h2' className={classes.title}>
                   <Box letterSpacing={3} fontWeight='bold'>
                       Menu
                   </Box>
                </Typography>
            </Grid>
        </Grid>
        <Grid 
        container
        className={classes.subtitleBg}
        justify="center"
        alignItems="center"
        align="center"
        >
            <Grid item lg={1}>
                <Button 
                onClick= {()=> RamenOnclick()}
                className={ramenClick?classes.subtitle:classes.subtitleHover}
                >
                  <Typography variant='inherit'>
                      <Box letterSpacing={3} fontWeight='bold'>
                          Ramen
                      </Box>
                  </Typography>
                </Button>
            </Grid>
            <Grid item lg={1}>
                <Button 
                onClick= {()=> snackOnclick()}
                className={snackClick?classes.subtitle:classes.subtitleHover}>
                  <Typography variant='inherit'>
                      <Box letterSpacing={3} fontWeight='bold'>
                          Snack
                      </Box>
                  </Typography>
                </Button>
            </Grid>
            <Grid item lg={1}>
                <Button
                 onClick= {()=> drinkOnclick()}
                 className={drinkClick?classes.subtitle:classes.subtitleHover}
                 >
                  <Typography variant='inherit'>
                      <Box letterSpacing={3} fontWeight='bold'>
                          Drink
                      </Box>
                  </Typography>
                </Button>
            </Grid>
        </Grid>
        {
        ramenClick?<RamenMenu/>:
        snackClick?<SnackMenu/>:
        drinkClick?<DrinkMenu/>:null
        }
    </div>
  );
}
 
export default MenuPage;