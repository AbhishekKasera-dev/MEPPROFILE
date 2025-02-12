import "./AboutUs.css";
import image24 from "../../assets/image56.jpg";

const AboutUs = () => {
  return (
    <div id="about-us" className="container">
      <div className="about-wrapper">
        <img src={image24} alt="" data-aos="fade-right" />
        <div className="about-us-title" data-aos="fade-left">
          <h2>About Us</h2>
          <p>
            Welcome to{" "}
            <span>
              <b>VISIONAIRE</b>
            </span>
          </p>
          <hr />
          <p>
            We are a small, highly skilled team of MEP consultants with a
            passion for engineering and a dedication to excellence. Our
            collective experience spans various industries, including
            commercial, residential, healthcare, and industrial sectors. This
            diverse background enables us to approach each project with a unique
            perspective and a wealth of knowledge.
          </p>
          <p>
            Our comprehensive range of MEP services includes mechanical,
            electrical, and plumbing design. We leverage the latest technologies
            and industry best practices to provide efficient, sustainable, and
            cost-effective solutions.
          </p>
          <button className="about-Us-btn">
            <a href="/Visionaire_Profile.pdf" download="Visionaire_Profile.pdf">
              Discover More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
