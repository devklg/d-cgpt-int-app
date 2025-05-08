import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const PreEnroll = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', referrer: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/preenroll', formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-navy min-h-screen text-white">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Pre-Enroll Now</h1>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input className="w-full p-2 rounded bg-darkNavy" name="name" placeholder="Name" onChange={handleChange} required />
            <input className="w-full p-2 rounded bg-darkNavy" name="email" placeholder="Email" onChange={handleChange} required />
            <input className="w-full p-2 rounded bg-darkNavy" name="phone" placeholder="Phone" onChange={handleChange} required />
            <input className="w-full p-2 rounded bg-darkNavy" name="referrer" placeholder="Referrer (optional)" onChange={handleChange} />
            <button type="submit" className="bg-gold text-navy px-4 py-2 rounded">Submit</button>
          </form>
        ) : (
          <p>Thank you for registering! We'll keep you updated.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PreEnroll;
