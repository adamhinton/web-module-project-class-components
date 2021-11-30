import React from 'react';
import Todo from './Todo';

const TodoList = props =>{
    return (
        <div>
        {props.myTodoList.map(item => (
          <Todo handleToggleTodo={props.handleToggleTodo} key={item.id} item={item} />
        ))}
        </div>
    );
}

export default TodoList;

