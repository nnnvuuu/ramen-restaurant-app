import React,{useState} from 'react';
import {Button,Grid,makeStyles,Box,ButtonGroup} from '@material-ui/core';
import ForgotPwdPage from './ForgotPwdPage';
import ForgotEmailPage from './ForgotUsernamePage';
import NavBar from '../Navbar/Navbar';
import Footer from '../HomePage/HomeBody/Footer/FooterSection';
const useStyles = makeStyles(()=>({
  root:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    padding: '4rem ',
    width:'50%',
    margin:'0 auto'
  },

  passwordBtn:{
    textTransform:'none',
    backgroundColor:'#000000',
    color:'#ffffff',
    '&:hover':{
      backgroundColor:'#000000',
      color:'#ffffff',
    }
  },
  usernameBtn:{
    textTransform:'none',
    backgroundColor:'#000000',
    color:'#ffffff',
      '&:hover':{
      backgroundColor:'#000000',
      color:'#ffffff',
    }
  },
  clearButton:{
    textTransform:'none',
    '&:hover':{
      backgroundColor:'#000000',
      color:'#ffffff',
    }
  }
}))

const ResetAccountPage = () => {
  const classes = useStyles();
  const [isPwdBtnCheck,setIsPwdBtnCheck] = useState(false);
  const [isUsernameBtnCheck,setIsUsernameBtnCheck] = useState(true);


  const handleClick = (e) => {
    //get material ui button value
    // console.log(e.currentTarget.value);
    if(e.currentTarget.value == 'email'){
      setIsUsernameBtnCheck(true);
      setIsPwdBtnCheck(false);
    }
    else if(e.currentTarget.value == 'password'){
      setIsPwdBtnCheck(true);
      setIsUsernameBtnCheck(false);
    }
  }

  return (
    <div>
      <NavBar/>
      <Box className={classes.root}>
        <ButtonGroup fullWidth>
            <Button 
            onClick={handleClick}
            className={ isUsernameBtnCheck?classes.usernameBtn:classes.clearButton}
            value='email'
            >
                Forgot Username
             </Button>
           <Button 
           onClick={handleClick}
           className={isPwdBtnCheck?classes.passwordBtn:classes.clearButton}
           value='password'
           >
                Forgot Password
           </Button>
         </ButtonGroup>

              {isUsernameBtnCheck?
              <ForgotEmailPage/>:
              <ForgotPwdPage/>}

      </Box>
      {/* <Footer/> */}
    </div>
  );
};

export default ResetAccountPage;