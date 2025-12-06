import React, { useContext, useEffect, useState } from "react";
import Spinner from "../Shared/Spinner";
import JobCard from "../Shared/JobCard";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();
        if (searchTerm) queryParams.append("keyword", searchTerm);
        if (category) queryParams.append("category", category);
        if (location) queryParams.append("location", location); // Backend uses 'location' or 'country'/'city'. Controller checks all.

        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/job/getall?${queryParams.toString()}`,
          {
            withCredentials: true,
          }
        );
        setJobs(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, [searchTerm, category, location]);

  if (!isAuthorized) {
    navigateTo("/");
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="jobs page">
      <div className="container">
        <div className="section-title">
          <h2>All Available Jobs</h2>
          <p>Find the perfect role for you</p>
        </div>

        <div className="search-bar" style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Search by Title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
            style={{ flex: 1, minWidth: '200px' }}
          />
          <input
            type="text"
            placeholder="Filter by Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control"
            style={{ flex: 1, minWidth: '200px' }}
          />
          <input
            type="text"
            placeholder="Filter by Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-control"
            style={{ flex: 1, minWidth: '200px' }}
          />
        </div>

        <div className="grid-container">
          {jobs.jobs && jobs.jobs.length > 0 ? (
            jobs.jobs.map((element) => {
              return <JobCard key={element._id} element={element} />;
            })
          ) : (
            <p>No jobs found matching your criteria.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
