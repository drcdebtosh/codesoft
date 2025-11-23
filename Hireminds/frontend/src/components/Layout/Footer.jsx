import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer style={{ backgroundColor: 'var(--accent-color)', padding: '2rem 0', color: 'var(--text-light)', marginTop: 'auto' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>&copy; 2025 All Rights Reserved By Debatosh Roychowdhury.</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to={"https://x.com/drcdebtosh"} target="_blank" style={{ color: 'white', fontSize: '1.25rem' }}>
            <FaTwitter />
          </Link>
          <Link to={"https://github.com/drcdebtosh"} target="_blank" style={{ color: 'white', fontSize: '1.25rem' }}>
            <FaGithub />
          </Link>
          <Link to={"https://www.linkedin.com/in/debatosh-roychowdhury/"} target="_blank" style={{ color: 'white', fontSize: '1.25rem' }}>
            <FaLinkedin />
          </Link>
          <Link to={"https://www.instagram.com/drc_debtosh/"} target="_blank" style={{ color: 'white', fontSize: '1.25rem' }}>
            <RiInstagramFill />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
