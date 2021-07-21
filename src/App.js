import React, { useState } from "react";
import TaskList from "./components/TaskList/TaskList.components";
import { useDispatch } from "react-redux";
import { add_task } from "./redux/actions";

const App = () => {
  const [task, setTask] = useState("");
  // const [taskList, setTaskList] = useState(["Task 1"]);
  const dispatch = useDispatch();

  const handleTaskInput = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  return (
    <div className="flex flex-col max-w-full p-2 bg-purple-500 h-screen" id="container">
      <div className="flex justify-center lg:w-full">
        <h1 className="text-3xl text-center content-center">Todo List</h1>
      </div>
      <div className="flex w-50 justify-center py-1" id="task-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(add_task(task));
            setTask("");
          }}
        >
          <input type="text" className="border-2 border-grey-700 p-1 rounded-full hover:border-blue-600 " onChange={handleTaskInput} value={task} />
          <button
            type="submit"
            className="p-1 border-2 bg-gray-600 text-white rounded-full text-sm px-2 py-2 hover:bg-blue-400"
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
