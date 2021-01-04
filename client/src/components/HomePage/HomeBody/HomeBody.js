import React from 'react';
import './HomeBody.css';
import RamenTitlePng from '../../../images/RAMEN-title.png';
import {Grid,Box,Typography,Button,positions} from '@material-ui/core';
import Section2Png from '../../../images/section-2.jpg';

function HomeBody(props) {
  return (
    <>
      

        <div className="section-1 ">
          <img src={RamenTitlePng}/>
        
        </div>

        <Grid container spacing={3} justify="center"
  alignItems="flex-start" className="section-2-container">

          <Grid item lg={4} >
            <Box  mt={20}>
                <Typography variant="h5" >
                    About the Resturant
                </Typography>
                <Typography variant="h4" >
                   THIS IS THE PLACE WHERE YOU CAN GET THE BEST JAPANESE RAMEN EXPERIENCE EVER!
                </Typography>
                <hr className="section-2-left-hr"/>
                <Typography variant="p">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed sem non sapien placerat iaculis et vel arcu. Suspendisse vel purus urna. Cras pellentesque congue blandit. Fusce ut orci nec arcu consequat condimentum. 
                </Typography>
                <br/>
                <Box mt={5}>
                  <Button size="large" variant="contained" color="primary">
                      READ MORE
                  </Button>
                </Box>
             </Box>
          </Grid>
         <Grid item lg ={1}/>
          <Grid item lg={3}>
             <Box mt={1} ml={16} >
              <Typography variant="h1" 
               className="section-2-about" 
                >   
                 <Box
                  letterSpacing={7}
                  fontWeight={30}
                  fontFamily="Monospace"
                  fontSize={130}
                 >
                    About
                 </Box>         
              </Typography>
             </Box>
               <Box mt={14.6}   >   
                <img src={Section2Png} 
                className="section-2-png"/>
                
             </Box>
           
          </Grid>
          <Grid item lg={1}>
               
          </Grid>
        </Grid>




    
        <div className="section-3 box ">menu</div>
        <div className="section-4 box ">gallery</div>
        <div className="section-5 box ">address</div>
        <div className="section-6 box ">map</div>
        <div className="section-7 box ">footer</div>

    </>

  );
}

export default HomeBody;