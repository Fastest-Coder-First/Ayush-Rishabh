const express = require('express');
const ejs = require('ejs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fakeTransactions = require('./transaction.js');

dotenv.config();
const app = express();
// To initialize ejs
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render("home");
});

app.get("/dashboard", (req, res) => {
    console.log(fakeTransactions);
    res.render("dashboard",{allTransactions:fakeTransactions.default});
});

app.get("/about", (req, res) => {
    res.render("about");
});
 
// Server is Running on port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
});   