import React from "react";
import TaskBox from "../TaskBox/TaskBox.component";

const TaskList = ({tasks,listHeader}) => {
  
  return (
    <>
     <h1 className="lg:mx-20 px-2 text-lg font-medium">{listHeader}</h1>
      <div
        className="flex flex-wrap justify-start lg:ml-24 lg:py-1"
        id="tasklist"
      >
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
    </>
  );
};

export default TaskList;
