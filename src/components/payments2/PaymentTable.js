import React from 'react';
import Axios from "axios";
import ApiLinks from "../utils/ApiLinks";
import Auth from "../utils/auth";
import {Alert} from 'react-bootstrap';
import PaymethodTable from './PaymethodTable';

import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

export default class PaymentsTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = { payments: "",
            responseError: false,
            responseSuccessfully: false,
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({responseError: false});
        this.componentWillMount();    
    }

    componentWillMount() {
        this.setState({responseError: false});
        var config = {
            headers: { 'Authorization':Auth.getToken() }
        };

        let currentComponent = this;

        Axios
            .get(ApiLinks.Payments, config)
            .then(function (response) {
                currentComponent.setState({payments: response.data});
            })
            .catch(function (error) {
                console.log(error);
                currentComponent.setState({responseError: true});                
            });
    }


    cellButton(cell, row, enumObject, rowIndex) {
        return (
            <button type="button" title="Edit Payments" className="btn btn-danger" onClick={() => this.onClickEditPayments(cell, row, rowIndex)}>
                Edit
            </button>
        )
     }

     showPaymethod(){
         return(
            <p>
                Press To View the Pay Method
            </p>
        );
     }


    onClickEditPayments(cell, row, rowIndex){
        this.props.onCellEdit(row);
    }

    isExpandableRow(row) {
        return true;
    }

    expandComponent(row) {
        return (
          <PaymethodTable data={ row.paymentMethod } />
        );
    }

    indexNumber(cell, row, enumObject, rowIndex) { return (<div>{rowIndex + 1}</div>) }

    render() {

            const options = {
                expandRowBgColor: 'rgb(242, 255, 163)',
                expandBy: 'column'  // Currently, available value is row and column, default is row
            };
        
            if (this.state.responseError) {
                return(
                    <Alert className="text-center" id="QuerySuccesfully" bsStyle="danger">
                        Your session has <strong>expired</strong> or the system is <strong>not available</strong> 
                    </Alert>)
            }else if(this.state.payments){
                var ArrayPayments = this.state.payments;

                return (
                    <div>
                    <BootstrapTable data={ ArrayPayments } remote={this.remote} search pagination exportCSV
                        options={ options }
                        expandableRow={ this.isExpandableRow }
                        expandComponent={ this.expandComponent }                 
                        tableStyle={ { border: '#0000FF 2.5px solid' } }>
                        <TableHeaderColumn expandable={ false }width={'35px'} dataField="any" dataFormat={this.indexNumber}>#</TableHeaderColumn>
                        <TableHeaderColumn expandable={ false } isKey hiddenOnInsert={true} dataField='transaction_id'>Payments Id</TableHeaderColumn>
                        <TableHeaderColumn expandable={ false } dataField='status' >Status</TableHeaderColumn>
                        <TableHeaderColumn expandable={ false } dataField='currency'>Currency</TableHeaderColumn>
                        <TableHeaderColumn expandable={ false } dataField='value'>Value</TableHeaderColumn>
                        <TableHeaderColumn dataFormat={this.showPaymethod.bind(this)}>paymentMethod</TableHeaderColumn>
                        <TableHeaderColumn expandable={ false }width={'70px'} hiddenOnInsert={true} dataField='button' dataFormat={this.cellButton.bind(this)} >Actions</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                );
            }else{
                return <p className="text-center">Loading...</p>
            }
    }
}