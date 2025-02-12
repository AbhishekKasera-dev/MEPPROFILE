import "./Footer.css";
import logo from "../../assets/logo6.png";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2>Get In Touch</h2>
          <ul>
            {/* <li>+91 9565 732 176</li> */}
            <li>teamvisionaire.mep@gmail.com</li>
            <li><a href="https://www.linkedin.com/in/visionaire-mep-consultant" target="_blank" rel="noopener noreferrer">Visit Our Linkedin</a></li>
          </ul>
        </div>

        <div className="footer-content-right">
          <img src={logo} alt="" />
          <p>
          Dedicated to delivering engineering solutions, our team at Visionaire specializes in Mechanical, Electrical, and Plumbing (MEP) systems tailored to your project needs. We ensure every detail is designed and executed to the highest standards. Trust us to build the foundation of your success.
          </p>
          {/* <div className="footer-social-icon">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-pinterest"></i>
            <i className="fa fa-linkedin"></i>
          </div> */}
        </div>
      </div>
      <div className="footer-content-end">
        <p className="footer-copyright">
          © 2025 Visionaire.co.in - All rights reserved.
        </p>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#services">Our Services</a>
          </li>
          <li>
            <a href="#projects">Our Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
