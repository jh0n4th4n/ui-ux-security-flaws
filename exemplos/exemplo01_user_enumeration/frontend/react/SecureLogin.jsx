// React - Login seguro com mensagem genérica
import React, { useState } from 'react';

export default function SecureLogin() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === 'admin@empresa.com' && password === 'senha123') {
      setMessage('Login realizado com sucesso!');
    } else {
      setMessage('Credenciais inválidas');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Senha" />
      <button type="submit">Entrar</button>
      <p>{message}</p>
    </form>
  );
}
