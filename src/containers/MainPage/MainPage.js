import React from "react";
import Aux from "../../hoc/HOC";
import "./MainPage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import ItemList from "../../components/ItemList/ItemList";


class MainPage extends React.Component {

    handleDisplay = ( id ) => {
        this.props.history.push("/display/" + id);
    } 

    render () {
        return (
            <Aux>
                <div className = "flex-container">
                    <div className = "Sidebar">
                        <h3 style={{marginTop : "12%"}}>Trending</h3>
                        <Sidebar sideItems = { this.props.sideItems }></Sidebar>        
                    </div>
                    <div className = "ItemList">
                        <ItemList displayRedirect = {(id) => this.handleDisplay(id)} items = { this.props.items }></ItemList> 
                    </div> 
                </div>
            </Aux>    
        )
    }
}

export default MainPage;