import React, { useState } from 'react';
import './Register.css';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      window.alert('Todos los campos son obligatorios.');
    } else if (password.length < 6) {
      window.alert('La contraseña debe tener al menos 6 caracteres.');
    } else if (password !== confirmPassword) {
      window.alert('Las contraseñas no coinciden.');
    } else {
      window.alert('¡Registro exitoso!');
    }
  };

  return (

    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <label>Confirmar Contraseña:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

        <button type="submit">Registrarse</button>
      </form>
    </div>


  );
};
