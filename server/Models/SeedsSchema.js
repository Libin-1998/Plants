const mongoose=require('mongoose')
const SeedSchema=new mongoose.Schema({
    name:{type:String,required:true},
    seed:{type:String,required:true},
    description:{type:String,required:true},

})
module.exports=mongoose.model('seeds',SeedSchema)