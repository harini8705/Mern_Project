import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Logout() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <div className="container my-auto text-center py-5">
        <div className="card shadow-lg p-4 border-0 mx-auto" style={{ maxWidth: '500px' }}>
          <div className="card-body">
            <h2 className="card-title text-success mb-3">You have successfully logged out!</h2>
            <p className="card-text lead">Thank you for dancing with us at <strong>DancePulse Academy</strong>.</p>
            <a href="/login" className="btn btn-warning mt-4">Login Again</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
