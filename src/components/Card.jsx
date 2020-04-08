import React, { Component } from 'react';
import './Card.css';

import TodoList from './TodoList';
import TodoInput from './TodoInput';

class Card extends Component {
    state = {
        todoList: []
    }
    componentDidMount() {
        const todoList = localStorage.todoList;

        if(todoList) {
            this.setState({
                todoList: JSON.parse(todoList)
            })
        }
    }
    componentDidUpdate(prevProps, prevState) {
        const todoList = this.state.todoList;

        // 두 배열이 일치하는지 확인
        if(JSON.stringify(prevState.todoList) !== JSON.stringify(todoList)) {
            localStorage.todoList = JSON.stringify(todoList);
        }
    }

    onCreate = (value) => {
        const todoList = this.state.todoList;
        this.setState({
            todoList: [...todoList, value]
        });
    }

    render() {
        return (
            <div className='todo-list-card'>
                <p>Todo List</p>
                <TodoList />
                <TodoInput onCreate={this.onCreate}/>
            </div>
        )
    }
}

export default Card;
