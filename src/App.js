import React, { Component } from 'react';
import {v4 as uuid} from "uuid";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
 


class App extends Component {
 state={
   items: [{id:1, title:"Wake Up"}, {id:2, title:"make breakFast"}],
   id: uuid(),
   item:'',
   editItem:false
  };

  handleChange=(e)=>{
    console.log('handle change')
  }
  handleSubmit=(e)=>{
    console.log('handle Submit')
  }
  handleEdit=(id)=>{
    console.log(`handle edit $(id)`)
  }
  clearList=()=>{
    console.log('clear List')
  }
  handleDelete=(id)=>{
    console.log(`handle edit $(id)`)
  }




  render() {
    return(
    <div className="container">
      <div classname="row">
         <div className="col-10 mx-auto col-md-8 mt-5">
           <h3 className="text-capitalize text-center">ToDo Input</h3>
           <TodoInput item={this.state.item}
            handleChange={this.handleChange}
             handleSubmit={this.handlesubmit} 
             editItem={this.state.editItem}
           />
          <TodoList items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
           /> 
         </div>
      </div>
    </div>);
    
  }
}

export default App;
