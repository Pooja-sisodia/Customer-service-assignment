const express = require('express');
const mongoose = require('mongoose');
const route = ('./routes/route')
const app = express();
const PORT = 3000 || process.env.PORT
app.use(express.json())

mongoose.connect("",{
    useNewUrlParser:true
})
.then(()=> console.log("MongoDB is connected"))
.catch((error)=> console.log(error))

app.use('/', route)

app.listen(PORT, ()=>{
    console.log("Server is rumming on Port") 
})