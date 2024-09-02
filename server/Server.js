var express=require('express')
var mongoose=require('mongoose')
const cors=require('cors')
const AuthRoutes = require('./Routes/AuthRoutes')
const BlogRoutes = require('./Routes/BlogRoutes')
const PlantRoutes = require('./Routes/PlantRoutes')


var app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect('mongodb+srv://libinninteen98:EhF3Fs510HyhC9cd@cluster0.4e1hgmr.mongodb.net/plants?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('database connected');
    
})
.catch(()=>{
    console.log('not connected');
    
})

app.use('/api/auths',AuthRoutes)
app.use('/api/blogs',BlogRoutes)
app.use('/api/plants',PlantRoutes)


app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('something broke!')
})

app.get('/',(req,res)=>{
    res.send('server is on')
})


app.listen(1001,()=>{
    console.log('Running on',1001);
    
})