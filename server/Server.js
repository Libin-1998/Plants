var express=require('express')
var mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv')

const AuthRoutes = require('./Routes/AuthRoutes')
const BlogRoutes = require('./Routes/BlogRoutes')
const PlantRoutes = require('./Routes/PlantRoutes')


var app=express()

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect(process.env.MONGO_URL)
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
    console.log('Running on',process
        .env.PORT
    );
    
})