import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    //
    render() {
        return (
        <div className='todo'>
            <span>{this.props.todo}</span>
        </div>
        )
    }
}

export default Todo;
