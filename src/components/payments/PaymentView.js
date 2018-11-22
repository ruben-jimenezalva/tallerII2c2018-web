import React,{Component} from "react";
import query from "./Constants";
import PaymentList from "./query-payments/PaymentList";
import PaymethodList from "./query-payments/PaymethodList";
import SinglePayment from "./query-payments/SinglePayment";


class PaymentView extends Component{
    constructor(props, context) {
        super(props, context);
        
        this.state = (
            {optionListPayment: false},
            {optionListPaymethod: false},
            {optionSinglePayment: false},
            {dataToSend : ""},
            {codQuery : ""}
        );
    }
    

    handleQuery(cod,data){

        this.setState({dataToSend : data});
        this.setState({codQuery : cod});
        
        switch(cod){
            case query.ALL_PAYMENTS:
                this.setState({optionListPayment: true});
                this.setState({optionListPaymethod: false});
                this.setState({optionSinglePayment: false});
                break;

            case query.ALL_PAYMETHODS:
                this.setState({optionListPaymethod: true});
                this.setState({optionListPayment: false});
                this.setState({optionSinglePayment: false});
                break;

            case query.SINGLE_PAYMENT:
            case query.UPDATE_PAYMENT:
            case query.CREATE_PAYMENT:
                this.setState({optionSinglePayment: true});
                this.setState({optionListPayment: false});
                this.setState({optionListPaymethod: false});
                break;

            default: break;

        }
    }

    componentWillReceiveProps(nextProps){
        this.handleQuery(nextProps.codQuery,nextProps.data);
    }


    render(){

        if(this.state.optionListPayment){
            return(
                <PaymentList />
            );
        }else if (this.state.optionListPaymethod){
            return(
                <PaymethodList />
            );
        }else if (this.state.optionSinglePayment){
            return(
                <SinglePayment codQuery={this.state.codQuery} data={this.state.dataToSend}/>
            );
        }
        return(
            <div>
                <h1 className="text-center">
                    SELECT ONE OPTION 
                </h1>
            </div>
        );
    }
}

export default PaymentView;