import React, { useEffect, useState } from 'react';

const AdminPanel = ({ token, onLogout }) => {
  const [data, setData] = useState({ faqs: [], contacts: [], registrations: [], categories: [] });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/admin/all-data', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (res.status === 401 || res.status === 403) {
          setError('Session expired or unauthorized. Please login again.');
          onLogout();
          return;
        }

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await res.json();
        setData(result);
      } catch (err) {
        setError('Failed to fetch data or token expired');
      }
    };

    fetchAllData();
  }, [token, onLogout]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    onLogout();
  };

  return (
    <div className="container mt-5">
      <h2>Admin Panel</h2>
      <button className="btn btn-danger mb-4" onClick={handleLogout}>Logout</button>
      {error && <div className="alert alert-danger">{error}</div>}

      <h4>FAQs</h4>
      <ul className="list-group mb-4">
        {data.faqs.map(faq => (
          <li key={faq._id} className="list-group-item">
            <strong>Q:</strong> {faq.question} <br />
            <strong>A:</strong> {faq.answer}
          </li>
        ))}
      </ul>

      <h4>Contacts</h4>
      <ul className="list-group mb-4">
        {data.contacts.map(contact => (
          <li key={contact._id} className="list-group-item">
            {contact.name} - {contact.email} <br />
            {contact.message}
          </li>
        ))}
      </ul>

      <h4>Registrations</h4>
      <ul className="list-group mb-4">
        {data.registrations.map(reg => (
          <li key={reg._id} className="list-group-item">
            {reg.name} - {reg.email} - {reg.course}
          </li>
        ))}
      </ul>

      <h4>Categories</h4>
      <ul className="list-group mb-4">
        {data.categories.map(cat => (
          <li key={cat._id} className="list-group-item">
            {cat.name} - {cat.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
