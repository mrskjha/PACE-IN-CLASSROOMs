import React, { useState } from "react";
import "../styles/login.css";
import { faFacebook, faTelegram, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.svg';
import registerImage from '../assets/register.svg';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    // State to handle form inputs
    const [signInData, setSignInData] = useState({ email: '', password: '' });
    const [signUpData, setSignUpData] = useState({ username: '', email: '', password: '' });

    // Handle input changes
    const handleSignInChange = (e) => {
        setSignInData({ ...signInData, [e.target.name]: e.target.value });
    };

    const handleSignUpChange = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    };

    // Handle form submissions
    const handleSignInSubmit = async (e) => {
        e.preventDefault();
        console.log('Sign In Data:', signInData);

        // Fetch request for sign in
        try {
            const response = await fetch("http://localhost:5000/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signInData),
            });
            const data = await response.json();
            console.log("Login API Response:", data);
            alert("Logged in successfully!");
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed!");
        }
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        console.log('Sign Up Data:', signUpData);

        // Fetch request for sign up
        try {
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signUpData),
            });
            const data = await response.json();
            console.log("Sign Up API Response:", data);
            alert("Signed up successfully!");
            
        } catch (error) {
            console.error("Sign Up error:", error);
            alert("Sign Up failed!");
        }
    };

    // Toggling between Sign Up and Sign In
    const handleSignUpClick = () => {
        setIsSignUp(true);
    };

    const handleSignInClick = () => {
        setIsSignUp(false);
    };

    return (
        <div>
            <div className={`container ${isSignUp ? 'sign-up-mode' : ''}`}>
                <div className="forms-container">
                    <div className="signin-signup">
                        {/* Sign In Form */}
                        <form onSubmit={handleSignInSubmit} className={`sign-in-form ${isSignUp ? 'hidden' : ''}`}>
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={signInData.email}
                                    onChange={handleSignInChange}
                                    required
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={signInData.password}
                                    onChange={handleSignInChange}
                                    required
                                />
                            </div>
                            <input type="submit" value="Login" className="btn solid" />
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="#" className="social-icon">
                                    <FontAwesomeIcon icon={faTelegram} />
                                </a>
                                <a href="#" className="social-icon">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </a>
                                <a href="#" className="social-icon">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </form>

                        {/* Sign Up Form */}
                        <form onSubmit={handleSignUpSubmit} className={`sign-up-form ${isSignUp ? '' : 'hidden'}`}>
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={signUpData.username}
                                    onChange={handleSignUpChange}
                                    required
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={signUpData.email}
                                    onChange={handleSignUpChange}
                                    required
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={signUpData.password}
                                    onChange={handleSignUpChange}
                                    required
                                />
                            </div>
                            <input type="submit" className="btn" value="Sign up" />
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="#" className="social-icon">
                                    <FontAwesomeIcon icon={faTelegram} />
                                </a>
                                <a href="#" className="social-icon">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </a>
                                <a href="#" className="social-icon">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here?</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
                            <button className="btn transparent" onClick={handleSignUpClick}>
                                Sign up
                            </button>
                        </div>
                        <img src={logo} className="image" alt="Logo" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
                            <button className="btn transparent" onClick={handleSignInClick}>
                                Sign in
                            </button>
                        </div>
                        <img src={registerImage} className="image" alt="Register" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
