import React from 'react';
import {Grid,Box,makeStyles,Typography,TextField,FormControl,Button,IconButton,ButtonGroup} from '@material-ui/core';
import { color, borderRadius } from '@material-ui/system';
import {Link} from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles(()=>({
  root:{
    display:'flex',
    flexDirection:'column',
    // justifyContent:'space-evenly',
    alignItems:'center',
    // height:'50vh',
    // backgroundColor:'blue',
    paddingTop:'2rem',
    
  },
  inputField:{
    // display:'flex',
    width:'25%',
    margin:'5px auto',
  
  },
  button:{
    textTransform:'none',
    backgroundColor:'#000000',
    color:'#ffffff',
    width:'100%',
    margin:'30px auto',
    '&:hover':{
      textTransform:'none',
      backgroundColor:'#000000',
      color:'#ffffff',
    }
  },
  link:{
    textDecoration:'none',
  },
  dividerContainer:{
    width:'25%',
    margin:'5px auto',
  },
  divider:{
    display: 'flex',
    flexDirection: 'row',
    '&::before':{
      content: '""',
      flex: '1 1',
      borderBottom: '1px solid #000',
      margin: 'auto',
      marginRight: '10px',
    },
    '&::after':{
      content: '""',
      flex: '1 1',
      borderBottom: '1px solid #000',
      margin: 'auto',
      marginLeft: '10px',
    },
  },
  iconbuttons:{
    padding:'5px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:'#000000',
    borderRadius:5,
    '&:hover':{
      backgroundColor:'#000000',
      color:'#ffffff'
    }

  },
  iconbuttonContainer:{
    display:'flex',
    alignContent:'flex-start',
    justifyContent:'center',
  },
 
}))


function SignInPage(props) {
  const classes = useStyles();
  return (
    <div>
      <NavBar/>
      <Box className={classes.root}>
        <Box > 
            <Typography variant='h4'>
              <Box>
                Welcome Back
              </Box>
            </Typography>
        </Box>
        <Box>
             <Typography variant='subtitle1'>
                <Box mb={3}>
                  nnn-ramen, all about delicious
                </Box>
              </Typography>
        </Box>
          <Box className={classes.inputField} >
            <FormControl fullWidth>
              <TextField
                id="outlined-username-input"
                label="Username"
                type="username"
                autoComplete="current-username"
                variant="outlined"
                fullWidth
              />
             </FormControl>
        </Box>
        <Box className={classes.inputField}>
         <FormControl fullWidth>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              fullWidth
            />
           </FormControl>
           <Button className={classes.button}>
              Sign in
           </Button>
        </Box>
        <Box iconbuttonContainer> 
         <IconButton className={classes.iconbuttons}>  
           <FacebookIcon/>
              <Box ml={0.5}>
                 <Typography variant='subtitle1'>
                    Sign in with Facebook
                  </Typography>
              </Box>
           </IconButton>
           <IconButton className={classes.iconbuttons}>
              <InstagramIcon/>
              <Box ml={0.5}>
                <Typography variant='subtitle1'>
                   Sign in with Instagram
                 </Typography>
               </Box>
           </IconButton>
           <IconButton className={classes.iconbuttons}>
              <TwitterIcon/>
              <Box ml={0.5}>
                <Typography variant='subtitle1'>
                   Sign in with Twitter
                 </Typography>
               </Box>
           </IconButton>
           </Box>
        <Box mt={3}>
        <Typography>
             <Link to='resetAccount' className={classes.link}> 
             Forgot username or password?
             </Link>
           </Typography>
        </Box>
        <Box className={classes.dividerContainer}>
          <h2 className={classes.divider}>or</h2>
        </Box>
        <Box >
           <Typography>
                New customer?  
               <Link to='signUp' className={classes.link}> 
                 Join now
               </Link>
             </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default SignInPage;