import "../styles/login.css";
import { faFacebook, faTelegram, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import logo from '../assets/logo.svg';
import registerImage from '../assets/register.svg';


const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

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
                        <form action="#" className={`sign-in-form ${isSignUp ? 'hidden' : ''}`}>
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" value="Login" className="btn solid" />
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f" icon={faFacebook}></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-telegram" icon={faTelegram}></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google" icon={faGoogle}></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in" icon={faLinkedinIn}></i>
                                </a>
                            </div>
                        </form>
                        <form action="#" className={`sign-up-form ${isSignUp ? '' : 'hidden'}`}>
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" className="btn" value="Sign up" />
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-telegram"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
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
                        <img src={logo} className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
                            <button className="btn transparent" onClick={handleSignInClick}>
                                Sign in
                            </button>
                        </div>
                         <img src={registerImage} className="image" alt="" /> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
