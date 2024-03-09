import React from "react";
import { Link } from "react-router-dom";

function Register(){

    return (
        <center>
        <div className="content">
                <div className="Register">
                    <h2>REGISTRATION PAGE</h2>
                    <form  id="form">
                        <label>Name:</label>
                        <br />
                        <input id="name" type="text" placeholder="Name" />
                        <br />
                        <span id="nameError" className="message">Name should be atleast 3 letters</span>
                        <br />
                        <label>Email:</label>
                        <br />
                        <input id="email" type="text" placeholder="Email Id" />
                       <br />
                        <span id="emailError" className="message">Email shoud be a valid email</span>
                        <br />
                        <label>Password:</label>
                      <br />
                        <input id="password" type="password" placeholder="Password" />
                        <br />
                        <span id="passwordError" className="message">Password length should be minimum 8</span>
                        <br />
                        <label>Confirm Password:</label>
                        <br />
                        <input id="confirmPassword" type="password" placeholder="Confirm Password" />
                        <br />
                        <span id="confirmPasswordError" className="message">Password does'nt match</span>
                        <br />
                        <p>Already a Member
                            <Link to="/" id="link">Login</Link>
                        </p>
                        <button type="submit">Register</button>
                       <br />
                    </form>
                </div>
        </div>
    </center>
    )
}

export default Register;