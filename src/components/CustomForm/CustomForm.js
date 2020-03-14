import React from "react";
import Control from "./CustomControl/CustomControl";
import Form from 'react-bootstrap/Form';

const customForm = ( props ) => {

    const controls = props.controls.map ( (control, index) => {
        return <Control 
                    key = { index } 
                    label = { control.label } 
                    onSubmit = { props.onSubmit }
                    type = {control.type} 
                    changed = { (event, label) => props.changed(event, label) } >        
                </Control>
    } )

    return  (
        <div>
           <Form>
                {
                    controls
                }
            </Form>     
        </div>
    )
}


export default customForm;