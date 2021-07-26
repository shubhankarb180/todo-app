import { ADD_TASK, REMOVE_TASK, MARK_COMPLETED, UPDATE_TASK } from "./actionTypes";

export const add_task = (task) => ({
    type : ADD_TASK,
    payload : task
}); 

export const remove_task = (id) => ({
    type : REMOVE_TASK,
    payload : id
}); 

export const mark_completed = (id) => ({
    type : MARK_COMPLETED,
    payload : id
}); 

export const update_task = (id,task) => ({
    type: UPDATE_TASK,
    payload : task,
    ID : id
});

//Create New Action for updated the percentage