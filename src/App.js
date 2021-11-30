import React, { useState } from "react";
import ReactDOM from 'react-dom';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import './style.css'

const myTodoList = [
  {
    task: 'Wash Dishes',
    id: 8949,
    completed: false,
  },
  {
    task: 'Fold Laundry',
    id: 2341,
    completed: false,
  },
  {
    task: 'Make Dinner',
    id: 2394,
    completed: false,
  },
];

class App extends React.Component {
  constructor(){
    super();
    this.state={
      myTodoList: myTodoList
    }
  }

  handleToggle = () => {
    //Clear list
    //1. Get a button press response.
    //2. set a new state and retain old state
    //3. make groceries contain all groceries where purchased === false
    //4. profit
    this.setState({
      ...this.state,
      myTodoList: this.state.myTodoList.filter(item => {
        return (!item.completed);
      })
    });
  }

  handleAddTodo = (todo)=> {
    //Add Item
    //1. get button click
    //2. set and retain our state
    //3. change groceries to include a new item

    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      ...this.state,
      myTodoList: [...this.state.myTodoList, newTodo]
    });
  }


handleToggleTodo = (todo)=> {
  this.setState({
    ...this.state,
    myTodoList: this.state.myTodoList.map(t => {
      if (t.id === todo.id) {
        return {...t, completed: !t.completed}
      } else {
        return t;
      }
    })
  })
  console.log(todo)
}

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='container'>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm handleAddTodo= {this.handleAddTodo}/>
        </div>
        <TodoList handleToggleTodo = {this.handleToggleTodo} myTodoList={this.state.myTodoList}/>
        <button onClick={this.handleToggle}>Clear Completed</button>
      </div>


    );
  }
}

export default App;
