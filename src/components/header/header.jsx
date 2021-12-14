import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cassandra Visualizer
          </Typography>
          <Button color="inherit" style={{textDecoration: 'none', color: 'white'}}>
          <a style={{ display: 'flex', textDecoration: 'none', alignItems: 'center', color: 'white'}} color="inherit" href="https://github.com/oslabs-beta/cassandra-visualizer" target="_blank">
              <i className="fab fa-github fa-3x" style={{ fontSize: "30px"}}></i>
              <p>Github</p>
            </a>
          </Button>
          <Button href="" color="inherit">Demo</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}