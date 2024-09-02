var express=require('express')
var mongoose=require('mongoose')
var bcrypt=require('bcryptjs')
var jwt=require('jsonwebtoken')
const LoginSchema = require('../Models/LoginSchema')
const RegisterSchema = require('../Models/RegisterSchema')

var AuthRoutes=express.Router()

AuthRoutes.post('/register',async(req,res)=>{
    try {
        const hashedPassword=await bcrypt.hash(req.body.password,12)
        const login={
            email:req.body.email,
            password:hashedPassword,
            role:'user',
        }
        const savelogin=await LoginSchema(login).save()

        const reg={
            name:req.body.name,
            phone:req.body.phone,
            loginId:savelogin._id,
        }
        const savereg=await RegisterSchema(reg).save()

        if(savelogin&&savereg){
          return res.status(201).json({
                success:true,
                error:false,
                message:'successfully saved'
            })
        }

    } catch (error) {
       return res.status(500).json({
            success:false,
            error:true,
            message:' something went wrong',
            errorMessage:error.message,
        })
    }
})

AuthRoutes.post('/login',async(req,res)=>{
    try {
        const email=req.body.email;
        const password=req.body.password;
        if(!email||!password){
            return res.status(400).json({
                success:false,
                error:true,
                message:'All fileds are required'
            })
        }
        const checkEmail=await LoginSchema.findOne({email:req.body.email})
        if(!checkEmail){
            return res.status(400).json({
                success:false,
                error:true,
                message:'Email doesn"t exist, Register first'
            })
        }
        const passwordCorrect=await bcrypt.compare(req.body.password,checkEmail.password)
        if(passwordCorrect){

            const token=jwt.sign({
                userId:checkEmail._id,
                email:checkEmail.email,
                role:checkEmail.role,

            },
            'SECRET_KEY',
            {
                expiresIn:'1h'
            })

            return res.status(200).json({
                success:true,
                error:false,
                message:'Login Success',
                data:checkEmail,
                token:token,
                role:checkEmail.role,
                loginId:checkEmail._id,
                name:checkEmail.name,

            })
        }
        else{
            return res.status(400).json({
                success:false,
                error:true,
                message:'incorrect password'
            })
        }


    } catch (error) {

        return res.status(500).json({
            success:false,
            error:true,
            message:'something went wrong',
            errorMessage:error.message
        })
      
    }
})

AuthRoutes.get('/profile/:id',async(req,res)=>{
    const check=await RegisterSchema.aggregate([
    
        {
          '$lookup': {
            'from': 'logins', 
            'localField': 'loginId', 
            'foreignField': '_id', 
            'as': 'result'
          }
        }, {
          '$unwind': {
            'path': '$result'
          }
        },
        {
            $match:{loginId:new mongoose.Types.ObjectId(req.params.id)}

        },{
          '$group': {
            '_id': '$_id', 
            'loginId': {
              '$first': '$loginId'
            }, 
            'name': {
              '$first': '$name'
            }, 
            'phone': {
              '$first': '$phone'
            }, 
            'email': {
              '$first': '$result.email'
            }
          }
        }
    ])
    if(check){
        return res.status(200).json({
            success:true,
            error:false,
            message:'view success',
            data:check,
          })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'view error'
          })
        }
})



module.exports=AuthRoutes