import React from "react";
import TaskBox from "../TaskBox/TaskBox.component";
import { useSelector } from "react-redux";

const TaskList = () => {
  const todos = useSelector((state) => state.todos);
  const tasks = todos.filter(item => item.completed === false);
  const completedTasks = todos.filter(item=> item.completed === true);
  
  return (
    <>
      <h1 className="lg:mx-20 px-2 text-lg font-medium">Todos</h1>
      <div className="flex flex-wrap justify-start lg:ml-24 lg:py-1" id="tasklist">
        {tasks.map((task) => {
          return (
            <TaskBox
              task={task.content}
              key={task.id}
              taskID={task.id}
              completed={task.completed}
              className=""
            />
          );
        })}
      </div>
      <h1 className="lg:mx-20 px-2 text-lg font-medium">Completed</h1>
      <div className="flex flex-wrap justify-start lg:ml-24 lg:py-1" id="tasklist">
        {completedTasks.map((task) => {
          return (
            <TaskBox
              task={task.content}
              key={task.id}
              taskID={task.id}
              completed={task.completed}
              className=""
            />
          );
        })}
      </div>
    </>
  );
};

export default TaskList;
