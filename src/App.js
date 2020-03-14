import React from 'react';
import MainPage from "./containers/MainPage/MainPage";
import DisplayPage from "./containers/DisplayPage/DisplayPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {

  state = {
    items : [
        { id:"1", name : "Movie1", info : "Working", type:"movies" },
        { id:"2", name : "Sports1", info : "Yes it is great", type:"sports" },
        { id:"3", name : "Sports2", info : "Working", type:"sports" },
        { id:"4", name : "Sports3", info : "Working",type:"sports" },
        { id:"5", name : "Event1", info : "Working", type:"event" },
        { id:"6", name : "Movie2", info : "Working", type:"movies" },
        { id:"7", name : "Event2", info : "Working", type:"events" },   
    ],
    sideItems : [
        "First",
        "Second"  
    ],
    selectedItem : null
}

  getItemById = ( id ) => {
    const item = this.state.items.find( item => item.id===id )
    this.setState ( {
      selectedItem : item
    } )
  }

  render () {
    return (
      <div>
        <Router>
          <Route path = "/" exact render = { props => <MainPage 
                                                      {...props} 
                                                      items = {this.state.items} 
                                                      sideItems = {this.state.sideItems} >

                                                      </MainPage> 
                                            } />  
          <Route path = "/display/:id" render = { props => <DisplayPage 
                                                            {...props}  
                                                            findItem = { (id) => this.getItemById(id) }
                                                            selectedItem = { this.state.selectedItem }
                                                            /> 
                                                } />
        </Router>
      </div>  
    )
  }
}

export default App;
