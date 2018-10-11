import React from "react"

class Control extends React.Component{
    render(){
        return(
            <li className = "media">
                <div className = "media-body">
                    <span className = "label label-primary">{this.props.name}</span>
                    <p>{this.props.description}</p>
                </div>
            </li>
        );
    }
}

export default Control;