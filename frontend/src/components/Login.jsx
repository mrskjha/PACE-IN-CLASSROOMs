import { useState } from "react";
import "../styles/login.css";
import {
  faFacebook,
  faTelegram,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.svg";
import registerImage from "../assets/register.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
    className: "",
    category: "",
  });
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://pace-in-classrooms.onrender.com/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInData),
      });
      const data = await response.json();
      if (data.success) {
        alert("Logged in successfully!");
        login(); // Call login method from context
        navigate("/"); // Redirect to homepage
      } else {
        alert(data.error || "Invalid email or password!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed! Please try again.");
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    
    if (!signUpData.username || !signUpData.email || !signUpData.password || !signUpData.className || !signUpData.category) {
      alert("Please fill out all the required fields.");
      return;
    }
  
    try {
      const response = await fetch("https://pace-in-classrooms.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      });
      const data = await response.json();
      
      if (data.success) {
        alert("Signed up successfully! You can now log in.");
        setIsSignUp(false);
        setSignUpData({ username: "", email: "", password: "", className: "", category: "" }); // Clear sign-up form
      } else {
        alert(data.error || "Sign up failed! Please try again.");
      }
    } catch (error) {
      console.error("Sign Up error:", error);
      alert("Sign Up failed! Please try again.");
    }
  };
  

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className={`container ${isSignUp ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          <form
            onSubmit={handleSignInSubmit}
            className={`sign-in-form ${isSignUp ? "hidden" : ""}`}
          >
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
          <form
            onSubmit={handleSignUpSubmit}
            className={`sign-up-form ${isSignUp ? "" : "hidden"}`}
          >
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
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="text"
                name="className"
                placeholder="Class (e.g. 9th)"
                value={signUpData.className}
                onChange={handleSignUpChange}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
              type="text"
                name="category"
                value={signUpData.category}
                onChange={handleSignUpChange}
                placeholder="Category (e.g. teacher/student)"
                required
              >

              </input>
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
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src={logo} className="image" alt="Logo" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src={registerImage} className="image" alt="Register" />
        </div>
      </div>
    </div>
  );
};

export default Login;
