import React from 'react';
import {Box, Grid,makeStyles, Typography,
    Button,Divider,TextField,FormControl,
    InputLabel,FormHelperText,Input,FormControlLabel,
    Checkbox,
 } from '@material-ui/core';
 import {Link} from 'react-router-dom';

const useStyle = makeStyles(()=>({
    root:{
      marginTop:'10rem',
    },
    guestButton:{

        paddingLeft:'50px',
        paddingRight:'50px',
        backgroundColor:'#000000',
        color:'#ffffff',
        marginTop:'25px',
        textTransform:'none',
        borderRadius:7,
        '&:hover':{
            paddingLeft:'50px',
            paddingRight:'50px',
            backgroundColor:'#000000',
            color:'#ffffff',
            textTransform:'none',
            borderRadius:7,
        }
    },
    customerButton:{
        paddingLeft:'45px',
        paddingRight:'45px',
        backgroundColor:'#000000',
        color:'#ffffff',
        marginTop:'25px',
        textTransform:'none',
        borderRadius:7,
        '&:hover':{
            paddingLeft:'45px',
            paddingRight:'45px',
            backgroundColor:'#000000',
            color:'#ffffff',
            marginTop:'25px',
            textTransform:'none',
            borderRadius:7,
        }
    },
    midDivider:{
        padding:'0.4px',
        backgroundColor:'#000000'
    },
    // guestDivider:{
    //     backgroundColor:'#000000',
        
    // }
    link:{
        textDecoration:'none',
    }
}))


const AskAccount = () => {
    const classes = useStyle();
    return ( 
        <div className={classes.root}>
            <Grid container justify='center' >
                <Grid item lg={3}>
                    <Typography variant='h4'>
                        <Box>
                            Returning Customers
                        </Box>
                    </Typography>
                  <FormControl filled fullWidth margin='dense'>
                    <InputLabel htmlFor="my-input">Username </InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text"   />
                    {/* <FormHelperText id="my-helper-text">
                        We'll never share your email.
                    </FormHelperText> */}
                 </FormControl>
                
                <FormControl filled fullWidth margin='dense'>
                  <InputLabel htmlFor="my-input">Password</InputLabel>
                  <Input id="my-input" aria-describedby="my-helper-text"   />
                </FormControl>

                <FormControlLabel
                  control={
                    <Checkbox
                    //   checked={state.checkedF}
                    //   onChange={handleChange}
                    //   name="checkedF"
                     color="#000000"
                    />
                  }
                  label="Keep me logged in"
                />
                <Box>
                  <Button className={classes.customerButton}>
                    <Typography>
                        <Box fontSize={15}>
                            Log in
                        </Box>
                    </Typography>
                  </Button>
                </Box>

               <Box mt={3}>
                <Link 
                to='resetAccount'
                className={classes.link}>
                Forgot your username/password?
                </Link>
                </Box>

                </Grid>
                <Grid  lg={1}/>
                <Grid item lg={1}>
                 <Divider orientation='vertical'  className={classes.midDivider}/>
                </Grid>
                <Grid item lg={3}   >
                       <Typography variant='h4'>
                            <Box>
                                Guest
                            </Box>
                       </Typography>
                       <Typography variant='subtitle1'>
                            <Box mt={2}>
                                Checkout without logging in. You can always create an account later.
                            </Box>
                       </Typography>
                       <Link to='deliveryPage'
                       className={classes.link}>
                         <Button className={classes.guestButton}>
                           <Typography variant='h6'>
                                <Box fontSize={20}>
                                   Continue
                                </Box>
                           </Typography>
                         </Button>
                       </Link>
                       <Box mt={6}>
                           <Divider/>
                       </Box>
                       <Box mt={3}>
                           Do you want to <Link to ='signUp' className={classes.link}>create an account</Link> now?
                       </Box>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default AskAccount;