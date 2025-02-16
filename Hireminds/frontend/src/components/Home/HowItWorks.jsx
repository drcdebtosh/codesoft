import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const HowItWorks = () => {
  const navigate = useNavigate();

  const Navigatejob = () => {
    navigate('/job/getall');
  };



  return (
    <>
      <div className="howitworks">
        <div className="container" >
          <h3>How Hireminds Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Sign up effortlessly and unlock endless job opportunities.
              </p>
            </div>
            <div className="card" onClick={Navigatejob}>
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Find your dream job or post openings to hire top talent.
              </p>
            </div>
            <div className="card" onClick={Navigatejob}>
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Apply for jobs with ease or recruit the perfect candidates today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
