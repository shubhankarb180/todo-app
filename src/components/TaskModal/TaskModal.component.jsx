import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { update_task } from "./redux/actions";

const TaskModal = ({id}) => {
  
    const dispatch = useDispatch();
    const [changeTask,setChangeTask] = useState("");
    const [percentage,setPercentage] = useState("");
  
    return (
    <div className="flex">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(update_task(id,changeTask));
          setChangeTask("");
        }}
      >
        <label>Task Name : </label>
        <input type="text" className="" />

        {/* Add dispatch for updating percentage */}
        <label>How much work is</label>
        <select id="task-percent" name="percentage" className="">
          <option>25%</option>
          <option>50%</option>
          <option>75%</option>
          <option selected>100%</option>
        </select>
      </form>
    </div>
  );
};

export default TaskModal;
