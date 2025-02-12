import "./Navbar.css";
import logo from "../../assets/logo6.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navlogo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#services">Our Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-contact">
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
