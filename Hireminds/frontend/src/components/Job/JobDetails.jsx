import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();

  const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/job/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJob(res.data.job);
      })
      .catch((error) => {
        navigateTo("/notfound");
      });
  }, []);

  if (!isAuthorized) {
    navigateTo("/login");
  }

  return (
    <section className="job-details-page page">
      <div className="container">
        <div className="card">
          <div className="job-header">
            <h2>{job.title}</h2>
            <div className="job-meta">
              <span>{job.category}</span>
              <span>•</span>
              <span>{job.country}, {job.city}</span>
              <span>•</span>
              <span>Posted on: {job.jobPostedOn}</span>
            </div>
          </div>

          <div className="job-info-grid">
            <div className="info-item">
              <span>Location</span>
              <strong>{job.location}</strong>
            </div>
            <div className="info-item">
              <span>Salary</span>
              <strong>
                {job.fixedSalary ? (
                  <span>{job.fixedSalary}</span>
                ) : (
                  <span>
                    {job.salaryFrom} - {job.salaryTo}
                  </span>
                )}
              </strong>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '1rem' }}>Job Description</h4>
            <p style={{ color: 'var(--text-main)', whiteSpace: 'pre-wrap' }}>{job.description}</p>
          </div>

          {user && user.role === "Employer" ? (
            <></>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <Link to={`/application/${job._id}`} className="btn btn-primary">Apply Now</Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
