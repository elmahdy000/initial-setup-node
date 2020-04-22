const express = require('express')
const router = express.Router(); 


//define the get 

router.get('/',(req,res,next)=>{
   res.render('index')
})




module.exports = router