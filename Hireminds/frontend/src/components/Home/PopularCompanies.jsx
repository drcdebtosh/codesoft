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
    <div className="companies" style={{ backgroundColor: 'var(--bg-body)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Top Companies</h2>
          <p>Work with the best organizations in the world</p>
        </div>
        <div className="grid-container">
          {companies.map((element) => {
            return (
              <div className="company-card" key={element.id}>
                <div className="content" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', width: '100%' }}>
                  <div className="icon-box" style={{ marginBottom: 0 }}>{element.icon}</div>
                  <div className="text" style={{ textAlign: 'left' }}>
                    <p style={{ fontWeight: 'bold', color: 'var(--text-main)', margin: 0 }}>{element.title}</p>
                    <p style={{ fontSize: '0.875rem', margin: 0 }}>{element.location}</p>
                  </div>
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
