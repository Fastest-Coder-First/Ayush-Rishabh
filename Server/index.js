const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const FinanceModel = require('./models/Finance')


const app = express()
app.use(cors())

//to convert data in json which is comes from fontend
app.use(express.json())

const DB = "mongodb+srv://rishabh23:SZur5oCQ4F3rkryq@cluster0.srgmgf5.mongodb.net/?retryWrites=true&w=majority"

/**!SECTION 
    financeDB
 */

//connection to mongoDB
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true , useUnifiedTopology: true})
    .then(() => console.log("Connected to atlas"))
    .catch(err => console.error("MongoDB connection error:", err));

//get method
app.get('/', (req, res) => {
    TaskModel.find({})
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
})

app.get('/getData/:id', (req, res) => {
    const id = req.params.id;
    FinanceModel.findById({ _id: id})
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
})

//put method
app.put('/updateData/:id', (req, res) => {
    const id = req.params.id;
    FinanceModel.findByIdAndUpdate({ _id: id }, { amount: req.body.title, date: req.body.data ,description: req.body.description, sender: req.body.sender, recipient: req.body.recipient, paymentMethod: req.body.paymentMethod })
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
})

//post method
app.post("/createData", (req, res) => {
    FinanceModel.create(req.body)
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
})

//delete method
app.delete('/deleteData/:id', (req, res) => {
    const id = req.params.id;
    FinanceModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
})

app.listen(3000, () => {
    console.log("server is running");
})