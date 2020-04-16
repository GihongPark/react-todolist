import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card';
import { createTodo } from '../modules/card';

function CardContainer() {
    const { todoList } = useSelector(state => ({
        todoList: state.card.todoList
    }));

    const dispatch = useDispatch();
    const onCreateTodo = todo => dispatch(createTodo(todo));

    useEffect(() => {
        console.log('update!');
        // 두 배열이 일치하는지 확인
        const localTodoList = localStorage.todoList;
        if(JSON.stringify(localTodoList) !== JSON.stringify(todoList)) {
            localStorage.todoList = JSON.stringify(todoList);
        }
    }, [todoList]);

    return (
        <Card
            todoList={todoList}
            onCreateTodo={onCreateTodo}
        />
    );
}

export default CardContainer;