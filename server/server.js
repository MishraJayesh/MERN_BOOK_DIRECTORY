const express = require('express');
const cors = require('cors');
const MyBooksApp = express();
const connectToDB = require('./db');
const router = require("./routes/books.route");
const PORT = 8000;

//Database Connecting
connectToDB();
MyBooksApp.use(cors());
//Allowing JSON Objects
MyBooksApp.use(express.json());

MyBooksApp.use("/books", router);

MyBooksApp.listen(PORT, console.log("Server Is Running On Port",PORT));