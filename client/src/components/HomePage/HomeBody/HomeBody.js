import React from 'react';
import './HomeBody.css';
import RamenTitlePng from '../../../images/RAMEN-title.png';
import {Grid,Box,Typography,
    Button,ThemeProvider, createMuiTheme,
    responsiveFontSizes,withStyles,makeStyles,
    useMediaQuery,useTheme} from '@material-ui/core'
import Section2Png from '../../../images/section-2.jpg';
import Section3bgPng from '../../../images/section-3-bg.jpg';






const useStyles = makeStyles((theme) => ({

 

    section2Img:{
        width: '500px',
        height: '600px',
        zIndex: 100,
        marginTop:'6.9rem',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            
            width: '400px',
            height: '550px',
            marginTop:'12rem',

        },

        [theme.breakpoints.down(770)]: {
            width: '330px',
            height: '550px',
    },

        [theme.breakpoints.down('xs')]: {
          width: '100%',
          height: '400px',
          margin:'0',
      
    
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
    
    section2Title:{

        [theme.breakpoints.down('sm')]: {
            fontSize:'2rem',
            
    },

    [theme.breakpoints.down('xs')]:{
           marginTop:'10px',
    }

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

          [theme.breakpoints.down('xs')]: {
            marginTop:0,
            borderColor:'#808080',
            borderStyle: 'outset',
            padding:'8px'
            // border:'2px',
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




const About = (props) =>{
  
    return(
        <>
         <Typography variant="h1" 
     className={props.class.aboutMobile} 
                >   
                 <Box >
                    About
                 </Box>   
                       
         </Typography>
        </>
    )
}


function HomeBody() {
    const theme = useTheme();
    const classes = useStyles();
    const smMatches = useMediaQuery(theme.breakpoints.only('sm'));
    const xsMatches = useMediaQuery(theme.breakpoints.only('xs'));
  return (
    <>
        <div className="section-1 ">
          <img src={RamenTitlePng}/>
        
        </div>
        
        <Grid container justify="center"
        alignItems="flex-start" className="section-2-container">

        {xsMatches?<About class={classes}/> :null}

          <Grid item xs={10}  sm={4} md={4} lg={4} >
            <Box  mt={20} >
                <Typography variant="h5"  >
                    About the Resturant
                </Typography>
                <StyledTypography variant="h3"  className={classes.section2Title}>
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
      
            {smMatches?<About class={classes}/>:null}
         </Grid>
          <Grid item xs={10} sm={5} md={5} lg={3}>
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

        </Grid>


 
        <div className="section-3 ">
          <Grid
           container
          justify="center"
          alignItems="flex-start"
          className="section-3-container"
          >
           <Grid item lg={1}/>

            <Grid item lg={4}>
           
            </Grid>

            <Grid item lg={1}>
    
            </Grid>

            <Grid item lg={6}>
              
                </Grid>
          </Grid>
        
        </div>

        {/* <div className="section-3 box ">menu</div> */}
        <div className="section-4 box ">gallery</div>
        <div className="section-5 box ">address</div>
        <div className="section-6 box ">map</div>
        <div className="section-7 box ">footer</div>

    </>

  );
}

export default HomeBody;