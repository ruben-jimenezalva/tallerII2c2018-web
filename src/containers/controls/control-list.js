import React from "react"
import Control from "./control-row"

class ControlList extends React.Component{
    render(){
        return (
            <ul className = "media-list">
                {
                    this.props.list.map((control)=>{
                        return <Control name = {control.name}
                                        description = {control.description}/>
                    })
                }
            </ul>
        );
    }
}

export default ControlList;