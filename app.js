require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express')
const app = express();

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {     //then is used to status of database
    console.log("DB IS CONNECTED")
}).catch(() =>{     //if there is some problem then it will come up
    console.log("SOMETHING WRONG WITH.... DATABASES");
})

 const port = process.env.PORT || 8000;

 app.listen(port, ()=> {
     console.log(`App is running at ${port}`)
 });
