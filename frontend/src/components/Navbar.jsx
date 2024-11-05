import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useState } from "react";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  console.log("Is Authenticated:", isAuthenticated); // Log to check state

  return (
    <nav className="w-full bg-transparent h-20 flex flex-col md:flex-row justify-between items-center px-5 z-50 fixed top-0">
      <h5 className="text-bolder text-white text-2xl font-semibold transition-transform transform hover:scale-105">
        PACE
      </h5>

      {/* Hamburger Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <span className="material-icons">close</span>
          ) : (
            <span className="material-icons">menu</span>
          )}
        </button>
      </div>

      <div className={`flex-grow ${isMenuOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-10 text-white text-xl font-bold opacity-90">
          <li>
            <Link
              to="/"
              className="flex items-center relative group hover:font-extrabold hover:text-indigo-900 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className="flex items-center relative group hover:font-extrabold hover:text-indigo-900 transition-colors duration-300"
            >
              Learning Materials
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center relative group hover:font-extrabold hover:text-indigo-900 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        {!isAuthenticated ? (
          <>
            <Link to="/login">
              <button className="bg-transparent text-blue-500 font-semibold py-1 px-4 rounded border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out shadow-lg transform hover:scale-105">
                Login
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button
                className="bg-gray-600 text-white font-semibold py-1 px-4 rounded hover:bg-red-700 transition duration-300 ease-in-out shadow-lg transform hover:scale-105"
                onClick={logout} // Call logout directly
              >
                Logout
              </button>
            </Link>
            <Link to="/teacher">
              <button className="bg-transparent text-blue-500 font-semibold py-1 px-4 rounded border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out shadow-lg transform hover:scale-105">
                Profile
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
