import React,{useEffect,useState} from 'react';
import {Button,makeStyles,Grid,Box,Paper, Typography,
    FormControl,InputLabel,Input,FormControlLabel,
    TextField,IconButton,Divider,}
     from '@material-ui/core';
  import Alert from '@material-ui/lab/Alert';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {resend,confirm} from '../../redux/actions/authAction';
import {clearErrors} from '../../redux/actions/errorAction';
import {useHistory} from 'react-router-dom';
     

     const useStyles = makeStyles((theme)=>({
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
      codeTextField:{
        width:'70%'
      },
      resendBtn:{
        backgroundColor:'#000000',
        color:'#ffffff',
        textTransform:'none',
        height:'3.5rem',
        width:'30%',
        '&:hover':{
          backgroundColor:'#000000',
          color:'#ffffff',
        } 
      },
      disableResendBtn:{
        backgroundColor:'#cccccc',
        color: '#666666',
        textTransform:'none',
        height:'3.5rem',
        width:'30%',
        '&:hover':{
          backgroundColor:'#cccccc',
          color: '#666666',
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

const AuthPage = (props) => {
    const classes = useStyles();
    const [counter, setCounter] =useState(5);
    const [email,setEmail] = useState('');
    const [errMsg,setErrMsg] = useState(null);
    const [secretCode,setSecretCode] = useState(null);
    const [isResendClick,setIsResendClick] = useState(false);
    const [isComplete,setIsComplete] = useState(false);
    const [disableBtn,setDisableBtn] = useState(false);
    const [secToMinute,setSecToMinute] = useState('');

    useEffect(() => {
      props.clearErrors();
      if(counter == 0){
        return handleComplete();
      }

      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
     
    }, [counter]);



  
  const handleResend = (e) =>{
    e.preventDefault();
    setIsResendClick(true);
    setDisableBtn(true);
    setCounter(5);
    // const resendCode = Math.floor(100000 + Math.random() * 900000);
    // props.resend(resendCode);
  }

  const handleSent = (e) =>{
    e.preventDefault();
    const email = props.email;
    const inputCode = {secretCode,email}
    props.confirm(inputCode);

  }

  const handleComplete = (e) =>{
    setIsResendClick(false);
    setDisableBtn(false);
    
  }


  
  const handleChange = (e) => {
    if(e.target.name=='secretCode') setSecretCode(e.target.value);
    }



    const {isAuthenticated,isConfirmed,error} = props;
    const history = useHistory();
    return ( 
        <div>
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
                    <Box mt={5}>
                  <p>We have sent a confirmation code to your email address. please enter the code below</p>
                   </Box>
                  </Grid>
                  <FormControl 
                 variant="outlined"  
                  margin='dense' 
                  fullWidth
                  >
                
                <Box >
                  <TextField
                        id="outlined-secretCode-input"
                        label="Confirmation code"
                        type="secretCode"
                        name="secretCode"
                        autoComplete="current-secretCode"
                        variant="outlined"
                        // fullWidth
                        className={classes.codeTextField}
                        onChange={handleChange}
                     
                    />
                    <Button 
                    className={isResendClick?classes.disableResendBtn
                      :classes.resendBtn} 
                      disabled = {disableBtn}
                      onClick={handleResend}
                      >
                      <Typography variant='subtitle1' >
                          { isResendClick?
                          <span>{counter}</span>
                       :<Typography> Resend Code  </Typography>
                       
                       }
                     
                      </Typography>
                  </Button>
                </Box>

                <Typography variant='caption'>The comfirmation code will be expired in 5 minutes</Typography>
           
                <Button className={classes.joinButton}
                 onClick={handleSent}
                 >
                  <Typography variant='h6'>
                    Enter
                  </Typography>
                </Button>
                </FormControl>
              
                  {/* when user is comfirmed. displays a message and redirect the user to main
                  page in 3 sec */}

                     

                  {/* {
               
               // no idea why settimeout returns a wired number 2/7/2021
                    isConfirmed?
                    <Alert severity="success">
                      The comfirmation code is correct, you will be redirect to main page in 3 second
                      {
                       setTimeout(()=>history.push("/", { from: "signUp" }), 3000 )
                       }
                      </Alert>    
                   :null
                  } */}

                {
               
        
                    isConfirmed?
                       history.push("/", { from: "signUp" }):null
                  }

                  {
                    error.msg.msg?
                    <Alert severity="warning">
                    {error.msg.msg}
                   </Alert>
                   :null
                  }
             


                </Grid>
        </div>
     );
}

AuthPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  isConfirmed:PropTypes.bool,
  error: PropTypes.object.isRequired,
  register:PropTypes.func.isRequired,
  clearErrors:PropTypes.func.isRequired,
  }
  
  const mapStateToProps = state  =>({
    isAuthenticated : state.auth.isAuthenticated,
    isConfirmed : state.auth.isConfirmed,
    error: state.error
  });


 
export default connect(mapStateToProps,{clearErrors,resend,confirm})(AuthPage); //,login