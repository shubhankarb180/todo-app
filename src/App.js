import React, { useState } from "react";
import TaskList from "./components/TaskList/TaskList.components";
import { useDispatch } from "react-redux";
import { add_task } from "./redux/actions";

const App = () => {
  const [task, setTask] = useState("");
  // const [taskList, setTaskList] = useState(["Task 1"]);
  const dispatch = useDispatch();
  const taskNullCheck = task === "" ? "!hover:cursor-not-allowed" : "hover:bg-blue-400";

  const handleTaskInput = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  return (
    <div className="flex flex-col max-w-full p-2 bg-purple-500 h-screen" id="container">
      <div className="flex justify-center lg:w-full lg:p-2">
        <h1 className="text-2xl font-normal md:text-3xl xl:text-4xl text-center content-center text-black">Todo List</h1>
      </div>
      <div className="flex w-50 justify-center py-2" id="task-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(add_task(task));
            setTask("");
          }}
        >
          <input type="text" className="px-1 py-0.5 mr-2 rounded-md hover:border-blue-600 focus:outline-none focus:border-transparent" onChange={handleTaskInput} value={task} maxLength="35" />
          <button
            type="submit"
            className={`bg-gray-600 text-white rounded-md text-sm px-2 py-1  xl:px-5 ${taskNullCheck}`}
            disabled={ task === "" ? true : false}
          >
            Add
          </button>
        </form>
      </div>
      <TaskList />
    </div>
  );
};

export default App;
