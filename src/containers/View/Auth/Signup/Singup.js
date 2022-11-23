import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
export default function SignUp(props) {
    return (
        <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
            <div className="Auth-form px-5">
                <h3 className="fw-bold text-center">Sign Up</h3>
                <div className="form-group mt-4">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                    />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <p className="forgot-password text-right mt-1">
                    Forgot <a href="#">password?</a>
                </p>
                
                <div className="d-flex justify-content-between">
                    <span className="forgot-password text-right ">
                        Already account?
                    </span>
                    <span className="text-primary">
                        <Link to={'/'}>Sign In</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}