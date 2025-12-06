import React from "react";
import { FaMicrosoft, FaApple, FaAmazon, FaFacebook } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Bangalore",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Facebook",
      location: "Mumbai",
      openPositions: 5,
      icon: <FaFacebook />,
    },
    {
      id: 3,
      title: "Amazon",
      location: "Delhi",
      openPositions: 20,
      icon: <FaAmazon />,
    },
  ];
  return (
    <div className="companies" style={{ backgroundColor: 'transparent', padding: '4rem 0' }}>
      <div className="container">
        <div className="section-title">
          <h2>Top Companies</h2>
          <p>Work with the best organizations in the world</p>
        </div>
        <div className="grid-container">
          {companies.map((element) => {
            return (
              <div className="company-card" key={element.id}>
                <div className="icon-box">{element.icon}</div>
                <div className="text" style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontWeight: 'bold', color: 'var(--text-main)', fontSize: '1.25rem', marginBottom: '0.25rem' }}>{element.title}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{element.location}</p>
                </div>
                <button className="btn btn-outline" style={{ width: '100%' }}>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
