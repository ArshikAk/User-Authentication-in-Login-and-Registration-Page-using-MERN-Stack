const mongoose = require("mongoose")

let EmployeeSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
    },
    password : {
        type : String,
    }
})

const EmployeeModel = mongoose.model("loginCredentials",EmployeeSchema);

module.exports = EmployeeModel