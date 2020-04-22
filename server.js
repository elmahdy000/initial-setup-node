const express = require('express'); 
const app = express(); 
const expressLayouts = require('express-ejs-layouts'); 


//routes 
const indexRoute = require('./routes/index')
const userRoute = require('./routes/user')

// set the view for the project 

app.set('view engine','ejs')
app.set('views',__dirname + '/views')
//layout 
app.set('layout','layouts/layout')
app.use(expressLayouts)

//define db 

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mybrary',{useNewUrlParser :true,useUnifiedTopology: true })
const db = mongoose.connection

db.on('error',error =>console.error(error))
db.once('open',() =>console.log('connected to mongoose'))

// style ,imgs
app.use(express.static('public'))

// define the port 
app.listen(process.env.PORT || 3000)



app.use('/',indexRoute) 
app.use('/user',userRoute) 





