import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');  
      }
      try {
        const response = await axios.get('https://bookish-computing-machine-r47qqrwpgxgxhrgr-3001.app.github.dev/api/protected', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error al acceder a la ruta protegida:', error);
        localStorage.removeItem('token');
        navigate('/login');  
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <div>
      {user ? <h2>Bienvenido Usuario {user.id}</h2> : <p>Loading...</p>}
    </div>
  );
}

export default ProtectedRoute;
