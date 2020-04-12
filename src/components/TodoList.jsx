import React from 'react';
import Todo from './Todo';

function TodoList({todoList}) {
    const mapToTodoList = () => {
        return todoList.map((todo, i) => {
            return <Todo todo={todo} key={i} />
        })
    }

    return (
        <div className='todo-list'>
            {mapToTodoList()}
        </div>
    );
}

export default TodoList;