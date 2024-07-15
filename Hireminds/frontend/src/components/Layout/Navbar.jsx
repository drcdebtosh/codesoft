import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  // const handleLogout = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8000/api/v1/user/logout",
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     toast.success(response.data.message);
  //     setIsAuthorized(false);
  //     navigateTo("/login");
  //   } catch (error) {
  //     toast.error(error.response.data.message), setIsAuthorized(true);
  //   }
  // };
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://hiremindsapi.onrender.com/user/logout",
        {}, // No data needed for logout (optional)
        { withCredentials: true } // Include credentials for cookie-based authentication
      );
  
      toast.success(response.data.message); // Display success message
      setIsAuthorized(false); // Update authorization state
      navigateTo("/login"); // Redirect to login page
    } catch (error) {
      console.error("Logout error:", error); // Log the error for debugging
      toast.error("Logout failed. Please try again."); // Display user-friendly error message
      // Optionally: You can redirect to login here as well, but consider keeping the user on the current page for potential retries.
    }
  };


  const handleLogoClick = () => {
    navigateTo('/');
  };

  

  return (
    <nav className={isAuthorized ? "navbarShow" : "navbarHide"}>
      <div className="container">
        <div className="logo">
          <img src="/Hire-Minds-white-bg.png" alt="Logo"onClick={handleLogoClick}
      style={{ cursor: 'pointer' }} />
        </div>
        <ul className={!show ? "menu" : "show-menu menu"}>
          <li>
            <Link to={"/"} onClick={() => setShow(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link to={"/job/getall"} onClick={() => setShow(false)}>
              ALL JOBS
            </Link>
          </li>
          <li>
            <Link to={"/applications/me"} onClick={() => setShow(false)}>
              {user && user.role === "Employer"
                ? "APPLICANT'S APPLICATIONS"
                : "MY APPLICATIONS"}
            </Link>
          </li>
          {user && user.role === "Employer" ? (
            <>
              <li>
                <Link to={"/job/post"} onClick={() => setShow(false)}>
                  POST NEW JOB
                </Link>
              </li>
              <li>
                <Link to={"/job/me"} onClick={() => setShow(false)}>
                  VIEW YOUR JOBS
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}

          <button onClick={handleLogout}>LOGOUT</button>
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;