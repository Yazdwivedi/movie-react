import React from "react";
import SideBarItem from "./SidebarItem/SidebarItem";
import ListGroup from 'react-bootstrap/ListGroup';

const sidebar = ( props ) => {
    
    const sideItems = props.sideItems.map( (item, index) => {
        return <li><SideBarItem key={ index } item = { item }></SideBarItem></li>
    } )

    return (
        <div>
            <ListGroup style={{marginTop:"13.5%"}}>
                {
                    props.sideItems.map( (item, index) =>   <ListGroup.Item action key={ index } >
                                                                <SideBarItem 
                                                                    item = { item }>
                                                                </SideBarItem>
                                                            </ListGroup.Item> )
                }
            </ListGroup>    
        </div>    
    )
}

export default sidebar;