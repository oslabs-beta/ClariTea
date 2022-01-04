import React, { useState } from 'react';
import { Navigate } from 'react-router';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import regeneratorruntime from 'regenerator-runtime';
import SideBar from './SideBar.jsx';
import Header from '../header/header.jsx';
import Grid from '@material-ui/core/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import logo from '../assets/ClariTea-Light_Mode_Flat.png'


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
      navigate('/tree', { state: { results: response.data.results } })
    }
  };


  return (

    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={2}>
        <SideBar />
      </Grid>
      <Grid item xs={10}>
        <center>
          <img src={logo} width="200"></img>
        </center>
        <br />
        <center>
          <form className="connectForm" onSubmit={handleSubmit}>
            <TextField id="username" label="Username" variant="outlined" required type="text" onChange={(e) => setUsername(e.target.value)} />
            <br />
            <br />
            {/* <Typography id="password">Password </Typography> */}
            <TextField id="password" label="Password" variant="outlined" required type="text" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <br />
            {/* <Typography id="filepath">Filepath </Typography> */}
            <TextField id="filedpath" label="Filepath" variant="outlined" required type="text" onChange={(e) => setFilepath(e.target.value)} />
            <br />
            <br />
            <br />
            <Button variant="contained" id="connectBtn" type="submit">
              Connect
            </Button>

          </form>
        </center>
        <div>{error}</div>
      </Grid>
    </Grid>

  );
};

export default ConnectForm;
