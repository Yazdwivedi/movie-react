import React from "react";
import "./ItemList.css";
import Item from "./Item/Item";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const getJsx = ( props, type ) => {
    return props.items
            .filter( item => item.type === type )
            .map( (item) => {
                return <Col key = {item.id}
                            className="item" 
                            style={{marginTop : "3%"}} 
                            md={4}>
                                <Item 
                                    key = {item.id}
                                    click = {() => props.displayRedirect( item.id )}
                                    itemName={item.name} 
                                    itemInfo={item.info}>
                                </Item>
                        </Col>
    } )
}

const itemList = ( props ) => {

    const movies = getJsx({...props}, "movies");

    const sports = getJsx({...props}, "sports");

    const events = getJsx({...props}, "events");

    return (
        <div>
            <Container>  
            <h3 style={{marginTop : "3%"}}>Movies</h3>
                <Row>
                    {
                        movies
                    }  
                </Row>
            </Container> 
            <Container>  
            <h3 style={{marginTop : "3%"}}>Sports</h3>
                <Row>
                    {
                        sports
                    }  
                </Row>
            </Container>    
            <Container>  
            <h3 style={{marginTop : "3%"}}>Events</h3>
                <Row>
                    {
                        events
                    }  
                </Row>
            </Container>            
        </div>    
    )
}

export default itemList;