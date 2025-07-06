
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  const handleReset = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
    navigate('/Login');
  };

  return (
    <div className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '80vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h4 className="text-center mb-3">Forgot Password</h4>
        <form onSubmit={handleReset}>
          <input type="email" className="form-control mb-3" placeholder="Enter your email"
            value={email} onChange={(e) => setEmail(e.target.value)} required />
          <button type="submit" className="btn btn-warning w-100">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
