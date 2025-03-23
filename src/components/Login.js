import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/forms.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="overlay">
        <div className="card">
          <h2>Welcome Back</h2>
          
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="button" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            Don't have an account?{' '}
            <Link to="/register" className="link">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;