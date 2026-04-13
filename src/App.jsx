import TaskPage from "./pages/TaskPage";
import { tasksData } from "./data/userData";
import { useState } from "react";
import TaskAddingPage from "./pages/TaskAddingPage";

function App() {
  const [taskList, setTaskList] = useState(tasksData);
  const [selectId, setSelectId] = useState(null);
  const [optionStatus, setOptionStatus] = useState("all");
  const seletedTask = taskList.find((t) => t.id === selectId);
  const options = taskList.filter((t) => {
    if (optionStatus == "complete") return t.completed;
    if (optionStatus == "incomplete") return !t.completed;
    return true;
  });

  function handleDetail(tasksData) {
    setSelectId(tasksData.id);
  }
  function handleTaskDelete(id) {
    setTaskList((prev) => prev.filter((p) => p.id !== id));
  }
  function handleComplete(id) {
    setTaskList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, completed: !p.completed } : p)),
    );
  }
  function handleOption(e) {
    setOptionStatus(e.target.value);
  }
  return (
    <div>
      <TaskAddingPage tasksList={taskList} setTaskList={setTaskList} />
      <select name="" id="" onChange={handleOption}>
        <option value="all task">all tasks</option>
        <option value="complete">complete</option>
        <option value="incomplete">incomplete</option>
      </select>
      <TaskPage
        tasksList={options}
        seletedTask={seletedTask}
        deleteTaskButton={handleTaskDelete}
        taskCompleteButton={handleComplete}
        taskDetailButton={handleDetail}
      />
    </div>
  );
}

export default App;
