import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer style={{ background: 'var(--bg-card)', padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 'auto' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div style={{ color: 'var(--text-muted)' }}>&copy; 2025 All Rights Reserved By Debatosh Roychowdhury.</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to={"https://x.com/drcdebtosh"} target="_blank" style={{ color: 'var(--text-muted)', fontSize: '1.25rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
            <FaTwitter />
          </Link>
          <Link to={"https://github.com/drcdebtosh"} target="_blank" style={{ color: 'var(--text-muted)', fontSize: '1.25rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
            <FaGithub />
          </Link>
          <Link to={"https://www.linkedin.com/in/debatosh-roychowdhury/"} target="_blank" style={{ color: 'var(--text-muted)', fontSize: '1.25rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
            <FaLinkedin />
          </Link>
          <Link to={"https://www.instagram.com/drc_debtosh/"} target="_blank" style={{ color: 'var(--text-muted)', fontSize: '1.25rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
            <RiInstagramFill />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
