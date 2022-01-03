import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

/****CQL DATA TYPES TABLE****/
function createDataTypes(name, genre, title, releasedate, avgrating) {
  return { name, genre, title, releasedate, avgrating };
}

const rows = [
  createDataTypes('Data Type', 'text', 'text', 'date', 'blob'),
];

export default function DataTypeTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h1>CQL DATA TYPES</h1></TableCell>
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
  );
}
