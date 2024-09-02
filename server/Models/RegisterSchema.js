var mongoose=require('mongoose')
var RegisterSchema=new mongoose.Schema({
    loginId:{type:mongoose.Types.ObjectId,ref:'login'},
    name:{type:String,required:true},
    phone:{type:String,required:true},

})
module.exports=mongoose.model('register',RegisterSchema)