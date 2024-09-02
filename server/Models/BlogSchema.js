var mongoose=require('mongoose')
var BlogSchema=new mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    by:{type:String,required:true},
    timestamp:{type:String,required:true},
    image:{type:String,required:true},

})
module.exports=mongoose.model('blogs',BlogSchema)