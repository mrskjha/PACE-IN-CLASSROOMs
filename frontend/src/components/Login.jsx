import React, { useState } from "react";
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

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  // State to handle form inputs and errors
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // For displaying errors
  const [loading, setLoading] = useState(false); // Loading state

  // Handle input changes
  const handleSignInChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  // Basic email validation
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Handle form submissions
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error

    // Validate email and password
    if (!isValidEmail(signInData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (signInData.password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }

    setLoading(true); // Set loading to true while waiting for API response
    try {
      const response = await fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInData),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password.");
      }

      const data = await response.json();
      console.log("Login API Response:", data);
      alert("Logged in successfully!");
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error

    // Validate email and password
    if (!isValidEmail(signUpData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (signUpData.password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }

    setLoading(true); // Set loading to true while waiting for API response
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      });

      if (!response.ok) {
        throw new Error("Error signing up. Please try again.");
      }

      const data = await response.json();
      console.log("Sign Up API Response:", data);
      alert("Signed up successfully!");
    } catch (error) {
      console.error("Sign Up error:", error);
      setError(error.message || "Sign Up failed!");
    } finally {
      setLoading(false);
    }
  };

  // Toggling between Sign Up and Sign In
  const handleSignUpClick = () => {
    setError(""); // Clear any previous error
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setError(""); // Clear any previous error
    setIsSignUp(false);
  };

  return (
    <div>
      <div className={`container ${isSignUp ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            {/* Sign In Form */}
            <form
              onSubmit={handleSignInSubmit}
              className={`sign-in-form ${isSignUp ? "hidden" : ""}`}
            >
              <h2 className="title">Sign in</h2>
              {error && <p className="error-message">{error}</p>}{" "}
              {/* Error Message */}
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
              <input
                type="submit"
                value="Login"
                className="btn solid"
                disabled={loading}
              />
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
              {error && <p className="error-message">{error}</p>}{" "}
              {/* Error Message */}
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
              <input
                type="submit"
                className="btn"
                value="Sign up"
                disabled={loading}
              />
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
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
    </div>
  );
};

export default Login;
