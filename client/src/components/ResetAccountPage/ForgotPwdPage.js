import React from 'react';
import { Typography, makeStyles, FormControl, TextField,Button,Grid,Box} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(()=>({
  root:{
    paddingTop:'20px',
    display:'flex',
    flexDirection:'column',
    width:'100%',
  },
  title:{
    color:'#066EAA',
  },
  subtitle:{
    color:'#696969'
  },
  formContainer:{
    width:'60%',
    marginTop:'2rem',
 
  },
  button:{
    width:'60%',
    marginTop:'20px',
    backgroundColor:'#55BA57',
    background:'#55BA57',
    color:'#ffffff',
    textTransform:'none',
    '&:hover':{
    marginTop:'20px',
    backgroundColor:'#55BA57',
    background:'#55BA57',
    color:'#ffffff',
    textTransform:'none',
    }
  },
    link:{
      textDecoration:'none',
      marginTop:'20px'
    }
}))

const ForgotPwdPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h3' className={classes.title}>
          Forgotten username
      </Typography> 
      <Typography variant='subtitle1' className={classes.subtitle}>
          Enter your username and a password reset email will be sent to the email that is associate with the account.
      </Typography>
      <Grid container>
      <FormControl fullWidth className={classes.formContainer}>
      <Typography variant='h6' >
         Username
      </Typography>
      
      <TextField
       id="outlined-username-input"
       label="Enter your Username here"
       type="username"
       autoComplete="current-username"
       variant="outlined" 
        />
      <Button className={classes.button}>
        Submit
      </Button>

      </FormControl>
      </Grid>

      </div>
  );
};

export default ForgotPwdPage;