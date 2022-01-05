import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SideBar from '../SideBar/SideBar.jsx';
import Header from '../header/Header.jsx'
// import { Schema } from '@mui/icons-material';
import Grid from '@material-ui/core/Grid';

/*Intro*/

/****CQL SCHEMA Snapshot****/
function createDataSnapshot(name, genre, title, releasedate, avgrating) {
  return { name, genre, title, releasedate, avgrating };
}

const rows = [
  createDataSnapshot('Data Types', 'text', 'text', 'date', 'blob'),
  createDataSnapshot('Data Models', 'partition key', 'clustering key', 'N/A', 'N/A'),
  createDataSnapshot('Node1', 'Action', 'No Time To Die', '10-08-2021', '87%'),
  createDataSnapshot('Node2', 'Animation', 'Your Name', '04-07-2017', '96%'),
  createDataSnapshot('Node3', 'Comedy', 'Grown Ups', '06-25-2010', '90%'),
  createDataSnapshot('Node4', 'Drama', 'Little Women', '12-25-2019', '90%'),
  createDataSnapshot('Node5', 'Sci-Fi', 'The Matrix: Resurrections', '12-22-2021', '63%'),
  createDataSnapshot('Node6', 'Thriller', 'I Care A Lot', '02-19-2021', '58%'),
];

export default function DataSnapshotTable() {
  return (
    <Grid container spacing= {0}>
    <Grid item xs={12}>
    <Header/>
    </Grid>
    <Grid item xs={2}>
    <SideBar />
    </Grid>
    <Grid item xs={10}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h1>CQL SCHEMA SNAPSHOT</h1></TableCell>
            <TableCell align="center">Movie Genre</TableCell>
            <TableCell align="center">Movie Title</TableCell>
            <TableCell align="center">Release Date</TableCell>
            <TableCell align="center">Average Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.genre}</TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.releasedate}</TableCell>
              <TableCell align="center">{row.avgrating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Grid>
  );
}
