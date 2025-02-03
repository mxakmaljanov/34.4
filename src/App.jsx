import React, { useState } from 'react';
import './App.css';

// 1-masla
const LoginForm = () => {
  const [email='akmaljanov.712', setEmail] = useState('');
  const [password='123456', setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setError('Email kiritilishi shart!');
    } else {
      setError('');
      console.log('Email:', email);
      console.log('Parol:', password);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>1. Login Formasi</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Parol:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div className="error">{error}</div>}
      <button type="submit">Kirish</button>
    </form>
  );
};

// 2-masala
const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Parollar mos emas!');
    } else {
      setError('');
      console.log('Ism:', firstName);
      console.log('Familiya:', lastName);
      console.log('Email:', email);
      console.log('Parol:', password);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>2. Ro'yxatdan O'tish Formasi</h2>
      <div>
        <label>Ism:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Familiya:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Parol:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Parolni tasdiqlash:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {error && <div className="error">{error}</div>}
      <button type="submit">Ro'yxatdan
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.length < 20) {
      setError('Xabar kamida 20 ta belgidan iborat bo\'lishi kerak!');
    } else {
      setError('');
      console.log('Ism:', name);
      console.log('Email:', email);
      console.log('Xabar:', message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>3. Kontakt Formasi</h2>
      <div>
        <label>Ism:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Xabar:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      {error && <div className="error">{error}</div>}
      <button type="submit">Yuborish</button>
    </form>
  );
};

// App komponenti
const App = () => {
  return (
    <div className="App">
      <LoginForm />
      <RegisterForm />
      <ContactForm />
    </div>
  );
};

export default App;
