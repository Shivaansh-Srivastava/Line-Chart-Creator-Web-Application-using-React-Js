import React from "react";
 
class Information extends React.Component{
    render(){
        return (
            <div>
                <h3>Point:</h3>
                <h3>X: {this.props.info.x}</h3>
                <h3>Y: {this.props.info.y}</h3>
            </div>
        )
    }
}
export default Information