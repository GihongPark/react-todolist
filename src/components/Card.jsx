import React, { useState, useEffect } from 'react';

import TodoList from './TodoList';
import TodoInput from './TodoInput';

function Card() {
    const [todoList, setTodoList] = useState([]);


    //
    const onCreateTodo = (value) => {
        setTodoList([...todoList, value]);
    }

    return (
        <div className='todo-list-card'>
            <p>Todo List</p>
            <TodoList />
            <TodoInput onCreateTodo={onCreateTodo} />
        </div>
    );
}

export default Card;