import React, { useContext } from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../../main";

const HeroSection = () => {
  const { isAuthorized } = useContext(Context);
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Find a job that suits <br /> your interests and skills</h1>
            <p>
              Discover exciting career opportunities tailored to your expertise and passions.
              Connect with top employers and take the next step in your professional journey today!
            </p>
            <div className="hero-btns">
              <Link to={isAuthorized ? "/job/getall" : "/login"} className="btn btn-primary">Find Jobs</Link>
              <Link to={isAuthorized ? "/job/post" : "/login"} className="btn btn-outline">Post a Job</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>

        <div className="grid-container" style={{ marginTop: '4rem' }}>
          {details.map((element) => {
            return (
              <div className="card" key={element.id} style={{ flexDirection: 'row', alignItems: 'center', gap: '1.5rem', textAlign: 'left' }}>
                <div className="icon-box">{element.icon}</div>
                <div className="content">
                  <p style={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>{element.title}</p>
                  <p style={{ margin: 0 }}>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
