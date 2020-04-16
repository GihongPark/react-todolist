// Action
const CREATE_TODO = 'card/CREATE_TODO';

// Action Creators
export const createTodo = todo => ({
    type: CREATE_TODO,
    todo
})

// Initial State
const initialState = {
    todoList: []
}

// Reducer
export default function card(state=initialState, action) {
    console.log("action", action);
    switch(action.type) {
        case CREATE_TODO: 
            console.log(state.todoList);
            return {
                ...state,
                todoList: [...state.todoList, action.todo]
            }
        default: 
            return state;
    }
}