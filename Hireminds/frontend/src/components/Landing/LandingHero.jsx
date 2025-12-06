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
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            marginBottom: '1.5rem',
                            display: 'inline-block',
                            background: 'rgba(176, 72, 255, 0.1)',
                            padding: '0.5rem 1rem',
                            borderRadius: '50px',
                            fontSize: '0.875rem'
                        }}>
                            Launch Your Career
                        </span>
                        <h1>Unlock Your Potential <br /> with <span>Hireminds</span></h1>
                        <p>
                            The ultimate platform connecting ambitious talent with world-class organizations.
                            Join thousands of professionals who have found their dream careers here.
                        </p>
                        <div className="hero-btns">
                            <Link to="/register" className="btn btn-primary">Get Started</Link>
                            <Link to="/login" className="btn btn-outline">Sign In</Link>
                        </div>
                        <div style={{ marginTop: '4rem', display: 'flex', gap: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ background: 'rgba(176, 72, 255, 0.1)', padding: '10px', borderRadius: '50%' }}>
                                    <FaRocket style={{ color: 'var(--primary-color)' }} />
                                </div>
                                <span style={{ fontWeight: 500, color: 'var(--text-main)' }}>Fast Matching</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ background: 'rgba(176, 72, 255, 0.1)', padding: '10px', borderRadius: '50%' }}>
                                    <FaBriefcase style={{ color: 'var(--primary-color)' }} />
                                </div>
                                <span style={{ fontWeight: 500, color: 'var(--text-main)' }}>Top Companies</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ background: 'rgba(176, 72, 255, 0.1)', padding: '10px', borderRadius: '50%' }}>
                                    <FaUserTie style={{ color: 'var(--primary-color)' }} />
                                </div>
                                <span style={{ fontWeight: 500, color: 'var(--text-main)' }}>Expert Guidance</span>
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
