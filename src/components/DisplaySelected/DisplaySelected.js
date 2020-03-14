import React from "react";
import Button from 'react-bootstrap/Button';
import "./DisplaySelected.css";
import { withRouter } from "react-router-dom";

const displaySelected = ( props ) => {
    const display = props.selectedItem ?
                    <div>
                        <div className = "MovieDetails">
                            <h3>{props.selectedItem.name}</h3>
                            <hr/>
                            <p>{props.selectedItem.info}</p>
                            <Button 
                                variant="primary" 
                                onClick = { () =>  props.history.push(props.match.url+"/book") }>
                                Book Tickets Now
                            </Button>
                        </div>
                    </div> 
                    : <h1>Loading...</h1>       


    return (
        display
    )
}
export default withRouter(displaySelected);