const express =require('express');
const connectDB=require('./config/db')
const app = express();
connectDB(); 
app.get('/',(req,res)=>res.send('the API is Running'));
const PORT=process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`server started an port ${PORT}`));