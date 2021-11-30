import React from 'react';

const Todo = props => {
  const handleClick = ()=> {
    props.handleToggleTodo(props.item);
  }

  return (
    <div onClick={handleClick} className={`${props.item.completed ? 'completed' : ''}`}>
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;


// className={`item${props.item.completed ? 'completed' : ''}`}