import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="container my-5">
      {/* Title */}
      <h1 className="text-center fw-bold mb-5">About DancePulse Academy</h1>

      {/* Who We Are */}
      <div className="row mb-5">
        <div className="col-md-12">
          <h2 className="fw-bold mb-3">Who We Are</h2>
          <p style={{ fontSize: '1.1rem' }}>
            DancePulse Academy is a premier dance institution dedicated to cultivating a love for dance across all age groups. We offer a range of classes from classical to modern dance styles, led by experienced instructors passionate about teaching and performance.
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            Our inclusive environment helps students develop confidence, rhythm, and creativity while building lifelong friendships through movement. Whether you're a beginner or an advanced dancer, DancePulse has a space for you.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="row text-start">
        {/* Mission */}
        <div className="col-md-6 mb-4">
          <div className="p-4 bg-light border rounded-4 shadow-sm h-100">
            <h3 className="fw-bold mb-3">🎯 Our Mission</h3>
            <ul style={{ fontSize: '1rem' }}>
              <li>To provide high-quality dance education accessible to all.</li>
              <li>To inspire self-expression through movement and rhythm.</li>
              <li>To cultivate discipline and creativity in every student.</li>
              <li>To support emotional well-being through the joy of dance.</li>
              <li>To develop performance skills and stage confidence.</li>
              <li>To build a lifelong appreciation for diverse dance forms.</li>
            </ul>
          </div>
        </div>

        {/* Vision */}
        <div className="col-md-6 mb-4">
          <div className="p-4 bg-light border rounded-4 shadow-sm h-100">
            <h3 className="fw-bold mb-3">🌟 Our Vision</h3>
            <ul style={{ fontSize: '1rem' }}>
              <li>To be a global leader in dance education and creativity.</li>
              <li>To foster a community that values inclusion and diversity.</li>
              <li>To innovate with modern dance trends and techniques.</li>
              <li>To create platforms for aspiring dancers to shine.</li>
              <li>To integrate cultural heritage into dance education.</li>
              <li>To make dance a tool for social and personal growth.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
