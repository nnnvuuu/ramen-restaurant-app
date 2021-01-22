import React from 'react';
import { Typography, makeStyles, FormControl, TextField,Button,Grid } from '@material-ui/core';

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
    }
  
}))

const ForgotEmail = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h3' className={classes.title}>
          Forgotten username
      </Typography>
      <Typography variant='subtitle1' className={classes.subtitle}>
          Enter your email address and a reminder of your username will be sent to you.
      </Typography>

      
      <Grid container>
      <FormControl fullWidth className={classes.formContainer}>
      <Typography variant='h6' >
         Email
      </Typography>
      
      <TextField
       id="outlined-email-input"
       label="Enter your email here"
       type="email"
       autoComplete="current-email"
       variant="outlined" 
        />
      <Button className={classes.button}>
        Send Email
      </Button>

      </FormControl>
      </Grid>
  
      </div>
  );
};

export default ForgotEmail;