import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_emr1dgb', 'template_ml8nqdg', formData, 'I5cC0jsQwg34qhYK-')
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Set success message
        setSuccessMessage('Your message has been sent successfully! We will respond as soon as possible.');
        setShowPopup(true); // Show the popup

        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        });

        // Hide the popup after 5 seconds
        setTimeout(() => {
          setShowPopup(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Optionally set an error message here
      });
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      
      {showPopup && (
        <div className="popup">{successMessage}</div>
      )}
    </section>
  );
};

export default Contact;
