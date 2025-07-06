import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import balletImage from '../assets/ballet.jpg';
import hiphopImage from '../assets/hiphop.jpg';
import salsaImage from '../assets/salsa.jpg';
import contemporaryImage from '../assets/contemporary.jpg';
import kathakImage from '../assets/kathak.jpg';
import jazzImage from '../assets/jazz.jpg';

const categoriesData = [
  {
    name: 'Ballet',
    description: 'Graceful and elegant classical dance form.',
    image: balletImage,
    time: 'Mon, Wed, Fri - 5:00 PM',
    duration: '1 hour',
    fee: '₹1500/month',
  },
  {
    name: 'Hip Hop',
    description: 'Energetic and expressive street dance style.',
    image: hiphopImage,
    time: 'Tue, Thu - 6:00 PM',
    duration: '1 hour',
    fee: '₹1400/month',
  },
  {
    name: 'Salsa',
    description: 'Lively Latin dance with rhythmic footwork.',
    image: salsaImage,
    time: 'Sat, Sun - 4:00 PM',
    duration: '1.5 hours',
    fee: '₹1600/month',
  },
  {
    name: 'Contemporary',
    description: 'Fusion of modern and classical techniques.',
    image: contemporaryImage,
    time: 'Mon, Thu - 5:30 PM',
    duration: '1 hour',
    fee: '₹1450/month',
  },
  {
    name: 'Kathak',
    description: 'Traditional Indian classical storytelling dance.',
    image: kathakImage,
    time: 'Tue, Fri - 5:00 PM',
    duration: '1 hour',
    fee: '₹1500/month',
  },
  {
    name: 'Jazz',
    description: 'Bold, dramatic movements with high energy.',
    image: jazzImage,
    time: 'Sat - 6:00 PM',
    duration: '1 hour',
    fee: '₹1350/month',
  },
];

const Categories = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [admittedClass, setAdmittedClass] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setAdmittedClass(null);
  };

  
  const handleAdmit = (category) => {
    if (!user) {
      alert('Please log in before admitting to a class!');
      navigate('/login');
      return;
    }
    
    const admission = {
      name: user.name,
      email: user.email,
      danceStyle: category.name,
      time: category.time,
      duration: category.duration,
      fee: category.fee,
    };
  
    let admissions = JSON.parse(localStorage.getItem('admissions')) || [];
    admissions.push(admission);
    localStorage.setItem('admissions', JSON.stringify(admissions));
  
    setAdmittedClass(category);
  };
  
  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4"><b>Our Dance Categories</b></h2>

      <div className="row g-4">
        {categoriesData.map((category, index) => (
          <div className="col-md-4 col-sm-6" key={index}>
            <div className="card shadow-lg border-0 rounded-lg overflow-hidden">
              <div
                className="card-img-top position-relative"
                style={{
                  height: '250px',
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => toggleAccordion(index)}
              >
                <div className="card-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
                  <h5 className="text-white fw-bold">{category.name}</h5>
                </div>
              </div>

              <div className="card-body">
                <p className="card-text">{category.description}</p>
              </div>

              <div className="accordion" id={`accordion-${index}`}>
                <div className="accordion-item">
                  <div
                    id={`collapse-${index}`}
                    className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                    aria-labelledby={`heading-${index}`}
                    data-bs-parent={`#accordion-${index}`}
                  >
                    <div className="accordion-body">
                      <p><strong>Duration:</strong> {category.duration}</p>
                      <p><strong>Time:</strong> {category.time}</p>
                      <p><strong>Fee:</strong> {category.fee}</p>
                      {user ? (
                        <button
                          className="btn btn-success mt-2"
                          onClick={() => handleAdmit(category)}
                        >
                          Admit to Class
                        </button>
                      ) : (
                        <button className="btn btn-secondary mt-2" disabled>
                          Please log in to admit to a class
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {admittedClass && user && (
        <div className="mt-5 p-4 border border-success rounded bg-light text-center">
          <h4 className="text-success mb-3">
            🎉 Congratulations {user.name}! You have been successfully admitted to the <b>{admittedClass.name}</b> class.
          </h4>
          <div className="text-start mt-4">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Dance Style:</strong> {admittedClass.name}</p>
            <p><strong>Time:</strong> {admittedClass.time}</p>
            <p><strong>Duration:</strong> {admittedClass.duration}</p>
            <p><strong>Payment:</strong> {admittedClass.fee}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
