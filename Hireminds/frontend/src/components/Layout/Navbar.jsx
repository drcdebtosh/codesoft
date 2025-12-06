import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/logout`,
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true);
    }
  };

  return (
    <nav className={isAuthorized ? "navbarShow" : "navbarHide"}>
      <div className="container">
        <div className="logo">
          Hire<span>Minds</span>
        </div>
        <ul className={!show ? "nav-links" : "show-menu nav-links"}>
          <li>
            <Link to={"/"} onClick={() => setShow(false)}>
              HOME
            </Link>
          </li>
          {isAuthorized ? (
            <>
              <li>
                <Link to={"/job/getall"} onClick={() => setShow(false)}>
                  JOBS
                </Link>
              </li>
              <li>
                <Link to={"/applications/me"} onClick={() => setShow(false)}>
                  {user && user.role === "Employer"
                    ? "APPLICANTS"
                    : "APPLICATIONS"}
                </Link>
              </li>
              {user && user.role === "Employer" ? (
                <>
                  <li>
                    <Link to={"/job/post"} onClick={() => setShow(false)}>
                      POST JOB
                    </Link>
                  </li>
                  <li>
                    <Link to={"/job/me"} onClick={() => setShow(false)}>
                      MY JOBS
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )}
              <li>
                <Link to={"/profile"} onClick={() => setShow(false)}>
                  PROFILE
                </Link>
              </li>
              <button className="btn btn-outline" onClick={handleLogout}>LOGOUT</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline" onClick={() => navigateTo('/login')}>LOGIN</button>
              <button className="btn btn-primary" onClick={() => navigateTo('/register')}>REGISTER</button>
            </>
          )}
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
