import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

function Contact() {
  const [contactInfo, setContactInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Fetch contact info when the component mounts
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await axiosInstance.get('/contact');
        setContactInfo(response.data);
      } catch (err) {
        console.error('Error fetching contact info:', err);
        setError('Failed to fetch contact info.');
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/messages', formData); // Assuming /messages is the endpoint for form submissions
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send message. Please try again later.');
    }
  };

  if (loading) return <p>Loading contact info...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Contact</h2>
      {contactInfo ? (
        <div>
          <p>Phone: {contactInfo.phone}</p>
          <p>Email: {contactInfo.email}</p>
          <p>Address: {contactInfo.address}</p>
        </div>
      ) : (
        <p>Contact info is currently unavailable.</p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          value={formData.message}
          placeholder="Your Message"
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
