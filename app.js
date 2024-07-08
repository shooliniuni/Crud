require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("./db/conn");
const users = require("./models/userSchema");
const cors = require('cors');
const router = require('./routes/router');

const port = 8003;


app.use(cors());
app.use(express.json());

// Routes
app.use(router);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
