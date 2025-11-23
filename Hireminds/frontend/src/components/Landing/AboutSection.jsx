import React from "react";

const AboutSection = () => {
    return (
        <section className="about-section" style={{ padding: "5rem 0", background: "var(--bg-body)" }}>
            <div className="container">
                <div className="section-title">
                    <h2>About Hireminds</h2>
                    <p>Connecting Ambition with Opportunity</p>
                </div>
                <div className="about-content" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
                    <div className="about-text">
                        <h3 style={{ marginBottom: "1.5rem" }}>Your Gateway to Career Success</h3>
                        <p style={{ marginBottom: "1rem" }}>
                            Hireminds is more than just a job board. We are a comprehensive career ecosystem designed to bridge the gap between talented professionals and forward-thinking companies.
                        </p>
                        <p style={{ marginBottom: "1rem" }}>
                            Whether you are a fresh graduate looking for your first break, or a seasoned executive seeking a leadership role, Hireminds provides the tools and network you need to succeed.
                        </p>
                        <ul style={{ listStyle: "none", marginTop: "2rem" }}>
                            <li style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                                <span style={{ color: "var(--success-color)", fontSize: "1.25rem" }}>✓</span>
                                Smart Job Matching
                            </li>
                            <li style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                                <span style={{ color: "var(--success-color)", fontSize: "1.25rem" }}>✓</span>
                                Verified Employers
                            </li>
                            <li style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                                <span style={{ color: "var(--success-color)", fontSize: "1.25rem" }}>✓</span>
                                Seamless Application Process
                            </li>
                        </ul>
                    </div>
                    <div className="about-image">
                        <img src="/register.jpg" alt="About Hireminds" style={{ borderRadius: "var(--border-radius)", boxShadow: "var(--shadow-lg)" }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
