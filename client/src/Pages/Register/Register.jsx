import './register.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { axiosInstance } from '../../config';
const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("false");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
       
            const res = await axiosInstance.post("/auth/register", { username, email, password });
            res.data && window.location.replace("/login");

        } catch (error) {
            setError(true);
        }
    };

    return (

        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label >Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username..." onChange={e => setUsername(e.target.value)} />
                <label >Email</label>
                <input type="email" className="registerInput" placeholder="Enter your email..." onChange={e => setEmail(e.target.value)} />
                <label >Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password..." onChange={e => setPassword(e.target.value)} />
                <button className="RegisterBtn" type="submit">Register </button>
                {error && <span style={{ color: "red",marginTop:"10px"}}>Something went wrong</span>}
            </form>
            <button className="LoginBtn"><Link className="link" to="/login">Login</Link></button>
            
        </div>
    );
}

export default Register;