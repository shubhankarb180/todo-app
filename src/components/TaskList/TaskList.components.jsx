import React from 'react';
import TaskBox from '../TaskBox/TaskBox.component';
import { useSelector } from 'react-redux';

const TaskList = () => {

    const tasks = useSelector((state) => state.todos);
    return(
            <div className="flex flex-wrap justify-center" id="tasklist">
                {tasks.map((task) => {
                    return(
                        <TaskBox task={task.content} key={task.id} taskID={task.id} completed={task.completed} className="" />
                    );
                })}
            </div>
    );
};

export default TaskList;
