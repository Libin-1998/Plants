var express=require('express')
var mongoose=require('mongoose')
const multer=require('multer')
const BlogSchema = require('../Models/BlogSchema')
const auth = require('../Middleware/auth')


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../public/images/')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    },
})
const upload=multer({storage})


var BlogRoutes=express.Router()

BlogRoutes.post('/addblog',auth,upload.single('image'),auth,async(req,res)=>{
    const data={
        title:req.body.title,
        content:req.body.content,
        by:req.body.by,
        timestamp:req.body.timestamp,
        image:req.file?.filename,
    }
    const add=await BlogSchema(data).save()
    if(add){
        return res.status(201).json({
            success:true,
            error:false,
            message:'successfully add',
            data:add,
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'error to add',
        })
    }
})

BlogRoutes.get('/viewblog',auth,async(req,res)=>{
    const view=await BlogSchema.find()
    if(view){
        return res.status(200).json({
            success:true,
            error:false,
            data:view,
            message:'view successfully'
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'error to view'
        })
    }
})

BlogRoutes.get('/singleviewblog/:id',async(req,res)=>{
    try {
    const singleview= await BlogSchema.findOne({_id:req.params.id})
    if(singleview){
        return res.status(200).json({
            success:true,
            error:false,
            data:singleview,
            message:'single view success'
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'error to view'
        })
    }
} catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Internal Server Error'
    });
  }
})

BlogRoutes.delete('/deleteblog/:id',async(req,res)=>{
    const deleted= await BlogSchema.deleteOne({_id:req.params.id})
    if(deleted){
        return res.status(200).json({
            success:true,
            error:false,
            message:'delete successfully'
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'error to delete'
        })
    }
})


BlogRoutes.put('/updateblog/:id',upload.single('image'),auth,async(req,res)=>{
    const oldvalue=await BlogSchema.findOne({_id:req.params.id})
    const edit={
        title:req.body.title?req.body.title:oldvalue.title,
        content:req.body.content?req.body.content:oldvalue.content,
        by:req.body.by?req.body.by:oldvalue.by,
        timestamp:req.body.timestamp?req.body.timestamp:oldvalue.timestamp,
        image:req.file?req.file.filename:oldvalue.image,
    }
    const update=await BlogSchema.updateOne({_id:req.params.id},{$set:edit})
    if(update){
        return res.status(200).json({
            success:true,
            error:false,
            data:update,
            updateStatus:edit,
            message:'update successfully'
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'error to update'
        })
    }
})

module.exports=BlogRoutes
