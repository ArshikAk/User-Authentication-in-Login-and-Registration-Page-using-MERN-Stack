const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")

mongoose.connect("mongodb://127.0.0.1:27017/userAuth")

const EmployeeModel = require("./Employee")


app.use(cors({origin: true, credentials: true}))
app.use(express.json())

app.post("/",(req,res) =>{
    const {email,password} = req.body

    EmployeeModel.findOne()
    .then(user => {
        if(user.email === email)
        {
                if(user.password === password)
                {
                    res.json("accepted")
                }
                else
                {
                    flag = 1
                    res.json("incorrect")
                }
        }
        else{
                res.json("notExisted")
        }
    })
    .catch(err => console.log(err))
})

app.post("/register",(req,res) =>{
    const {name,email,password} = req.body

    EmployeeModel.findOne({email : email})
        .then(user => {
            console.log(user)
            if(user)
            {
                const error = new Error("User Already Existed")
                throw error
            }
            else
            {
                EmployeeModel.create(req.body)
                    .then(employee => res.json(employee))
                    .catch(err => console.log(err))
            }
        })
        .catch(err => res.json("existed"))
})

app.listen(5173,() => {
    console.log("Server is running on port 5173")
})