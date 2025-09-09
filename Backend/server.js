const express=require('express');
const app=express();
const mongoose=require('mongoose');
const userRoutes=require('./Routes/userRoutes');
const driverRoutes=require('./Routes/driverRoutes');
const busRoutes=require('./Routes/busRoutes');
require('dotenv').config();
const PORT=process.env.PORT||5000;
const cookieParser = require('cookie-parser');
const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", 
    methods: ["GET", "POST"]
  }
});

app.use(cookieParser());
app.use(express.json());
app.use('/user',userRoutes);
app.use('/driver', driverRoutes);
app.use('/bus',busRoutes);





app.listen(PORT,()=>{
    console.log('Server is listening on port 5000');
})

const URI=process.env.MONGODB_URI;
mongoose.connect(URI)
.then(()=>console.log('connected'))
.catch((err)=>console.log("MongoDB error:-"+err))