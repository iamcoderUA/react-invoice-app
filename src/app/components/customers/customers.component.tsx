import React from 'react';

import { connect } from 'react-redux';

import { Dispatch } from 'redux';

import { createStyles, makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { RootState } from '../../store/store';
import { actions } from '../../store/customers/actions';
import { getCustomersState } from '../../store/customers/state';
import { getCustomersRequestState } from '../../store/request/nested-states/customers/nested-states/customers-get/state';


const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      marginTop: '60px',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }),
);

const mapStateToProps = (state: RootState) => ({
  customers: getCustomersState(state),
  request: getCustomersRequestState(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getCustomers: () => dispatch(actions.getCustomers()),
});

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Customers: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  
  if (!props.request.loading && !props.request.loaded) {
    props.getCustomers();
  }
  
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.customers.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers);