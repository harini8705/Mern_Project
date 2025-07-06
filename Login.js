import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save admin details and token
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('loggedInAdmin', JSON.stringify({ name: data.name }));

        alert('Login successful');
        navigate('/admin/dashboard');
      } else {
        alert(data.message || 'Invalid name or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center bg-light">
      <Container className="bg-light rounded shadow p-5" style={{ maxWidth: '500px', opacity: 0.95 }}>
        <h2 className="text-center mb-4 text-primary fw-bold">Admin Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="loginName">
            <Form.Label>Admin Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>

        <div className="text-center mt-3">
          <p>Not an admin? <a href="/signup" className="text-decoration-none">Sign up here</a></p>
        </div>
      </Container>
    </div>
  );
}

export default Login;
