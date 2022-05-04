import React, { useState } from 'react';
import { Navigate } from 'react-router';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import regeneratorruntime from 'regenerator-runtime';
import SideBar from './SideBar.jsx';
import Header from '../header/Header.jsx';
import Grid from '@material-ui/core/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import logo from '../assets/ClariTea-Light_Mode_Flat.png';


function ConnectForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [filepath, setFilepath] = useState('');
  const [connected, setConnected] = useState(false);
  const [results, setResults] = useState('');
  let error;
  const navigate = useNavigate();

  //Handles async call to retrieve client schema information after proper connection
  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqOptions = { username, password, filepath };
    const response = await axios.post('/api/fileUpload', reqOptions);
    if (response.data.error) error = response.data.error;
    //On successful connection, user will be navigated to the tree page for visualization
    if (response.data.results) {
      setResults(response.data.results);
      console.log(response.data.results)
      setConnected(true);
      navigate('/tree', { state: { results: response.data.results } })
    }
  };

  return (
    <Grid container spacing={0} >
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={1}>
        <SideBar />
      </Grid>
      <Grid item xs={11} style={{ width: '100em', backgroundColor: '#F8F8F8' }}>
        <center>
          <img src={logo} width="200"></img>
        </center>
        <br />
        <center>
          <form className="connectForm" onSubmit={handleSubmit}>
            <TextField id="username" label="Client ID" variant="outlined" required type="text" onChange={(e) => setUsername(e.target.value)} />
            <br />
            <br />
            <TextField id="password" label="Client Secret" variant="outlined" required type="text" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <br />
            <TextField id="filepath" label="Filepath" variant="outlined" required type="text" onChange={(e) => setFilepath(e.target.value)} />
            <br />
            <br />
            <br />
            <Button variant="contained" id="connectBtn" type="submit" style={{ fontFamily: 'Sans-Serif', backgroundColor: '#3399FF' }}>
              Connect
            </Button>
          </form>
        </center>
        <div>{error}</div>
      </Grid >
    </Grid >
  );
};

export default ConnectForm;
