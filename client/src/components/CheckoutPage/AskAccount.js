import React from 'react';
import {Box, Grid,makeStyles, Typography,Button,Divider} from '@material-ui/core';

const useStyle = makeStyles(()=>({
    root:{
      marginTop:'13rem',
    },
    button:{

        paddingLeft:'50px',
        paddingRight:'50px',
        backgroundColor:'#000000',
        color:'#ffffff',
        marginTop:'25px',
        
        '&:hover':{
            paddingLeft:'50px',
            paddingRight:'50px',
            backgroundColor:'#000000',
            color:'#ffffff',
        }
    }
}))


const AskAccount = () => {
    const classes = useStyle();
    return ( 
        <div className={classes.root}>
            <Grid container justify='center' >
                <Grid item lg={5}>
                    <Typography variant='h4'>
                        <Box>
                            Returning Customers
                        </Box>
                    </Typography>
                </Grid>
                <Grid item lg={2}>
                 <Divider orientation='vertical' />
                </Grid>
                <Grid item lg={3}   >
                       <Typography variant='h4'>
                            <Box>
                                Guest
                            </Box>
                       </Typography>
                       <Typography variant='h6'>
                            <Box mt={2}>
                                Checkout without logging in. You can always create an account later.
                            </Box>
                       </Typography>
                       <Button className={classes.button}>
                         <Typography variant='h6'>
                              <Box fontSize={15}>
                                 Continue
                              </Box>
                         </Typography>
                       </Button>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default AskAccount;