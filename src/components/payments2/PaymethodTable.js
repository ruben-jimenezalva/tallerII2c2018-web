import React from 'react';
import Axios from "axios";
import ApiLinks from "../utils/ApiLinks";
import Auth from "../utils/auth";
import {Alert} from 'react-bootstrap';

import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

class PaymethodTable extends React.Component {
    render() {
      if (this.props.data) {
        return (
          <BootstrapTable data={ [this.props.data] }>
            <TableHeaderColumn dataField='method' isKey={ true }>Method</TableHeaderColumn>
            <TableHeaderColumn dataField='expiration_month'>Expiration Month</TableHeaderColumn>
            <TableHeaderColumn dataField='expiration_year'>Expiration Year</TableHeaderColumn>
            <TableHeaderColumn dataField='number'>Number</TableHeaderColumn>
            <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
          </BootstrapTable>)
      } else {
        return (<p>?</p>);
      }
    }
  }

  export default PaymethodTable;