import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/registration.css"
import axios from "axios"

function Register(){

    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [cpassword,setCPassword] = useState()
    const navigate = useNavigate()


    const SubmitHandler = () =>{
        event.preventDefault();

        document.getElementById("nameError").style.display = "none";
        document.getElementById("emailError").style.display = "none";
        document.getElementById("passwordError").style.display = "none";
        document.getElementById("confirmPasswordError").style.display = "none";
        document.getElementById("userError").style.display = "none";


        if(!name)
        {
            document.getElementById("nameError").style.display = "block";
            return false
        }

        if(!email)
        {
            document.getElementById("emailError").style.display = "block";
            return false
        }

        if(!password)
        {
            document.getElementById("passwordError").style.display = "block";
            return false
        }

        if(!(password===cpassword))
        {
            document.getElementById("confirmPasswordError").style.display = "block";
            return false
        } 

        axios.post("http://127.0.0.1:5173/register",{name,email,password})
        .then(result =>{
            if(result.data === "existed")
            {
                document.getElementById("userError").style.display = "block"
            }
            else{
                navigate("/",{replace:true})
            }
        }
        )
        .catch(err => {
            console.log(err)
        })
    }

    return (
            <center>
            <div className="content" >
                <div className="Register">
                    <h2>REGISTRATION PAGE</h2>
                    <form  id="form" onSubmit={SubmitHandler}>
                        <label>Name:</label>
                        <br />
                        <input id="name" type="text" placeholder="Name" onChange={(e) => {setName(e.target.value)}}/>
                        <br />
                        <span id="nameError" className="message">Name should be atleast 3 letters</span>
                        <br />
                        <label>Email:</label>
                        <br />
                        <input id="email" type="text" placeholder="Email Id" onChange={(e) => {setEmail(e.target.value)}}/>
                       <br />
                        <span id="emailError" className="message">Email shoud be a valid email</span>
                        <br />
                        <label>Password:</label>
                      <br />
                        <input id="password" type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                        <br />
                        <span id="passwordError" className="message">Password length should be minimum 8</span>
                        <br />
                        <label>Confirm Password:</label>
                        <br />
                        <input id="confirmPassword" type="password" placeholder="Confirm Password" onChange={(e) => {setCPassword(e.target.value)}}/>
                        <br />
                        <span id="confirmPasswordError" className="message">Password doesnt match</span>
                        <br />
                        <p>Already a Member
                            <Link to="/" id="link">Login</Link>
                        </p>
                        <span id="userError" className="message">User Already Exists</span>
                        <button type="submit">Register</button>
                       <br />
                    </form>
                </div>
        </div>
    </center>
    )
}

export default Register;