import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import danceBg from '../assets/dance-bg.png';

import balletImg from '../assets/ballet.jpg';
import hiphopImg from '../assets/hiphop.jpg';
import salsaImg from '../assets/salsa.jpg';
import kathakImg from '../assets/kathak.jpg';
import contemporaryImg from '../assets/contemporary.jpg';
import jazzImg from '../assets/jazz.jpg';

const categories = [
  { name: 'Ballet', image: balletImg },
  { name: 'Hip-Hop', image: hiphopImg },
  { name: 'Salsa', image: salsaImg },
  { name: 'Kathak', image: kathakImg },
  { name: 'Contemporary', image: contemporaryImg },
  { name: 'Jazz', image: jazzImg },
];

const Home = () => {
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <div style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(${danceBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
      }}>
        <div>
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '20px' }}>
            Welcome to <span style={{ color: '#ff4081' }}>DancePulse Academy</span>
          </h1>
          <p style={{ fontSize: '1.3rem' }}>Where passion meets rhythm</p>
        </div>
      </div>

      {/* Intro & Call to Action */}
      <div className="text-center py-5" style={{ backgroundColor: '#f9f9f9' }}>
        <h2 className="mb-3 fw-bold">Join Our Classes and Elevate Your Dance Journey</h2>
        <p className="mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Whether you're a beginner or a pro, we have something for everyone. Enroll now to express yourself through movement and music.
        </p>
        <a href="/signup" className="btn btn-lg btn-primary" style={{ backgroundColor: '#ff4081', border: 'none' }}>
          Sign Up Now
        </a>
      </div>

      {/* Categories Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Our Dance Categories</h2>
        <div className="row justify-content-center g-4">
          {categories.map((category, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="card shadow border-0 rounded-4 h-100 text-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="card-img-top rounded-top-4"
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{category.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
