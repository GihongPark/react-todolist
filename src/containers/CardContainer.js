import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card';
import { createTodo } from '../modules/card';

function CardContainer() {
    const { todoList } = useSelector(state => ({
        todoList: state.card.todoList
    }));

    const dispatch = useDispatch();
    const onCreateTodo = todo => dispatch(createTodo(todo));

    return (
        <Card
            todoList={todoList}
            onCreateTodo={onCreateTodo}
        />
    );
}

export default CardContainer;