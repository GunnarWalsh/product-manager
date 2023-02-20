const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')
const socket = require('socket.io')
const Product = require('./models/product')
require("./config/mongoose.config");

app.use(cors())

app.use(express.json(), express.urlencoded({ extended: true }));

const productRoutes = require("./routes/product.routes");
productRoutes(app);


const server = app.listen(port, () => console.log(`Listening on port: ${port}`) );

const io = socket(server, {
    cors:{
        origin:"*",
        methods:['GET','POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
})

io.on("connection", socket => {
    console.log('new user:'+ socket.id)
    socket.on('deleteProduct', (payload) => {
        console.log('payload:' , payload)
        Product.deleteOne({_id: payload})
        .then((res) => {
            io.emit('productDeleted', payload)
        })
        .catch((err) => {
            console.log(err)
        })
    })
    socket.on("disconnect", socket => {
        console.log('disconnected user with id:' + socket.id)
    })
})