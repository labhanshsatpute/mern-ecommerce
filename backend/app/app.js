require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connection = require('../config/db');
const userRoutes = require('../routes/user');

const app = express();

connection();

app.get('/', (req, res) => {
    return res.status(200).send({
        status: true,
        message: "Hello"
    });
});

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/api/user',userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
});