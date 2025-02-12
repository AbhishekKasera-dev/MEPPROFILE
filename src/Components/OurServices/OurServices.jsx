import React from "react";
import { useState } from "react";
import "./OurServices.css";
import {
  FaIndustry,
  FaTools,
  FaBolt,
  FaPlug,
  FaHardHat,
  FaCog,
  FaWrench,
  FaFan,
  FaVideo,
  FaFire,
} from "react-icons/fa"; // Example icons

const services = [
  {
    icon: <FaPlug />,
    title: "ELECTRICAL SYSTEM",
    description:
      "Our electrical system design and planning services prioritize safety and efficiency, ensuring reliable and NEC compliant high-side and low-side systems for residential, commercial, and industrial buildings.",
    bulletPoints: [
      "Power distribution scheme Layout",
      "HT/LT System Design/Layout",
      "Lightning Protection Layout",
      "Earthing & Trench Layout",
      "DG Set and Emergency power backup Design/Layout",
      "Power Factor Control/APFC Design",
      "High Side Equipment Location & Substation Layout",
      "Electrical/LV Room Layout",
      "High/Low Level Lighting Layout",
      "High/Low Level Power Layout",
      "Solar Calculation & Design",
      "Electrical Load Schedule",
      "Cable Schedule & Sizing Calculation",
      "Approximate Estimation for electrical work(BOQ)",
    ],
  },
  {
    icon: <FaFan />,
    title: "HVAC SYSTEM",
    description:
      "Experience the perfect blend of comfort, health, and energy efficiency with our ASHRAE-compliant HVAC design solutions, expertly crafted to enhance your indoor environment.",
    bulletPoints: [
      "HVAC Heat load calculation",
      "HVAC Equipment selection",
      "HVAC Duct work design( SMACNA, ASHRAE)",
      "Refrigerant/CHW pipe sizing and layout.",
      "CDP layout",
      "General Ventilation calculation (ASHRAE) and layout",
      "Kitchen Ventilation calculations(DW172) and layouts",
      "Equipment selections",
      "ESP calculations",
    ],
  },
  {
    icon: <FaVideo />,
    title: "LOW VOLTAGE SYSTEM",
    description:
      "Our low voltage system design services deliver efficient and reliable solutions for telecommunications, security, and audio-visual systems.",
    bulletPoints: [
      "CCTV Surveillance System",
      "CCTV Schematic",
      "Access Control Systems",
      "Wired & Wireless Networking System",
      "Analog & IP Telephone System",
      "Public Address System",
    ],
  },
  {
    icon: <FaWrench />,
    title: "PLUMBING SYSTEM",
    description:
      "Our plumbing design expertise delivers efficient, functional, and safe water supply and drainage systems, tailored to your building's unique needs.",
    bulletPoints: [
      "Internal and External Water Supply, Drainage and Rain Water Piping Design and details",
      "Toilet bath and sanitary layout Planning and Design",
      "Pressure Pump , Hot water Return Circulation System",
      "Solar/Geyser and Heat Pump Design",
      "Terrace Water Supply Piping Design",
      "Underground and Overhead water Tank Design",
      "Under Ground Strom and Drainage Piping and Rainwater Harvesting Design",
      "Main Sump Rising Pump Design And Automation System",
      "Kitchen and Dining Drainage , Grease Trap Design and Water Supply Design",
      "Bioseptic Consultation",
      "WTP Consultation",
      "Lawn Drainage System",
      ],
  },
  {
    icon: <FaFire />,
    title: "FIRE & LIFE SAFETY",
    description:
      "Our fire and life safety design services prioritize safety and efficiency, ensuring reliable and NFPA compliant systems that protect people and property",
    bulletPoints: [
      "Fire fighting calculations and layout",
      "Fire alarm layout",
      "Fire alarm schematic",
      "EM & Exit Lighting layout",
      "EM & Exit schematic",
      ],
  },
];

const OurServices = () => {
  // State to manage which card's description is expanded
  const [expanded, setExpanded] = useState(Array(services.length).fill(false));

  // Toggle description function
  const toggleDescription = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <div id="services" className="services-section">
      <h2 className="services-title" data-aos="fade-down">
        Our <span>Services</span>
      </h2>
      <p className="services-description" data-aos="fade-down">
      Optimize your building's performance with our expertly designed Mechanical, Electrical, and Plumbing (MEP) systems, 
      <br />ensuring efficiency, sustainability, and cost savings.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">
              {expanded[index]
                ? service.description // Show full description if expanded
                : `${service.description.substring(0, 100)}...`}{" "}
              {/* Truncate text */}
            </p>
            {expanded[index] && (
              <ul className="service-bullet-points">
                {service.bulletPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
            <a
              href="#"
              className="service-link"
              onClick={(e) => {
                e.preventDefault();
                toggleDescription(index);
              }}
            >
              {expanded[index] ? "Read Less" : "Read More"} ➡️
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
