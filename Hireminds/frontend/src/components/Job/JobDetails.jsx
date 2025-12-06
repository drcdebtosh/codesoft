import React, { useContext, useEffect, useState } from "react";
import Spinner from "../Shared/Spinner";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);
  const navigateTo = useNavigate();

  const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/job/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJob(res.data.job);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        navigateTo("/notfound");
      });
  }, []);



  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="job-details-page page">
      <div className="container">
        <div className="card job-details-card">
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

          <div className="job-description">
            <h4>Job Description</h4>
            <p>{job.description}</p>
          </div>

          {user && user.role === "Employer" ? (
            <></>
          ) : (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              {isAuthorized ? (
                <Link to={`/application/${job._id}`} className="btn btn-primary">Apply Now</Link>
              ) : (
                <Link to="/login" className="btn btn-primary">Login to Apply</Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
