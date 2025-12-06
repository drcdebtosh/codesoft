import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ element }) => {
    return (
        <div className="job-card">
            <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>{element.title}</h4>
            <p style={{ marginBottom: '0.25rem' }}><strong>Category:</strong> {element.category}</p>
            <p style={{ marginBottom: '1.5rem' }}><strong>Location:</strong> {element.country}</p>
            <Link to={`/job/${element._id}`} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>View Details</Link>
        </div>
    );
};

export default JobCard;
