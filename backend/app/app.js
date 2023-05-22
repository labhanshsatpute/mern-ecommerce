require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connection = require('../config/db');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
});