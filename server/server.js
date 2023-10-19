const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const { Chat, User, Task } = require('./models'); 

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/my-mern-app', { useNewUrlParser: true });

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });


    socket.on('chat message', (message) => {
       
        io.emit('chat message', message);
    });
});


