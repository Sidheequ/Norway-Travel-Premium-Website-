import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="map-section">
          <iframe
            title="map"
            className="map-frame"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=İzmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>

          <div className="info-box">
            <div className="info-left">
              <h2 className="info-title">ADDRESS</h2>
              <p>Norway </p>
            </div>
            <div className="info-right">
              <h2 className="info-title">EMAIL</h2>
              <a href="mailto:example@email.com">example@email.com</a>
              <h2 className="info-title phone-title">PHONE</h2>
              <p>123-456-7890</p>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2 className="form-title">Feedback</h2>
          <p className="form-desc">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>

          <button className="submit-btn">Button</button>
          <p className="note">
            Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
