import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const DashboardHero = () => {
    const { user } = useContext(Context);

    return (
        <div className="hero-section dashboard-hero" style={{ padding: '4rem 0', background: 'linear-gradient(to right, #eff6ff, #ffffff)' }}>
            <div className="container">
                <div className="dashboard-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Welcome back, <span style={{ color: 'var(--primary-color)' }}>{user?.name || "User"}</span>!
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                        Ready to take the next step? Explore new opportunities tailored for you.
                    </p>

                    <div className="search-box" style={{
                        background: 'white',
                        padding: '1.5rem',
                        borderRadius: 'var(--border-radius)',
                        boxShadow: 'var(--shadow-lg)',
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', borderRight: '1px solid #e2e8f0', paddingRight: '1rem' }}>
                            <FaSearch style={{ color: 'var(--text-muted)' }} />
                            <input type="text" placeholder="Job title or keyword" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem' }} />
                        </div>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', paddingLeft: '1rem' }}>
                            <FaMapMarkerAlt style={{ color: 'var(--text-muted)' }} />
                            <input type="text" placeholder="Location" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem' }} />
                        </div>
                        <Link to="/job/getall" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
                            Search Jobs
                        </Link>
                    </div>

                    <div className="quick-stats" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '3rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>1.2k+</h3>
                            <p>New Jobs</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>500+</h3>
                            <p>Companies</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Daily</h3>
                            <p>Updates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHero;
