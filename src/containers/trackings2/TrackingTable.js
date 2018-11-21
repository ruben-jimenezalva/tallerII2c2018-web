import React from 'react';
import Axios from "axios";
import ApiLinks from "../utils/ApiLinks";
import Auth from "../utils/auth";
import {Alert} from 'react-bootstrap';

import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

export default class TrackingTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = { trackings: "",
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
            .get(ApiLinks.Trackings, config)
            .then(function (response) {
                currentComponent.setState({trackings: response.data});
            })
            .catch(function (error) {
                console.log(error);
                currentComponent.setState({responseError: true});                
            });
    }


    cellButton(cell, row, enumObject, rowIndex) {
        return (
            <button type="button" title="Edit Tracking" className="btn btn-success" onClick={() => this.onClickEditTracking(cell, row, rowIndex)}>
                Edit
            </button>
        )
     }


    onClickEditTracking(cell, row, rowIndex){
        this.props.onCellEdit(row);
    }

    indexNumber(cell, row, enumObject, rowIndex) { return (<div>{rowIndex + 1}</div>) }

    render() {
            if (this.state.responseError) {
                return(
                    <Alert className="text-center" id="QuerySuccesfully" bsStyle="danger">
                        Your session has <strong>expired</strong> or the system is <strong>not available</strong> 
                    </Alert>)
            }else if(this.state.trackings){
                var ArrayTracking = this.state.trackings;

                return (
                    <div>
                    <BootstrapTable data={ ArrayTracking } remote={this.remote} search pagination
                        tableStyle={ { border: '#0000FF 2.5px solid' } }>
                        <TableHeaderColumn width={'35px'} dataField="any" dataFormat={this.indexNumber}>#</TableHeaderColumn>
                        <TableHeaderColumn isKey hiddenOnInsert={true} dataField='id'>Tracking Id</TableHeaderColumn>
                        <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
                        <TableHeaderColumn dataField='updateAt'>update At</TableHeaderColumn>
                        <TableHeaderColumn width={'70px'} hiddenOnInsert={true} dataField='button' dataFormat={this.cellButton.bind(this)} >Actions</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                );
            }else{
                return <p className="text-center">Loading...</p>
            }
    }
}