const mongoose=require('mongoose')
const PlantSchema=new mongoose.Schema({
    name:{type:String,required:true},
    type:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},

})
module.exports=mongoose.model('plants',PlantSchema)