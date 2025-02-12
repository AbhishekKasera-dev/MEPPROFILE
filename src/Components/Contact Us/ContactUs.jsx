import React, { useState } from "react";
import "./ContactUs.css";
import "font-awesome/css/font-awesome.min.css";

const ContactUs = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger the popup after a successful form submission
    setIsPopupOpen(true);

    // Submit the form to Netlify
    const form = e.target;
    const formData = new FormData(form);
    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        form.reset(); // Clear the form fields
      })
      .catch((error) => console.error("Form submission error:", error));
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="contact">
      <div id="contact" className="contact-container" data-aos="fade-down">
        <h2 className="contact-title">
          <span>Contact</span> Us
        </h2>
        {/* <p className="contact-description" data-aos="fade-up">
          Looking for MEP designer? We're here to help!
        </p> */}
        <div className="contact-form-container">
          <div className="contact-left" data-aos="fade-right">
            <h2>Contact Info</h2>
            <p>
              <i className="fa fa-map-marker"></i> Shiv Govind Orchid, Dev nagar, Zingabai takli, Nagpur, Maharashtra-440030
            </p>
            <p>
              <i className="fa fa-map-marker"></i> Hinjewadi
              Phase 1, Rajiv Gandhi Infotech Park, Pune Maharashtra-411057
            </p>
            <p>
              <i className="fa fa-envelope"></i> teamvisionaire.mep@gmail.com
            </p>
            <p>
              <i className="fa fa-linkedin"></i><a href="https://www.linkedin.com/in/visionaire-mep-consultant" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/visionaire-mep-consultant</a>
            </p>
            {/* <div className="social-icons">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-pinterest"></i>
              <i className="fa fa-linkedin"></i>
            </div> */}
          </div>
          <div className="contact-form" data-aos="fade-left">
            <h2>Let's have a talk!</h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* Hidden input for Netlify form name */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot field for spam protection */}
              <div style={{ display: "none" }}>
                <label>
                  Don’t fill this out:
                  <input name="bot-field" />
                </label>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                  required
                  pattern="^[a-zA-Z\s]+$"
                  title="First name should contain only letters."
                />
                <input
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
                  required
                  pattern="^[a-zA-Z\s]+$"
                  title="Last name should contain only letters."
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  title="Enter a valid email addess."
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="1234567890"
                  //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                  title="Enter a valid phone number in the format 1234567890."
                />
              </div>
              <textarea
                name="message"
                placeholder="Write your message here..."
                required
                minLength="10"
                maxLength="2000"
              ></textarea>
              <button type="submit">Send</button>
            </form>

            {/* Popup Component */}
            {isPopupOpen && (
              <div className="popup-overlay">
                <div className="popup-content">
                  <h3>Thank You!</h3>
                  <p>Your message has been successfully sent.</p>
                  <button onClick={closePopup}>Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
