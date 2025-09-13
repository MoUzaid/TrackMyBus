const express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./Routes/userRoutes');
const driverRoutes = require('./Routes/driverRoutes');
const busRoutes = require('./Routes/busRoutes');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const cookieParser = require('cookie-parser');
const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);
const cors = require('cors');

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", 
    methods: ["GET", "POST"]
  }
});

//Middlewares 
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use('/user', userRoutes);
app.use('/driver', driverRoutes);
app.use('/bus', busRoutes);

// SOCKET.IO
io.on('connection', (socket) => {
  console.log('connected', socket.id);

  socket.on('join_room', (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room ${room}`);
  });

  socket.on('sendInfo', (information) => {
     let { driverName, busId, lat, lng } = information;

  lat = Number(lat);
  lng = Number(lng);

  // Validate
  if (
    !busId || 
    isNaN(lat) || 
    isNaN(lng) || 
    lat < -90 || lat > 90 || 
    lng < -180 || lng > 180
  ) {
    console.log("Invalid payload received:", information);
    return;
  }

    io.to(busId).emit('receiveInfo', { driverName, busId, lat, lng });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const URI = process.env.MONGODB_URI;
mongoose.connect(URI)
  .then(() => console.log('connected'))
  .catch((err) => console.log("MongoDB error:-" + err));
