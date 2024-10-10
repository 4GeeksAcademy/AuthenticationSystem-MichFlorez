import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://bookish-computing-machine-r47qqrwpgxgxhrgr-3001.app.github.dev/api/login', {
        email : email,
        password: password,
      });
      localStorage.setItem('token', response.data.token); // Guardamos el token JWT en el localStorage
      navigate('/protected');  // Redireccionar a la ruta protegida
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
