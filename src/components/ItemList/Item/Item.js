import React from "react";
import "./Item.css";

const item = ( props ) => {
    return (
        <div onClick = {props.click} className="Item">
            <p>Name : { props.itemName }</p>
            <p>Info : { props.itemInfo }</p>
        </div>    
    )
}

export default item;