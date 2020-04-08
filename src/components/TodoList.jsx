import React, { Component } from 'react';
import './TodoList.css';

import Todo from './Todo';

class TodoList extends Component {
    //
    mapToTodoList = () => {
        const todoList = this.props.todoList;

        return todoList.map((todo, i) => {
            return (<Todo
                todo={todo}
                key={i}    
            />);
        });
    }

    //
    render() {
        return (
        <div className='todo-list'>
            {this.mapToTodoList()}
        </div>
        )
    }
}

export default TodoList;
