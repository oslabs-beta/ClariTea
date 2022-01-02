import React, { useState } from 'react';
import { Navigate } from 'react-router';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import regeneratorruntime from 'regenerator-runtime';
import SideBar from './SideBar.jsx';
import Header from '../header/header.jsx';

function ConnectForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [filepath, setFilepath] = useState('');
  const [connected, setConnected] = useState(false);
  const [results, setResults] = useState('');
  let error;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqOptions = { username, password, filepath };
    const response = await axios.post('/api/fileUpload', reqOptions);
    if (response.data.error) error = response.data.error;
    if (response.data.results) {
      setResults(response.data.results);
      console.log(response.data.results)
      setConnected(true);
      navigate('/tree', {state: { results: response.data.results }})
    }
  };


  return (
    <div >
      <Header />
      <form className="connectForm" onSubmit={handleSubmit}>
        <SideBar />
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
