const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");
var mysql = require('mysql');
require('dotenv').config();

// var session = require("express-session")
// var bodyParser = require("body-parser");
// const passport = require('passport');

//Passport config
// require('./config/passport')(passport);

var con = mysql.createConnection({
    host: "us-cdbr-east-04.cleardb.com",
    user: "bb00df426a5f4a",
    password: "430ef33e",
    database:"heroku_01f1d3d78ee004b",
  });
 
//   mysql://bb00df426a5f4a:430ef33e@us-cdbr-east-04.cleardb.com/heroku_01f1d3d78ee004b?reconnect=true

con.connect((err) =>{
    if(err) throw err;
    console.log("MYSQL connected...");
})


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// const articlesRouter = require('./routes/articles');
const userRouter = require('./routes/user');

// app.use('/articles',articlesRouter);
app.use('/user',userRouter);


  // Serve static assets if in production
  if (process.env.NODE_ENV === 'production') {
    // Set static folder

  app.use(express.static("client/build"));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    });

    
  } 

app.listen(port,()=> {
  console.log(`Server is running on port: ${port}`);
}); 
