import React, { useState } from 'react';
import { Navigate } from 'react-router';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import regeneratorruntime from 'regenerator-runtime';

function ConnectForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [filepath, setFilepath] = useState('');
  const [connected, setConnected] = useState(false);
  let error;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqOptions = { username, password, filepath };
    const response = await axios.post('/api/fileUpload', reqOptions);
    if (response.data.error) {
    error = response.data.error
    alert('Error occurred while connecting', error);
    }
    if (response.data.success) {
      alert('Connected');
      setConnected(true);
      navigate('/tree')
    }
  };


  return (
    <div>
      <h1>Connect</h1>
      <form className="connectForm" onSubmit={handleSubmit}>
        <label id="username">Username </label>
        <input required type="text" onChange={(e) => setUsername(e.target.value)} />
        <label id="password">Password </label>
        <input required type="text" onChange={(e) => setPassword(e.target.value)} />
        <label id="filepath">Filepath </label>
        <input required type="text" onChange={(e) => setFilepath(e.target.value)} />
        <button id="connectBtn" type="submit">
          Connect
        </button>
      </form>
      <div>{error}</div>
    </div>
  );
};

export default ConnectForm;
