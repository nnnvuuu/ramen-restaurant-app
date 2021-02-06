import React,{useEffect, useState,useRef,} from 'react';
import {Link,useHistory} from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import {Button,makeStyles,Grid,Box,Paper, Typography,
  FormControl,InputLabel,Input,FormControlLabel,
  TextField,IconButton,Divider}
   from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register,resend,confirm} from '../../redux/actions/authAction';
import {clearErrors} from '../../redux/actions/errorAction';
import moment from 'moment';
import Counter from 'react-number-counter'



const useStyles = makeStyles((theme)=>({
  root:{
      backgroundColor:'#565A6D',
      background:'#565A6D',
      height:'100vh',
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      
  },
  paper:{
    // margin: theme.spacing(1),
    //   width: theme.spacing(16),
    //   height: theme.spacing(16),
    width: '35rem',
  height: '42rem',
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


const authSection = (props) => {
    
}

const SignUpPage = (props) => {
  const classes = useStyles();
  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [passwordCheck,setPasswordCheck] = useState('');
  const [errMsg,setErrMsg] = useState(null);
  const [secretCode,setSecretCode] = useState(null);
  const [isResendClick,setIsResendClick] = useState(true);
  const [isComplete,setIsComplete] = useState(false);
  const [disableBtn,setDisableBtn] = useState(true);
  const [counter, setCounter] =useState(300);
  const [secToMinute,setSecToMinute] = useState('');


  // useEffect(() => {
    
  
  //   counter > 0 && setTimeout(()=> setCounter(counter - 1), 1000);
  
  //   if(counter==0) return handleComplete();
 
  // }, [counter]);

 



  // notify.show("Email sent, check your inbox to confirm","success");
   //follow is how you use componentDidUpdate(prevProps) in functional component, this didUpdate 
   //lifeCycle function will compare to see if the error have been changed and updated the change.
  
   const prevProps = usePrevious(props.error);

   function usePrevious(value) {
     const ref = useRef();
   useEffect(() => {
 
     ref.current = value;
     const { error,isAuthenticated,isInCooldown} = props;
     if(error !== prevProps){
       //check for register error
       if(error.id === 'REGISTER_FAIL' || error.id === 'CONFIRMATION_FAIL'){
        setErrMsg(error.msg.msg);
       }
       else{
        setErrMsg(null);
       }
     }
       //redirect when login successfully.
    //  if(isAuthenticated){
    //    props.clearErrors();
    //   // history.push("/", { from: "signUp" });\
      
    //   //  setTimeout(()=>history.push("/", { from: "signUp" }), 5000);
    // }
    // if(props.isAuthenticated){
    //     props.clearErrors();
    //  }

    
 });
     return ref.current;
   }
 

  const handleChange = (e) => {
    if(e.target.name=='email') setEmail(e.target.value);
    else if(e.target.name=='username') setUsername(e.target.value);
    else if(e.target.name=='password') setPassword(e.target.value);
    else if(e.target.name=='repassword') setPasswordCheck(e.target.value);
    else if(e.target.name=='secretCode') setSecretCode(e.target.value);
  }

  const handleSubmit = (e) => {
     
    e.preventDefault();

      //generate SecretCode
   let secretCode = Math.floor(100000 + Math.random() * 900000);

    
    const newUser = {email,password,passwordCheck,username,secretCode}
    // const newCode = {email,}
    props.register(newUser);
    // props.resend()
    
    // if(props.isAuthenticated) 
      //  history.push("/NotifyEmailConfirm", { from: "signUp" });

      if(props.isAuthenticated){
        props.clearErrors();
      
     }

     
  }

  const handleResend = (e) =>{
    e.preventDefault();
    setIsResendClick(true);
    setDisableBtn(true);
    setCounter(300);
    // const resendCode = Math.floor(100000 + Math.random() * 900000);
    // props.resend(resendCode);
  }

  const handleSent = (e) =>{
    e.preventDefault();
    const inputCode = {secretCode,email}
    props.confirm(inputCode);

  }

  const handleComplete = (e) =>{
    setIsResendClick(false);
    setDisableBtn(false);
    
  }


  // const renderer = ({minutes, seconds, completed }) => {

  //   console.log(completed);
  //   if (completed) {
  //     // Render a completed state
  //     setIsInCooldown(false);
  //     setIsResendClick(false);
  //   } else {
  //     // Render a countdown
  //     setIsInCooldown(true);
  //     // 
  //     console.log("mo");
  //     return <span>{minutes}:{seconds}</span>;
  //   }

  
  // };


    const renderer = ({minutes, seconds }) => {
      if(minutes == 0){
        return <span>{seconds}</span>
      }
      else{
      return <span>{minutes}:{seconds}</span>;
      }
  };



  const history = useHistory();
  const {isAuthenticated,isConfirmed,error} = props;
console.log(isAuthenticated);
console.log(isConfirmed);
  return (
    <div >
     
      <NavBar/>
      <Box className={classes.root}>
      <Paper className={classes.paper}>
        
       {/* the user is still filling out the signUp form, the isAuthenticated will become true once they succeccfully filled out. */}
        {!isAuthenticated?
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
                <FormControl 
                 variant="outlined"  
                  margin='dense' 
                  fullWidth
                  >
                <Box mt={2}>
                  <TextField
                        id="outlined-password-input"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="current-email"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                     
                    />
                </Box>

  
                <Box mt={2}>
                  <TextField
                        id="outlined-username-input"
                        label="Username"
                        type="username"
                        name="username"
                        autoComplete="current-username"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}

                    />
                </Box>

                <Box mt={2}>
                <TextField
                      id="outlined-password-input"
                      label="8-20 Characters"
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                  />
                  </Box>

                <Box mt={2}>
                <TextField
                      id="outlined-password-input"
                      label="Enter the password again"
                      type="password"
                      name="repassword"
                      autoComplete="current-password"
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                  />
               </Box>
                <Button className={classes.joinButton}
                 onClick={handleSubmit}
                 >
                  <Typography variant='h6'>
                    Join now
                  </Typography>
                </Button>

                {errMsg?
                <Box mt={1}>
                  <Alert variant="outlined" severity="error">
                      {errMsg}
                 </Alert>
               </Box>:null
           
               }


            
                </FormControl>

             

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
                       <Link to="/auth/facebook">
                         <IconButton>
                           <FacebookIcon/>
                         </IconButton>
                       </Link>
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

          //  the user hits join now button with no error, now user will have to input the secret code.  
              :

          
      
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
                  onSubmit={handleSubmit}
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

                    

                  {
                 //*****ERRROR, IS CONFIRMED NEVER UPDATE,CHECK CONFIRM IN REDUCER. PLEASE FIX 2/1/2021 */
                    isConfirmed?
                    <Alert severity="success">
                      The comfirmation code is correct, you will be redirect to main page in 3 second
                      { setTimeout(()=>history.push("/", { from: "signUp" }), 3000 )}
                      </Alert>
                      
                   :null
                  }

                  {
                    error.msg.msg?
                    <Alert severity="warning">
                    {error.msg.msg}
                   </Alert>
                   :null
                  }
             


                </Grid>
            
              } 
      </Paper>
      </Box>
    </div>
  );
};

SignUpPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  register:PropTypes.func.isRequired,
  clearErrors:PropTypes.func.isRequired,
}

const mapStateToProps = state  =>({
  isAuthenticated : state.auth.isAuthenticated,
  error: state.error
});


export default connect(mapStateToProps,{register,clearErrors,resend,confirm})(SignUpPage); //,login