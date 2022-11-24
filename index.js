const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const routes = require("./routes/route")
const app = express()

app.use(bodyParser.json());    
app.use(bodyParser.urlencoded({
    extended: true
}));


//Connect to mongoDB
mongoose.connect("mongodb://localhost:27017/crudDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//
const { Employee } = require("./models/model")

app.use("/",routes);


app.listen(3000, () => {
    console.log("Server started on 3000");
})