import React, { createRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useForm } from "react-hook-form";

export default  function SignIn(props) {
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    const username = createRef();
    const password = createRef();
    const navigate = useNavigate();

    const { register, handleSubmit,
        formState: { errors }
    } = useForm();
    const signIn = (data) => {
        console.log('Data', data);
        navigate("/home/redux")
    }
    return (
        <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
            <div className="Auth-form px-5">
                <h3 className="fw-bold text-center">Sign In</h3>
                <div className="form-group mt-4">
                    <label>Email address</label>
                    <input ref={username}
                        type="email"
                        {...register("username",{required: true})}
                        className="form-control mt-1"
                        placeholder="Enter email"
                    />
                </div>
                {errors.username && <p className="text-danger">Username is required</p>}
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input ref={password} 
                        type="password"
                        {...register("password",{required: true})}
                        className="form-control mt-1"
                        placeholder="Enter password"
                    />
                </div>
                {errors.password && <p className="text-danger">Password is required</p>}
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary"
                        onClick={handleSubmit(signIn)}
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