// Action
const CREATE_TODO = 'card/CREATE_TODO';

// Action Creators
export const createTodo = todo => ({
    type: CREATE_TODO,
    todo
})

// Initial State
const getTodoList = () => {
    const todoList = localStorage.todoList;
    return todoList ? JSON.parse(todoList) : [];
}
const initialState = {
    todoList: getTodoList()
}

// Reducer
export default function card(state=initialState, action) {
    switch(action.type) {
        case CREATE_TODO: 
            return {
                ...state,
                todoList: [...state.todoList, action.todo]
            }
        default: 
            return state;
    }
}
