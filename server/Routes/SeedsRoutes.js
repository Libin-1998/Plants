var express=require('express')
var mongoose=require('mongoose')
const SeedsSchema = require('../Models/SeedsSchema')

var SeedsRoutes=express.Router()

SeedsRoutes.post('/addseed',async(req,res)=>{
    const data={
        name:req.body.name,
        seed:req.body.seed,
        description:req.body.description,
    }
    const add=await SeedsSchema(data).save()
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

SeedsRoutes.get('/viewseed',async(req,res)=>{
    const view=await SeedsSchema.find()
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

SeedsRoutes.get('/singleseed/:id',async(req,res)=>{
    const singleview=SeedsSchema.findOne({_id:req.params.id})
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
})

SeedsRoutes.delete('/deleteseed/:id',async(req,res)=>{
    const deleted=SeedsSchema.deleteOne({_id:req.params.id})
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


SeedsRoutes.put('/updateseed/:id',async(req,res)=>{
    const oldvalue=await SeedsSchema.findOne({_id:req.params.id})
    const edit={
        name:req.body.name?req.body.name:oldvalue.name,
        seed:req.body.seed?req.body.seed:oldvalue.seed,
        description:req.body.description?req.body.description:oldvalue.description,
    }
    const update=await SeedsSchema.updateOne({_id:req.params.id},{$set:edit})
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

module.exports=SeedsRoutes