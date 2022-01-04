import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Image } from '@mui/icons-material';
import logoblack from '../assets/logoblack.png'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: 'black', paddingLeft: "0px"}}> 
        <Toolbar className="toolbar-header" style={{paddingLeft: "0px"}}>
        <div>
        <img id="logoHeader" src={logoblack} />
        </div>
        <div>
          <Button color="inherit" style={{textDecoration: 'none', color: 'white'}}>
          <a style={{ display: 'flex', textDecoration: 'none', alignItems: 'center', color: 'white'}} color="inherit" href="https://github.com/oslabs-beta/cassandra-visualizer" target="_blank">
              <i className="fab fa-github fa-3x" style={{ fontSize: "30px"}}></i>
              <p>Github</p>
            </a>
          </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}