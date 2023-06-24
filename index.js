const express = require('express');
const ejs = require('ejs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fakeTransactions = require('./transaction.js');

dotenv.config();
const app = express();

const userArray=[];
// To initialize ejs
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static("public"));

// Database Connection:
mongoose.connect("mongodb+srv://ayush002jha:fldQu5TkJQXNaX1L@cluster0.qaiw30b.mongodb.net/financeDB?retryWrites=true&w=majority");

 
// Schema for User
const { Decimal128 } = require('mongodb')


const FinanceSchema = mongoose.Schema({
    currency: String,
    amount: Decimal128,
    date: String,
    description: String,
    sender: String,
    recipient: String,
    paymentMethod: String
})

const FinanceData = mongoose.model("FinanceData", FinanceSchema)


app.get('/', (req, res) => {
    res.render("home");
});

app.get("/dashboard", async (req, res) => {
    const initialBalance = 10000000;
    const data = await FinanceData.find({});
    const totalExpense = await FinanceData.aggregate([
        {
          $group: {
            _id: null,
            totalAmount: { $sum: '$amount' }
          }
        }
      ]);
    const totalExpenditure = totalExpense[0].totalAmount;
    res.render("dashboard",{allTransactions:data,totalExpenditure:totalExpenditure, initialBalance:initialBalance, totalExpenditure:totalExpenditure, currentBalance:initialBalance-totalExpenditure});

});

app.get("/about", (req, res) => {
    res.render("about");
});
 
app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/signup",(req,res)=>{
    res.render("signup");
});

app.post("/add",(req,res)=>{
    console.log(req.body);
    const newTransaction = FinanceData({
        "currency": req.body.currency,
        "amount": Number(req.body.amount),
        "date": req.body.date,
        "description": req.body.desc,
        "sender": req.body.send,
        "recipient": req.body.recieve,
        "paymentMethod": req.body.payment
    });

    newTransaction.save();
    res.redirect("/dashboard");
 
})

app.post("/delete",async (req,res)=>{
    console.log(req.body);
    await FinanceData.deleteOne({_id:req.body.deleteID})
    res.redirect("/dashboard");
});


// Server is Running on port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
});   