import React, { Component } from 'react';
import './TodoInput.css';

class TodoInput extends Component {
    state = {
        todo: ''
    }

    onChange = (e) => {
        this.setState({
            todo: e.currentTarget.value
        })
    }
    onClick = () => {
        const { todo } = this.state;
        if(!todo) { return; }
        this.props.onCreate(todo);

        this.setState({
            todo: '',
        })

        this.textRef.current.focus();
    }
    onCancel = () => {
        this.setState({
            todo: ''
        })

        this.textRef.current.focus();
    }

    textRef = React.createRef();
    render() {
        const { todo } = this.state;
        return (
            <div className='todo-input'>
                <textarea ref={this.textRef} placeholder='할 일을 적어주세요.' value={todo} onChange={this.onChange} />
                <button onClick={this.onClick}>Add</button>
                <button onClick={this.onCancel}>X</button>
            </div>
        )
    }
}

export default TodoInput;
