import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const DashboardHero = () => {
    const { user } = useContext(Context);

    return (
        <div className="hero-section dashboard-hero" style={{
            padding: '5rem 0 4rem 0',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 50%, #faf5ff 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative background elements */}
            <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(176, 72, 255, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-80px',
                left: '-80px',
                width: '250px',
                height: '250px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(50px)'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="dashboard-header" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                    <h1 style={{
                        fontSize: '2.8rem',
                        marginBottom: '1.2rem',
                        background: 'linear-gradient(135deg, #1e293b 0%, #6b46c1 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '800'
                    }}>
                        Welcome back, <span style={{
                            background: 'linear-gradient(135deg, #B048FF 0%, #8F44F0 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>{user?.name || "User"}</span>!
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#6b46c1',
                        marginBottom: '3rem',
                        opacity: '0.85',
                        letterSpacing: '0.3px',
                        lineHeight: '1.7',
                        fontWeight: '500',
                        maxWidth: '650px',
                        margin: '0 auto 3rem auto'
                    }}>
                        Ready to take the next step? Explore new opportunities tailored for you.
                    </p>

                    <div className="search-box" style={{
                        background: 'white',
                        padding: '1.25rem 1.75rem',
                        borderRadius: '20px',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(176, 72, 255, 0.1)',
                        display: 'flex',
                        gap: '1.5rem',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        border: '2px solid rgba(176, 72, 255, 0.08)',
                        transition: 'all 0.3s ease'
                    }}>
                        <div style={{
                            flex: 1,
                            minWidth: '200px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            borderRight: '2px solid #e0e7ff',
                            paddingRight: '1.5rem'
                        }}>
                            <FaSearch style={{ color: '#8F44F0', fontSize: '1.1rem' }} />
                            <input
                                type="text"
                                placeholder="Job title or keyword"
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    width: '100%',
                                    fontSize: '1rem',
                                    color: '#1e293b',
                                    fontWeight: '500'
                                }}
                            />
                        </div>
                        <div style={{
                            flex: 1,
                            minWidth: '180px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <FaMapMarkerAlt style={{ color: '#8F44F0', fontSize: '1.1rem' }} />
                            <input
                                type="text"
                                placeholder="Location"
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    width: '100%',
                                    fontSize: '1rem',
                                    color: '#1e293b',
                                    fontWeight: '500'
                                }}
                            />
                        </div>
                        <Link
                            to="/job/getall"
                            className="btn btn-primary"
                            style={{
                                padding: '0.875rem 2.5rem',
                                fontSize: '1rem',
                                fontWeight: '600',
                                borderRadius: '12px',
                                boxShadow: '0 8px 24px rgba(176, 72, 255, 0.35)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Search Jobs
                        </Link>
                    </div>

                    <div className="quick-stats" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '1.5rem',
                        marginTop: '3.5rem',
                        maxWidth: '700px',
                        margin: '3.5rem auto 0 auto'
                    }}>
                        <div style={{
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, rgba(176, 72, 255, 0.08) 0%, rgba(139, 92, 246, 0.05) 100%)',
                            padding: '2rem 1.5rem',
                            borderRadius: '16px',
                            border: '1px solid rgba(176, 72, 255, 0.1)',
                            transition: 'all 0.3s ease'
                        }}>
                            <h3 style={{
                                fontSize: '2.2rem',
                                background: 'linear-gradient(135deg, #B048FF 0%, #8F44F0 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                marginBottom: '0.5rem',
                                fontWeight: '800'
                            }}>1.2k+</h3>
                            <p style={{ margin: 0, fontSize: '0.95rem', color: '#6b46c1', fontWeight: '600' }}>New Jobs</p>
                        </div>
                        <div style={{
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(96, 165, 250, 0.05) 100%)',
                            padding: '2rem 1.5rem',
                            borderRadius: '16px',
                            border: '1px solid rgba(59, 130, 246, 0.1)',
                            transition: 'all 0.3s ease'
                        }}>
                            <h3 style={{
                                fontSize: '2.2rem',
                                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                marginBottom: '0.5rem',
                                fontWeight: '800'
                            }}>500+</h3>
                            <p style={{ margin: 0, fontSize: '0.95rem', color: '#3b82f6', fontWeight: '600' }}>Companies</p>
                        </div>
                        <div style={{
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(52, 211, 153, 0.05) 100%)',
                            padding: '2rem 1.5rem',
                            borderRadius: '16px',
                            border: '1px solid rgba(16, 185, 129, 0.1)',
                            transition: 'all 0.3s ease'
                        }}>
                            <h3 style={{
                                fontSize: '2.2rem',
                                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                marginBottom: '0.5rem',
                                fontWeight: '800'
                            }}>Daily</h3>
                            <p style={{ margin: 0, fontSize: '0.95rem', color: '#10b981', fontWeight: '600' }}>Updates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHero;
