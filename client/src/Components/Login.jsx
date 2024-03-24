import { Link } from "react-router-dom";
import "../Styles/login.css"

function Login() {
    return (
        <center>
            <div className="content">
                <div className="Login">
                    <h2>LOGIN PAGE</h2>
                    <form >
                        <label>Email:</label>
                        <br />
                        <input id="email" type="text" placeholder="Email Id" />
                        <br />
                        <span id="emailError" className="message"></span>
                        <br />
                        <label>Password:</label>
                        <br />
                        <input id="password" type="password" placeholder="Password" />
                        <br />
                        <span id="passwordError" className="message"></span>
                        <br />
                        <p>Not a Member  
                            <Link to="/register" id="link">Sign Up?</Link>
                        </p>
                        <button type="submit">Log In</button>
                        <br />
                    </form>
                </div>
        </div>
        </center>
    )
}

export default Login;