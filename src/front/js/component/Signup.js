import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://bookish-computing-machine-r47qqrwpgxgxhrgr-3001.app.github.dev/api/signup', {
        email: email,
        password: password,
        is_active: true,  
      });
      console.log(response.data);
      navigate('/login');  // Redireccionar al login después de registrarse exitosamente
    } catch (error) {
      console.error('Error al registrar:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
