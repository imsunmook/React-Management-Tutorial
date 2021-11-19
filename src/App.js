import logo from './logo.svg';
import './App.css';

import Customer from './components/Customer';

import React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import {withStyles}  from '@mui/styles';
import { render } from '@testing-library/react';




const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }

})


const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '830120',
  'gender' : '남자',
  'job' : '무직',
},
{
'id' : 2,
'image' : 'https://placeimg.com/64/64/2',
'name' : 'A',
'birthday' : '830120',
'gender' : '남자',
'job' : 'B',
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : 'B',
  'birthday' : '830120',
  'gender' : '남자',
  'job' : 'B',
  },
]
class App extends React.Component {
render(){
  const { classes } = this.props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>a</TableCell>
            <TableCell>b</TableCell>
            <TableCell>c</TableCell>
            <TableCell>d</TableCell>
            <TableCell>e</TableCell>
            <TableCell>f</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}                    
              />
          )
        })}
        </TableBody>
      </Table>

    </Paper>
  );
      }
}

export default withStyles(styles)(App);
