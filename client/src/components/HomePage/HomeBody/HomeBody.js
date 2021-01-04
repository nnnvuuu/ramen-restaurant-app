import React from 'react';
import './HomeBody.css';
import RamenTitlePng from '../../../images/RAMEN-title.png';
import {Grid,Box,Typography,
    Button,ThemeProvider, createMuiTheme,
    responsiveFontSizes,withStyles,makeStyles} from '@material-ui/core'
import Section2Png from '../../../images/section-2.jpg';
import { color } from '@material-ui/system';
import { wrap } from 'module';
import { inherits } from 'util';





// const colorTheme = createMuiTheme({
//     palette: {
//       primary: { main: "#800000", contrastText: "#fff" },
//       secondary: { main: "#03a9f4", contrastText: "#000" }
//     // type: 'dark',
//     },

//   });

const useStyles = makeStyles((theme) => ({

 

    section2Img:{
        width: '500px',
        height: '600px',
        zIndex: 100,
        marginTop:'6.9rem',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            
            width: '300px',
            height: '550px',
            marginTop:'12rem',
            minWidth:'350px',
           
        
        },
      
    },

    about:{
        color: '#8B4513',
        opacity:0.5,
        zIndex: 90, 
        position: 'absolute',
        letterSpacing: 7,
        fontWeight:30,
        fontFamily:"Monospace",
        fontSize:130,
        marginLeft:'7.5rem',
        
        [theme.breakpoints.down('sm')]: {
          display:'none',
        },
     
    },
    aboutMobile:{
        display:'none',
        [theme.breakpoints.down('sm')]: {
            display:'inline',
            color: '#8B4513',
            opacity:0.5,
            zIndex: 90, 
            position: 'absolute',
            letterSpacing: 7,
            fontWeight:30,
            fontFamily:"Monospace",
            fontSize:100,
            marginTop:'6.9rem',
            
            // marginLeft:'7.5rem',
          },

        
    }


  }));

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
    const classes = useStyles();
  return (
    <>
        <div className="section-1 ">
          <img src={RamenTitlePng}/>
        
        </div>
        
        <Grid container justify="center"
  alignItems="flex-start" className="section-2-container">
     {/* <ThemeProvider theme={colorTheme}> */}
          <Grid item xs={12} sm={5} md={4} lg={4} >
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
         <Grid item   sm={1} md={1} lg ={1}>
         <Box  >
              <Typography variant="h1" 
               className={classes.aboutMobile} 
                >   
                 <Box >
                    About
                 </Box>         
              </Typography>
             </Box>
         </Grid>
          <Grid item sm={5} md={5} lg={3}>
             <Box  >
              <Typography variant="h1" 
               className={classes.about} 
                >   
                 <Box >
                    About
                 </Box>         
              </Typography>
             </Box>

               <Box  >   
                <img src={Section2Png} 
                className={classes.section2Img}/>
                
             </Box>
           
          </Grid>
          <Grid item sm={1} md={1} lg={1}>
               
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