import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple
    if (email === 'admin@example.com' && password === 'password123') {
      alert('Inicio de sesión exitoso');
      // Aquí puedes redirigir al usuario a otra parte del sitio o mostrar contenido exclusivo
    } else {
      setErrorMessage('Correo o contraseña incorrectos');
    }
  };

  return (
    <section id="login" className="login-section">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
    </section>
  );
};

export default Login;
