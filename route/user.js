const express = require("express");
const router = express.Router();
// require("dotenv").config();
// const database = require("../db/schema")
// const { body, validationResult } = require('express-validator');
// const bcrypt = require('bcrypt');

// var jwt = require('jsonwebtoken');
// var jwt_screte="thisismy secrete"
const user_schema = require('../database/user_schema')

router.get('/admin',async(req,res)=>{
    const data = await user_schema.find();
    res.json(data)
})

router.post('/signup',async(req,res)=>{
    
    const phone_input = req.body.phone;
     var phone_exist = await user_schema.findOne({phone : phone_input})
     
     if(!phone_exist){

      const data =  await user_schema.create(req.body)
      res.json({details:data})
      console.log(data);
     }
     else{
        console.log('phone num already exist');
        res.json('phone no, already exist')
     }
})

router.get('/home_data',async(req,res)=>{
    
    
      const data =  await user_schema.find()
      res.json({details:data})
     
})


module.exports = router