import './login.css';
import { Link } from "react-router-dom";
import { useContext, useRef, useState } from 'react';
import { Context } from '../../context/Context';
import { axiosInstance } from '../../config';
const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const [success, setSuccess] = useState(false);
    const {dispatch,isFetching} = useContext(Context)
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axiosInstance.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
            setSuccess(true);
        }
        
    };
    
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label >Email</label>
                <input type="text" className="loginInput" placeholder="Enter your email..." ref={userRef} />
                <label >Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password..." ref={passwordRef} />
                <button className="loginBtn" type="submit" disabled={isFetching}>Login</button>
                {success && (
                        <span
                            style={{ color: "red", textAlign: "center", marginTop: "20px" }}
                        >
                            Please login correctly
                        </span>
                    )}
            </form>
           
            <button className="registerBtn"><Link className="link" to = "/register">Register</Link></button>

        </div>
    );
}

export default Login;
