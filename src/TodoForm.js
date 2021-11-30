import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            input: ''
        }
    }

handleChanges = e => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
    };

handleClick = (e)=> {
    e.preventDefault();
        this.props.handleAddTodo(this.state.input);
    }


render(){
    return (
        <form>
            <h1>Todo List: MVP</h1>
            <input onChange={this.handleChanges} type="text" name="item" />
            <button onClick={this.handleClick}>Add new Todo</button>
        </form>
    )
}

}

export default TodoForm;