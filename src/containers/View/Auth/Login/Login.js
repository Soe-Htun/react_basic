import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default  function SignIn(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const signIn = () => {
        console.log('User', username);
        console.log('ENV', process.env.REACT_APP_BASE_URL);
        navigate("/home/redux")
    }
    return (
        <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
            <div className="Auth-form px-5">
                <h3 className="fw-bold text-center">Sign In</h3>
                <div className="form-group mt-4">
                    <label>Email address</label>
                    <input value={username} onChange= { e => setUsername(e.target.value)}
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input value={password} onChange= { e=> setPassword(e.target.value)}
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                    />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary"
                        onClick={signIn}
                    >
                        Submit
                    </button>
                </div>
                <p className="forgot-password text-right mt-1">
                    Forgot <a href="#">password?</a>
                </p>
                
                <div className="d-flex justify-content-between">
                    <span className="forgot-password text-right ">
                        Do you have account?
                    </span>
                    <span className="text-primary">
                        <Link to={'/signUp'}>Sign Up</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}