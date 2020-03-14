import NavBar from "../components/Navbar/Navbar"
import React from "react";

const Aux = ( props ) => {
    return (
        <div>
            <NavBar></NavBar>
            {props.children}
        </div>
    )
}

export default Aux;