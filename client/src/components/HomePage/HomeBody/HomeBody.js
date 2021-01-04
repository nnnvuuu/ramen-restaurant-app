import React from 'react';
import './HomeBody.css';
import RamenTitlePng from '../../../images/RAMEN-title.png';
import {Grid,Box,Typography,
    Button,ThemeProvider, createMuiTheme,
    responsiveFontSizes,withStyles} from '@material-ui/core'
import Section2Png from '../../../images/section-2.jpg';
import { color } from '@material-ui/system';
import { wrap } from 'module';





// const colorTheme = createMuiTheme({
//     palette: {
//       primary: { main: "#800000", contrastText: "#fff" },
//       secondary: { main: "#03a9f4", contrastText: "#000" }
//     // type: 'dark',
//     },

//   });

const StyledButton = withStyles({
    root: {

    borderColor:'#800000',
    color:'#800000',
    opacity:0.5,
    padding: '10px,30px',
      '&:hover': {
        background: "#800000",
        color:"white",
        opacity:0.7
     },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);


  const StyledTypography = withStyles({
    root: {
      color: '#8B4513',
      opacity:0.5,
    },
  })(Typography);





function HomeBody(props) {
  return (
    <>
      

        <div className="section-1 ">
          <img src={RamenTitlePng}/>
        
        </div>

        <Grid container spacing={3} justify="center"
  alignItems="flex-start" className="section-2-container">
     {/* <ThemeProvider theme={colorTheme}> */}
          <Grid item xs={10} sm={6} md={4} lg={4} >
            <Box  mt={20}>
                <Typography variant="h5" >
                    About the Resturant
                </Typography>
                <StyledTypography variant="h3" >
                   BEST RAMEN EXPERIENCE EVER!
                </StyledTypography>
                <hr className="section-2-left-hr"/>
                <Box lineHeight={2}> 
                 <Typography variant="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed sem non sapien placerat iaculis et vel arcu. Suspendisse vel purus urna. Cras pellentesque congue blandit. Fusce ut orci nec arcu consequat condimentum. 
                 </Typography>
                 </Box>
                <Box mt={5}>
                  <StyledButton size="large" variant="outlined">
                      READ MORE
                  </StyledButton>
                </Box>
             </Box>
          </Grid>
         <Grid item sm={1} md={1} lg ={1}/>
          <Grid item sm={4} md={5} lg={3}>
             <Box mt={1} ml={16} >
              <StyledTypography variant="h1" 
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
              </StyledTypography>
             </Box>
               <Box mt={14.6}   >   
                <img src={Section2Png} 
                className="section-2-png"/>
                
             </Box>
           
          </Grid>
          <Grid item md={1} lg={1}>
               
          </Grid>
          {/* </ThemeProvider> */}
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