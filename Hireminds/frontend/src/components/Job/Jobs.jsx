import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();
  useEffect(() => {
    try {
      axios
        .get(`${import.meta.env.VITE_API_URL}/job/getall`, {
          withCredentials: true,
        })
        .then((res) => {
          setJobs(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  if (!isAuthorized) {
    navigateTo("/");
  }

  return (
    <section className="jobs page">
      <div className="container">
        <div className="section-title">
          <h2>All Available Jobs</h2>
          <p>Find the perfect role for you</p>
        </div>
        <div className="grid-container">
          {jobs.jobs &&
            jobs.jobs.map((element) => {
              return (
                <div className="job-card" key={element._id} style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>{element.title}</h4>
                  <p style={{ marginBottom: '0.25rem' }}><strong>Category:</strong> {element.category}</p>
                  <p style={{ marginBottom: '1rem' }}><strong>Location:</strong> {element.country}</p>
                  <Link to={`/job/${element._id}`} className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>View Details</Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
