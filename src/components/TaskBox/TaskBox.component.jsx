import React from "react";
import { useDispatch } from "react-redux";
import { remove_task, mark_completed } from "../../redux/actions";
import "../../index.css";

const TaskBox = ({ task, taskID, completed }) => {
  const dispatch = useDispatch();
  const completeCheck = completed === true ? "completed" : "";

  return (
    <div className="flex flex-col border-blue-900 bg-yellow-300 w-5/12 m-2 md:w-1/5 xl:w-1/6 2xl:w-1/12 justify-between hover:shadow-xl rounded-md xl:my-1">
      <div className="flex justify-center w-full py-1 xl:px-1">
        <p className={`text-center ${completeCheck}`}>{task}</p>
      </div>
      <div className="flex justify-center pb-1 xl:pb-1.5">
        <button className="" onClick={() => dispatch(mark_completed(taskID))}>
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
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>

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
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TaskBox;
