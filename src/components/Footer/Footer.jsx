import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand-column">

          <h3>PVR Supermart</h3>

          <p>
            Delivering high quality fresh groceries directly to your home
            with fast and secure delivery.
          </p>

          <div className="footer-contact">

            <p>
              <FaMapMarkerAlt />
              &nbsp; PVR Super Market
            </p>

            <p>
              <FaPhone />
              &nbsp; +91 9876543210
            </p>

          </div>

        </div>

        {/* Social */}

        <div className="footer-social-column">

          <h4>Follow Us</h4>

          <div className="footer-social-row">

            <FaFacebookSquare size={28} />

            <FaInstagram size={28} />

            <FaTwitter size={28} />

          </div>

        </div>

        {/* Live Map */}

        <div className="footer-map">

          <h2>Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16581.385863423646!2d77.42188936432323!3d11.453249960548426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93da9465a443d%3A0x8aa3b5640268d96!2sPVR%20SUPER%20MARKET!5e1!3m2!1sen!2sin!4v1782390924898!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PVR Super Market"
          ></iframe>

        </div>

      </div>

      <div className="footer-copyright">
        © {new Date().getFullYear()} PVR Supermart. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;