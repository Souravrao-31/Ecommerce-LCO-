require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express')
const app = express();
const bodyParser = require('body-parser')  //for middleware
const cookieParser = require('cookie-parser')  //for middleware
const cors = require('cors')       //for middleware

const authRoutes = require("./routes/auth")

//DB Connections
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {     //then is used to status of database
    console.log("DB IS CONNECTED")
}).catch(() =>{     //if there is some problem then it will come up
    console.log("SOMETHING WRONG WITH.... DATABASES");
})


//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


//My Routes
app.use("/api", authRoutes);

  //PORt
 const port = process.env.PORT || 8000;

 //Starting Server
 app.listen(port, ()=> {
     console.log(`App is running at ${port}`)
 });
