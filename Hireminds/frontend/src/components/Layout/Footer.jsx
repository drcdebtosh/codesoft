import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context)
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Debatosh Roychowdhury.</div>
      <div>
        <Link to={"https://github.com/drcdebtosh"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://x.com/drcdebtosh"} target="_blank">
          <FaTwitter />
        </Link>
        <Link to={"www.linkedin.com/in/debatosh-roychowdhury"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/drc_debtosh/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;