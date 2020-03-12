import React from "react";
import Aux from "../../hoc/Aux"
import DisplaySelected from "../../components/DisplaySelected/DisplaySelected";

class DisplayPage extends React.Component {
    constructor (props) {
        super (props);
        this.props.findItem(this.props.match.params.id);    
    }

    render () {    

        return (
            <Aux>
                <DisplaySelected selectedItem = { this.props.selectedItem }></DisplaySelected>
            </Aux>
        )
    }
}

export default DisplayPage;