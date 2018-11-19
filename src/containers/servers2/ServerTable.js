import React from 'react';
import Axios from "axios";
import ApiLinks from "../utils/ApiLinks";
import Auth from "../utils/auth";
import {Alert} from 'react-bootstrap';

import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

export default class ServerTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = { servers: "",
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
            .get(ApiLinks.Servers, config)
            .then(function (response) {
                currentComponent.setState({servers: response.data});
            })
            .catch(function (error) {
                console.log(error);
                currentComponent.setState({responseError: true});                
            });
    }


    cellButton(cell, row, enumObject, rowIndex) {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" title="Reset Token" className="btn btn-primary" onClick={() => this.onClickResetToken(cell, row, rowIndex)}>
                    Reset
                </button>
                <button type="button" title="Ping to Server" className="btn btn-success" onClick={() => this.onClickPingServer(cell, row, rowIndex)}>
                    Ping
                </button>
                <button type="button" title="Edit Server" className="btn btn-warning" onClick={() => this.onClickEditServer(cell, row, rowIndex)}>
                    Edit
                </button>
            </div>
        )
     }

    onClickResetToken(cell, row, rowIndex){
        this.props.onResetServer(row);
     }

    onClickPingServer(cell, row, rowIndex){
        this.props.onPingServer(row);
    }

    onClickEditServer(cell, row, rowIndex){
        //alert(row);
        this.props.onCellEdit(row);
    }

    remote(remoteObj) {
        remoteObj.insertRow = true;
        remoteObj.dropRow = true;
        return remoteObj;
      }


    render() {
            if (this.state.responseError) {
                return(
                    <Alert className="text-center" id="QuerySuccesfully" bsStyle="danger">
                        Your session has <strong>expired</strong> or the system is <strong>not available</strong> 
                    </Alert>)
            }else if(this.state.servers){
                var ArrayServer = this.state.servers.server;

                const selectRow = {
                    mode: 'checkbox',
                    clicToSelect: true,
                };

                return (
                    <div>
                    <BootstrapTable data={ ArrayServer } selectRow={ selectRow } remote={this.remote} insertRow deleteRow search pagination
                        options={ { onAddRow: this.props.onAddRow , onDeleteRow: this.props.onDeleteRow } }
                        tableStyle={ { border: '#0000FF 2.5px solid' } }>
                        <TableHeaderColumn isKey hiddenOnInsert={true} dataField='id'>Server Id</TableHeaderColumn>
                        <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='createdBy'>created By</TableHeaderColumn>
                        <TableHeaderColumn hiddenOnInsert={true} dataField='createdTime'>created Time</TableHeaderColumn>
                        <TableHeaderColumn hiddenOnInsert={true} dataField='_rev'>_rev</TableHeaderColumn>
                        <TableHeaderColumn hiddenOnInsert={true} dataField='lastConnection'>lastConnection</TableHeaderColumn>
                        <TableHeaderColumn hidden={true} dataField='url'>Url</TableHeaderColumn>
                        <TableHeaderColumn width={'190px'} hiddenOnInsert={true} dataField='button' dataFormat={this.cellButton.bind(this)} >Actions</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                );
            }else{
                return <p className="text-center">Loading...</p>
            }
    }
}