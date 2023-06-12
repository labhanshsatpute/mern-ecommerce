require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connection = require('../config/db');
const userRoutes = require('../routes/user');
const adminRoutes = require('../routes/admin');
const app = express();

connection();

app.get('/', (req, res) => {
    return res.status(200).send({
        status: true,
        message: "Hello from serve"
    });
});

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/storage', express.static('storage'));
app.use('/api/user',userRoutes);
app.use('/api/admin',adminRoutes);

const port = process.env.APP_PORT || 8000;

app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
});