import { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      window.alert('Todos los campos son obligatorios.');
    } else if (password.length < 6) {
      window.alert('La contraseña debe tener al menos 6 caracteres.');
    } else {
      window.alert('¡Inicio de sesión exitoso!');
    }
  };

  return (
      <div className="d-flex min-vh-100 align-items-center justify-content-center">
    <div className="card p-3" style={{ width: '20rem' }}>
      <h2 className="text-center mb-4">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
    </div>
    
  );
};
