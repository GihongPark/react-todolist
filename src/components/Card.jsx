import React, { useState, useEffect, useRef } from 'react';

import TodoList from './TodoList';
import TodoInput from './TodoInput';

import './Card.css'

function Card({ todoList, onCreateTodo }) {
    return (
        <div className='todo-list-card'>
            <p>Todo List</p>
            <TodoList todoList={todoList} />
            <TodoInput onCreateTodo={onCreateTodo} />
        </div>
    );
}

export default Card;