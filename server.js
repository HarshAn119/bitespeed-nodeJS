const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

const port = process.env.PORT || 8080;

app.use('/identify', contactRoutes);

app.listen(port, console.log(`Server is running at ${port}`));
