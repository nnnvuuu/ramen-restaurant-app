// module.exports = {

//   forgotUsername: username => ({
//       subject: 'nnn-ramen username',
//       html: `
//         <a href='${CLIENT_ORIGIN}/confirm/${id}'>
//           click to confirm email
//         </a>
//       `,      
//       text: `Copy and paste this link: ${CLIENT_ORIGIN}/confirm/${username}`
//     })
    
//   }

// module.exports = {

//   forgotUsername: username => ({
//       subject: 'nnn-ramen username',
//       html: `
//         <p>
//           Your username is ${username}.
//         </p>
//       `,      
  
//     })
    
//   }
 

  module.exports = {

  
  emailContent: SecretCode => ({
      subject: 'nnn-ramen Account Confirm Email',
    // html: 
//       `
//     <div>
//     <p>the verification code is ${SecretCode} </p>
//     <br/>
//     <p> the code will be expired in 10 minute. </p>
//    </div>
//      `
    //   text: `Copy and paste this link:`  //you can put link here
        text: `the verification code is ${SecretCode}\n the code will be expired in 10 minute.` //you can put link here
    }),


    forgotUsername: username => ({
      subject: 'nnn-ramen username',
      html: `
        <p>
          Your username is ${username}.
        </p>
      `,      
  
    }),


    forgotPassword: id => ({
      subject: 'nnn-ramen password reset',
      html: `
      <a href='http://localhost:5000/user/resetPassword/${id}'>
          click the link to reset your password.
       </a>
      `,      
  
    })
    
  }


