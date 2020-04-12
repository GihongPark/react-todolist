import React, { useState, useRef } from 'react';

function TodoInput(props) {
    const [todo, setTodo] = useState('');
    const textRef = useRef('');

    const onChangeTextarea = (e) => {
        setTodo(e.currentTarget.value);
    }
    const onAdd = (e) => {
        if(!todo) { return; }
        props.onCreateTodo(todo);
        setTodo('');
        textRef.current.focus();
    }
    const onCancel = () => {
        setTodo('');
        textRef.current.focus();
    }
     
    return (
        <div className='todo-input'>
            <div className='todo-input-text'>
                <textarea 
                    ref={textRef} 
                    placeholder='할 일을 적어주세요.' 
                    value={todo} 
                    onChange={onChangeTextarea} 
                />
            </div>
            <div className='todo-input-controls'>
                <button className='add' onClick={onAdd}>Add</button>
                <button className='cancel' onClick={onCancel}>X</button>
            </div>
        </div>
    );
}

export default TodoInput;