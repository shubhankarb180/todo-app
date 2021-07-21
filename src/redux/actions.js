import { ADD_TASK, REMOVE_TASK, MARK_COMPLETED } from "./actionTypes";

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