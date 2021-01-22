import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import {Button,makeStyles,Grid,Box,Paper, Typography,
  FormControl,InputLabel,Input,FormControlLabel,TextField,IconButton,Divider}
   from '@material-ui/core';
   import InstagramIcon from '@material-ui/icons/Instagram';
   import TwitterIcon from '@material-ui/icons/Twitter';
   import FacebookIcon from '@material-ui/icons/Facebook';
   
const useStyles = makeStyles((theme)=>({
  root:{
      backgroundColor:'#565A6D',
      background:'#565A6D',
      height:'90vh',
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      
  },
  paper:{
    // margin: theme.spacing(1),
    //   width: theme.spacing(16),
    //   height: theme.spacing(16),
    width: '35rem',
  height: '38rem',
  },
  signUpContainer:{
  
    margin:'0 auto',
    width: '80%',
    paddingTop:'1rem',
  },
  joinButton:{
      backgroundColor:'#1A1818',
      background:'#1A1818',
      color:'#ffff',
      width:'100%',
      marginTop:'1rem',
      textTransform:'none',
      '&:hover':{
        backgroundColor:'#1A1818',
        background:'#1A1818',
        color:'#ffff',
        textTransform:'none',
      }
      
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
    link:{
      textDecoration:'none',
    }

}))

const SignUpPage = () => {
  const classes = useStyles();
  return (
    <div >
      <NavBar/>
      <Box className={classes.root}>
      <Paper className={classes.paper}>
          <Grid container 
          className={classes.signUpContainer}
          direction='column'
          >
             <Grid item >
                <Typography variant='h4'>
                   <Box letterSpacing={2}>
                      Sign up for account
                   </Box>
                </Typography>
             </Grid>
             <Grid item>
                 <Typography variant='inherit'>
                     <Box letterSpacing={2} mt={1}>
                        nnn-ramen, All about delicious
                     </Box>
                  </Typography>
              </Grid>
            <Grid item>
                <FormControl  variant="outlined"   margin='dense' fullWidth>
               
              
                <Box mt={2}>
                  <TextField
                        id="outlined-password-input"
                        label="Email"
                        type="email"
                        autoComplete="current-email"
                        variant="outlined"
                        fullWidth
                     
                    />
                </Box>

  
                <Box mt={2}>
                  <TextField
                        id="outlined-username-input"
                        label="Username"
                        type="username"
                        autoComplete="current-username"
                        variant="outlined"
                        fullWidth
                     
                    />
                </Box>

                <Box mt={2}>
                <TextField
                      id="outlined-password-input"
                      label="8-20 Characters"
                      type="password"
                      autoComplete="current-password"
                      variant="outlined"
                      fullWidth
                  />
                  </Box>

                <Box mt={2}>
                <TextField
                      id="outlined-password-input"
                      label="Enter the password again"
                      type="password"
                      autoComplete="current-password"
                      variant="outlined"
                      fullWidth
                  />
               </Box>
                </FormControl>
                <Button className={classes.joinButton}>
                  <Typography variant='h6'>
                    Join now
                  </Typography>
                </Button>
                 <h2 className={classes.divider}>
                  or
                 </h2>
                 <Grid container
                  direction='row'
                  align='center'
                  justify='center'
                  alignItems='center'
                  >
                     <Grid item >
                       <IconButton>
                         <FacebookIcon/>
                       </IconButton>
                      </Grid>
                      <Grid item>
                      <IconButton>
                        <TwitterIcon/>
                      </IconButton>
                      </Grid>
                      <Grid item>
                      <IconButton>
                         <InstagramIcon/>
                      </IconButton>
                      </Grid>
                </Grid>
                <Grid item>
                  <Typography align='center' >
                    Already have a account?  
                    <Link to='signIn' className={classes.link}> Sign in </Link> here
                  </Typography>
                </Grid>
            </Grid>
          </Grid>
      </Paper>
      </Box>
    </div>
  );
};

export default SignUpPage;