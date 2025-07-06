// src/Pages/AdminDashboard.js
import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');

    fetch('http://localhost:5000/api/admin/faqs', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Unauthorized or server error');
        return res.json();
      })
      .then((data) => setFaqs(data))
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch FAQs. Please login again.');
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <ul className="list-group">
        {faqs.map((faq, index) => (
          <li key={index} className="list-group-item">
            <strong>Q:</strong> {faq.question}
            <br />
            <strong>A:</strong> {faq.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
