import { ADD_TASK, REMOVE_TASK, MARK_COMPLETED, UPDATE_TASK } from "./actionTypes";

const initialState = {
    todos: [
        {
            "id": "abcd1",
            "content": "Clean Laundry",
            "completed": false,
            "percent" : "0"
        },
        {
            "id": "26c6",
            "content": "Search for New Apartment",
            "completed": false,
            "percent" : "0"
        },
        {
            "id": "3e96",
            "content": "Stop updates",
            "completed": true,
            "percent" : "0"
        },
        {
            "id": "fd6f",
            "content": "Read Newspaper",
            "completed": false,
            "percent" : "0"
        },
        {
            "id": "lam7fr",
            "content": "Find dumbledore",
            "completed": true,
            "percent" : "0"
        }
    ],
};

const idGenerator = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                todos: [...state.todos,{ id : idGenerator(), content: action.payload, completed: false}]
            };
        case REMOVE_TASK:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload )
            };
        case MARK_COMPLETED:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id !== action.payload){
                        return todo;
                    }
                    return {...todo, completed : !todo.completed}
                })
            };
        case UPDATE_TASK: 
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id !== action.ID){
                        return todo;
                    }
                    return {...todo, content : action.payload, percent : action.percentage}
                })
            };
        default:
            return state;
    }
};