import React from 'react';

const Todo = props => {
  const handleClick = ()=> {
    props.handleToggleTodo(props.todo);
  }

  return (
    <div onClick={handleClick} className={`item${props.item.completed ? 'completed' : ''}`}>
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;