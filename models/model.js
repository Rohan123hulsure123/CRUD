const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema ({
    UID:String,
    firstName: String,
    lastName: String,
    number: String,
});

exports.Employee = new mongoose.model("Employee", employeeSchema);