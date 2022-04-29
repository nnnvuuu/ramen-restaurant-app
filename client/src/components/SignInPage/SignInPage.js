import React,{useState,useRef,useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../redux/actions/authAction';
import {Grid,Box,makeStyles,Typography,TextField,FormControl,Button,IconButton,ButtonGroup} from '@material-ui/core';
import { color, borderRadius } from '@material-ui/system';
import {Link, useHistory} from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import {clearErrors} from '../../redux/actions/errorAction';
import Alert from '@material-ui/lab/Alert';

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
 const [username,setUsername] = useState('');
 const [password,setPassword] = useState('');
 const [errMsg,setErrMsg] = useState(null);
 const history = useHistory();
 const prevProps = usePrevious(props.error);

 function usePrevious(value) {
   const ref = useRef();
 useEffect(() => {

   ref.current = value;
   const { error,isAuthenticated} = props;
   if(error !== prevProps){
     //check for register error
     if(error.id === 'REGISTER_FAIL'){
      setErrMsg(error.msg.msg);
     }
     else{
      setErrMsg(null);
     }
   }
     //redirect when login successfully.
   if(isAuthenticated){
     props.clearErrors();
    history.push("/", { from: "signIn" });

   }
});
   return ref.current;
 }

 const handleChange = (e) =>{
    if(e.target.name == 'username') setUsername(e.target.value);
    else if(e.target.name =='password') setPassword(e.target.value);
  }


 const handleSubmit = (e) =>{
  e.preventDefault();

  const user = {username,password}

  // attempt to login
  props.login(user);
 }


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
        <FormControl fullWidth>
          <Box className={classes.inputField} >
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
        <Box className={classes.inputField}>
         {/* <FormControl fullWidth> */}
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
           {/* </FormControl> */}
           {errMsg?
                <Box mt={1}>
                  <Alert variant="outlined" severity="error">
                      {errMsg}
                 </Alert>
               </Box>:null
           
               }

           <Button className={classes.button} onClick={handleSubmit}>
              Sign in
           </Button>
        </Box>
        </FormControl>

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



SignInPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  login:PropTypes.func.isRequired,
  clearErrors:PropTypes.func.isRequired,
}

const mapStateToProps = state  =>({
  isAuthenticated : state.auth.isAuthenticated,
  error: state.error
});


export default connect(mapStateToProps,{login,clearErrors})(SignInPage); //,login