import { ADD_TASK, REMOVE_TASK, MARK_COMPLETED } from "./actionTypes";

const initialState = {
    todos: [
        {
            "id": "abcd1",
            "content": "Sample Task",
            "completed": false
        },
        {
            "id": "26c6",
            "content": "New Task ",
            "completed": false
        },
        {
            "id": "3e96",
            "content": "Small Task for Update ",
            "completed": false
        },
        {
            "id": "baec",
            "content": "Checking the length of a long task to get started",
            "completed": false
        },
        {
            "id": "31b6",
            "content": "Adding more task ",
            "completed": false
        },
        {
            "id": "6874",
            "content": "For the same witdth",
            "completed": false
        },
        {
            "id": "eea3",
            "content": "To get the idea about the size and the grid formation ",
            "completed": false
        },
        {
            "id": "a396",
            "content": "Clean laundry ",
            "completed": false
        },
        {
            "id": "86bf",
            "content": "Kill Tutu ",
            "completed": false
        },
        {
            "id": "82c9",
            "content": "Rahul wont be able to play pubg ",
            "completed": false
        },
        {
            "id": "8bbe",
            "content": "Test",
            "completed": false
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
        default:
            return state;
    }
};