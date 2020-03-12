import React from "react";

const displaySelected = ( props ) => {
    const display = props.selectedItem ?
                    <div>
                        <p>props.selectedItem.name</p>
                        <p>props.selectedItem.info</p>
                    </div> 
                    : <h1>Loading...</h1>       

    return (
        { display }
    )
}
export default displaySelected;