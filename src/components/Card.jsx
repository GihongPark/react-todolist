import React, { useState, useEffect, useRef } from 'react';

import TodoList from './TodoList';
import TodoInput from './TodoInput';


function Card() {
    const [todoList, setTodoList] = useState([]);
    const localTodoList = useRef(localStorage.todoList);

    useEffect(() => {
        console.log('mount!');
        if(localTodoList.current) {
            setTodoList(JSON.parse(localTodoList.current))
        }
    }, []);
    useEffect(() => {
        console.log('update!');
        // 두 배열이 일치하는지 확인
        if(JSON.stringify(localTodoList.current) !== JSON.stringify(todoList)) {
            localStorage.todoList = JSON.stringify(todoList);
            localTodoList.current = todoList;
        }
    }, [todoList]);
    
    //
    const onCreateTodo = (value) => {
        setTodoList([...todoList, value]);

    }

    return (
        <div className='todo-list-card'>
            <p>Todo List</p>
            <TodoList todoList={todoList} />
            <TodoInput onCreateTodo={onCreateTodo} />
        </div>
    );
}

export default Card;