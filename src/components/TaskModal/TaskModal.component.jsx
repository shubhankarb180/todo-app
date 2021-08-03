import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { update_task } from "./redux/actions";

const TaskModal = ({id}) => {
  
    const dispatch = useDispatch();
    const [changeTask,setChangeTask] = useState("");
    const [percentage,setPercentage] = useState("");

    const handlePercentageInput = (e) => {
      e.preventDefault();
      setPercentage(e.target.value);
    }
  
    return (
    <div className="flex">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(update_task(id,changeTask,percentage));
          setChangeTask("");
        }}
      >
        <label>Task Name : </label>
        <input type="text" className="" onChange={setChangeTask} />

        {/* Add dispatch for updating percentage */}
        <label>How much work is</label>
        <select id="task-percent" name="percentage" className="" onChange={handlePercentageInput}>
          <option selected value="0">0%</option>
          <option value="25">25%</option>
          <option value="50">50%</option>
          <option value="75">75%</option>
        </select>
      </form>
    </div>
  );
};

export default TaskModal;
