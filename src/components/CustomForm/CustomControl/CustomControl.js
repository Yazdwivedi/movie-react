import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const control = (props) => {
    switch (props.type) {
        case "submit"   : return (
                            <Button onClick = { props.onSubmit } variant="primary" type="button">
                                { props.label }
                            </Button>
                            )
        default         : return (
                            <Form.Group>
                                <Form.Label>{props.label}</Form.Label>
                                <Form.Control onChange = { (event) => props.changed(event, props.label) } type={props.type}/>   
                            </Form.Group>   
                         )               
    }
}

export default control;