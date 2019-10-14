import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  paper: {
    // marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    // marginBottom: theme.spacing(2),
  },  
  table: {
    minWidth: 50,
  },
});

function TableComponent(props){
  const classes = useStyles();
  return(
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="a" size="small">
        <TableHead>
          <Theader theader={props.theader} />
        </TableHead>
        <TableBody>
          <Tbody tbody={props.tbody}/>
        </TableBody>
      </Table>
    </Paper>
  );
}

function Theader(props){
  let theaders = []
  props.theader.map((theader, index) =>{
     return theaders.push(<TableCell align="center" key={index}><strong>{theader}</strong></TableCell>);
    } 
  )
  return <TableRow>{theaders}</TableRow>;
}

function Tbody(props){
  let tbodyRows= [];
  props.tbody.map((bodyRow,index) =>{
     return tbodyRows.push(
        <TableRow key={index}>
          <TableCell component="th" scope="row" align="center">{bodyRow.firstName}</TableCell>
          <TableCell align="center">{bodyRow.lastName}</TableCell>
          <TableCell align="center">{bodyRow.email}</TableCell>
          <TableCell align="center">{bodyRow.code}</TableCell>
        </TableRow>
      );
    } 
  )
  return tbodyRows;
}

export default TableComponent;