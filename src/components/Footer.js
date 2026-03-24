import React from "react";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import { SocialLinks } from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="section footer">
        <PageLinks parentClass="footer-links" className="footer-link" />
      <ul className="footer-icons">
        {socialLinks.map((social) => {
          return (
            <SocialLinks key={social.id} {...social} itemClass="footer-icon" />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
