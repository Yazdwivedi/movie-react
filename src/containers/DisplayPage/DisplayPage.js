import React from "react";
import Aux from "../../hoc/HOC"
import DisplaySelected from "../../components/DisplaySelected/DisplaySelected";
import { Route } from "react-router-dom";
import CustomForm from "../../components/CustomForm/CustomForm";
import "./DisplayPage.css";

class DisplayPage extends React.Component {
    constructor (props) {
        super (props);
        this.props.findItem(this.props.match.params.id);  
        this.state = {
            controls : [
                { label : "Name" , type : "text" , value : ""},
                { label : "Number of Tickets" , type : "number" , value : null},
                { label : "Date" , type : "date" , value : null},  
                { label : "Book" , type : "submit" }  
            ]
        } 
    }

    handleChange = (event, label) => {

        const stateClone = [...this.state.controls];

        const index = stateClone.indexOf(stateClone.find(control => control.label === label)); 

        stateClone[index].value = event.target.value

        this.setState ({
            controls : stateClone
        })

    }

    onSubmit = () => {
        console.log(this.state.controls);
    }

    render () {    
        return (
            <Aux>
                <DisplaySelected selectedItem = { this.props.selectedItem } ></DisplaySelected>
                <Route 
                    path = {this.props.match.url + "/book" } 
                    render = { props => 
                        <div className = "BookingForm">
                            <CustomForm 
                                controls = { this.state.controls } 
                                changed = { (event, label) => this.handleChange(event, label) }
                                onSubmit = { this.onSubmit }>    
                            </CustomForm>
                        </div>    
                     } />
            </Aux>
        )
    }
}

export default DisplayPage;