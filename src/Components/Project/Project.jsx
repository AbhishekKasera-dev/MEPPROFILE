import React, { useState, useEffect } from "react";
import "./Project.css";
import image11 from "../../assets/image41.png";
import image12 from "../../assets/image61.jpg";
import image13 from "../../assets/image43.png";
import image15 from "../../assets/image44.png";

const ProjectDetails = [
  {
    image: image11,
    title: "Royal Heights",
    subtitle: "Apartment Scheme at Nagpur",
    description:
      "The scope of work for the 64-apartment project encompassed a comprehensive internal electrical design, which included detailed specifications for lighting, power distribution, circuit layouts, distribution board (DB) sizing, cable sizing, and panel configurations. Additionally, we designed ELV systems such as CCTV, LAN, and telephone networks to enhance connectivity and security. To ensure efficient power supply, a 400kVA substation was designed integrating solar energy for common loads to ensure sustainability. All designs adhered to relevant standards, optimizing energy efficiency across the facility.",
  },
  {
    image: image12,
    title: "Cult 91",
    subtitle: "Retail Store at Phoenix Mall, Pune",
    description:
      "For a store in a Pune mall, our scope of work included detailed electrical design, covering lighting, power, circuit layouts, and DB sizing, alongside ELV systems like CCTV, LAN, and telephone. Additionally, we designed a public address system, fire alarm system integrated with the electrical system for emergency response, This includes Designing of Fire Fighting system as well. All designs adhered to mall-specific and industry standards, ensuring safety, efficiency, and compliance.",
  },
  {
    image: image13,
    title: "Office Space",
    subtitle: "Office Space at Amanora Mall, Pune",
    description:
      "For an office space in a Pune mall, our scope of work included detailed electrical design, encompassing lighting, power, circuit layouts, and DB sizing, along with ELV systems such as CCTV, LAN, and telephone. The work also involved precise lighting design calculations and lux level reporting to ensure optimal illumination. All designs were developed in compliance with mall-specific and industry standards, prioritizing efficiency and functionality.",
  },
  {
    image: image15,
    title: "V.V Palace",
    subtitle: "Banquet Hall at Nagpur",
    description:
      "For a banquet hall project in Nagpur, our scope of work included comprehensive internal electrical design, covering lighting, power, circuit layouts, DB sizing, panels, and cable specifications. Additionally, we incorporated ELV systems such as CCTV, LAN, and telephone networks. A 200kVA substation was designed for efficient building electrification, adhering to all relevant standards and optimizing energy efficiency throughout the facility.",
  },
];

const Project = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500); // Waits for 500ms before rendering the component
    return () => clearTimeout(timer); // Clean up the timeout on component unmount
  }, []);

  return (
    <div id="projects" className={`project-container ${isLoaded ? "" : ""}`}>
      <h2 className="project-title" data-aos="fade-down">
        Our<span> Projects</span>
      </h2>
      <p className="project-description" data-aos="fade-down">
      Our team of experienced engineers boasts a diverse portfolio, having successfully worked on projects across India, the Gulf, and the US, encompassing commercial, residential, industrial and fitout projects. This global expertise enables us to bring a unique perspective to every project, combining international best practices with local knowledge and insights.
      </p>
      <div className="card-container">
        {ProjectDetails.map((ProjectDetail, index) => (
          <div
            className="card-section"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
            key={index}
          >
            <img src={ProjectDetail.image} alt="" className="card-img" />
            <div className="card-body">
              <h1 className="card-title">{ProjectDetail.title}</h1>
              <p className="card-sub-title">{ProjectDetail.subtitle}</p>
              <p className="card-info">{ProjectDetail.description}</p>
              {/* <button className="card-btn">Read More</button> */}
            </div>
          </div>
        ))}
      </div>
      <div className="project-details-container">
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Completed</h3>
          <label>10+ Finished Projects</label>
        </div>
        <div className="project-box">
          <i className="uil uil-users-alt"></i>
          <h3>Clients</h3>
          <label>10+ Clients</label>
        </div>
        <div className="project-box">
          <i className="uil uil-award"></i>
          <h3>Experience</h3>
          <label>4+ Years in the field</label>
        </div>
      </div>
    </div>
  );
};

export default Project;
