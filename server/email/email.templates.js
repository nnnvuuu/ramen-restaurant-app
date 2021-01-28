module.exports = {

    confirm: id => ({
      subject: 'React Confirm Email',
      html: `
        <a href='${CLIENT_ORIGIN}/confirm/${id}'>
          click to confirm email
        </a>
      `,      
      text: `Copy and paste this link: ${CLIENT_ORIGIN}/confirm/${id}`
    })
    
  }

 

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
    })
    
  }


