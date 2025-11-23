import React, { useContext } from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { Context } from "../../main";

const HowItWorks = () => {
  const navigate = useNavigate();
  const { isAuthorized } = useContext(Context);

  const Navigatejob = () => {
    if (isAuthorized) {
      navigate('/job/getall');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="howitworks" style={{ backgroundColor: 'var(--bg-body)' }}>
      <div className="container">
        <div className="section-title">
          <h2>How Hireminds Works</h2>
          <p>Simple steps to get started with your career journey</p>
        </div>
        <div className="grid-container">
          <div className="card">
            <div className="icon-box">
              <FaUserPlus />
            </div>
            <h4>Create Account</h4>
            <p>
              Sign up effortlessly and unlock endless job opportunities tailored to your profile.
            </p>
          </div>
          <div className="card" onClick={Navigatejob} style={{ cursor: 'pointer' }}>
            <div className="icon-box">
              <MdFindInPage />
            </div>
            <h4>Find or Post Jobs</h4>
            <p>
              Browse thousands of job listings or post your own openings to find top talent.
            </p>
          </div>
          <div className="card" onClick={Navigatejob} style={{ cursor: 'pointer' }}>
            <div className="icon-box">
              <IoMdSend />
            </div>
            <h4>Apply or Recruit</h4>
            <p>
              Apply for jobs with a single click or manage applications to recruit the best candidates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
