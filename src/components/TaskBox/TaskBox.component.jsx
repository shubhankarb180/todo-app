import React from "react";
import { useDispatch } from "react-redux";
import { remove_task, mark_completed } from "../../redux/actions";
import "../../index.css";
import CompletedButton from "../TaskButtons/CompletedButton.component";
import MarkCompletedButton from "../TaskButtons/MarkCompletedButton.component";

const TaskBox = ({ task, taskID, completed }) => {
  const dispatch = useDispatch();
  const completeCheck = completed === true ? "completed" : "";
  const handleCompleteTask = () => dispatch(mark_completed(taskID));

  return (
    <div className="flex flex-col border-blue-900 bg-yellow-300 w-5/12 m-2 md:w-1/5 xl:w-1/6 2xl:w-1/12 justify-between hover:shadow-xl rounded-md xl:my-1">
      <div className="flex justify-center w-full py-1 xl:px-1">
        <p className={`text-center ${completeCheck}`}>{task}</p>
      </div>
      <div className="flex justify-center pb-1 xl:pb-1.5">
        {completed === true ? (
          <CompletedButton handleCompleteTask={handleCompleteTask} />
        ) : (
          <MarkCompletedButton handleCompleteTask={handleCompleteTask} />
        )}

        <button onClick={() => dispatch(remove_task(taskID))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TaskBox;
