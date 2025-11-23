import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaSearch, FaBriefcase, FaUserTie } from "react-icons/fa";

const LandingHero = () => {
    return (
        <div className="hero-section landing-hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <span style={{
                            color: 'var(--primary-color)',
                            fontWeight: '600',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            marginBottom: '1rem',
                            display: 'block'
                        }}>
                            Launch Your Career
                        </span>
                        <h1>Unlock Your Potential <br /> with <span style={{ color: 'var(--primary-color)' }}>Hireminds</span></h1>
                        <p>
                            The ultimate platform connecting ambitious talent with world-class organizations.
                            Join thousands of professionals who have found their dream careers here.
                        </p>
                        <div className="hero-btns">
                            <Link to="/register" className="btn btn-primary">Get Started</Link>
                            <Link to="/login" className="btn btn-outline">Sign In</Link>
                        </div>
                        <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FaRocket style={{ color: 'var(--primary-color)' }} />
                                <span>Fast Matching</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FaBriefcase style={{ color: 'var(--primary-color)' }} />
                                <span>Top Companies</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FaUserTie style={{ color: 'var(--primary-color)' }} />
                                <span>Expert Guidance</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="/heroS.jpg" alt="hero" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingHero;
