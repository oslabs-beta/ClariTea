import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logoblack from '../assets/ClariTea-Black-Flat_200_x_100_px.png';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'black', paddingLeft: "0px" }}>
        <Toolbar className="toolbar-header" style={{ paddingLeft: "0px" }}>
          <div>
            <img id="logoHeader" src={logoblack} />
          </div>
          <div>
            <Button variant="text" style={{ textDecoration: 'none', color: 'white' }}>
              <a style={{ display: 'flex', textDecoration: 'none', alignItems: 'center', color: 'white' }} color="inherit" href="https://github.com/oslabs-beta/cassandra-visualizer" target="_blank">
                <i className="fab fa-github fa-3x" style={{ fontSize: "30px" }}></i>
                <p>Github</p>
              </a>
            </Button>
            <Button variant="text" style={{ textDecoration: 'none', color: 'white' }}>
              <a style={{ display: 'flex', textDecoration: 'none', alignItems: 'center', color: 'white' }} color="inherit" href="https://claritea.dev" target="_blank">
                <i className="fab fa-github fa-3x" style={{ fontSize: "30px" }}></i>
                <p>Docs</p>
              </a>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};