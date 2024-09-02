var express=require('express')
var mongoose=require('mongoose')
const multer=require('multer')
const PlantSchema = require('../Models/PlantSchema')
const auth = require('../Middleware/auth')


var PlantRoutes=express.Router()

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../client/public/images/')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    },
})
const upload=multer({storage})

PlantRoutes.post('/plantadd',auth,upload.single('image'),auth,async(req,res)=>{
    
    const add={
        name:req.body.name,
        type:req.body.type,
        description:req.body.description,
        image:req.file.filename,
    }
    const datas=await PlantSchema(add).save()
    console.log(datas);
    
    if(add){
        return res.status(201).json({
            success:true,
            error:false,
            message:'successfully added',
            data:datas,
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'error to add'
        })
    }
})


PlantRoutes.get('/viewplant',auth,async(req,res)=>{
    const view=await PlantSchema.find()
    if(view){
        return res.status(200).json({
            success:true,
            error:false,
            message:'view successfully',
            data:view,
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'error to add'
        })
    }
})

PlantRoutes.get('/singleplant/:id',async(req,res)=>{
    try {
    const singleview = await PlantSchema.findOne({_id:req.params.id})
    if(singleview){
        return res.status(200).json({
            success:true,
            error:false,
            message:'view single successfully',
            data:singleview,
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

PlantRoutes.delete('/deleteplant/:id',async(req,res)=>{
    const deleted = await PlantSchema.deleteOne({_id:req.params.id})
    if(deleted){
        return res.status(200).json({
            success:true,
            error:false,
            message:'delete successfully',
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

PlantRoutes.put('/updateplant/:id',upload.single('image'),auth,async(req,res)=>{
    const olddata=await PlantSchema.findOne({_id:req.params.id})
    const edit={
        name:req.body.name?req.body.name:olddata.name,
        type:req.body.type?req.body.type:olddata.type,
        description:req.body.description?req.body.description:olddata.description,
        image:req.file?req.file.filename:olddata.image,
    }
    const updated=await PlantSchema.updateOne({_id:req.params.id},{$set:edit})
    if(updated){
        return res.status(200).json({
            success:true,
            error:false,
            message:'update successfully',
            data:updated,
            updateStatus:edit,
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

module.exports=PlantRoutes