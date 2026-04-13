import TaskPage from "./pages/TaskPage";
import { tasksData } from "./data/userData";
import { useState } from "react";
import TaskAddingPage from "./pages/TaskAddingPage";

function App() {
  const [taskList, setTaskList] = useState(tasksData);
  const [selectId, setSelectId] = useState(null);
  const seletedTask = taskList.find((t) => t.id === selectId);

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
  return (
    <div>
      <TaskPage
        tasksList={taskList}
        seletedTask={seletedTask}
        deleteTaskButton={handleTaskDelete}
        taskCompleteButton={handleComplete}
        taskDetailButton={handleDetail}
      />
      <TaskAddingPage  tasksList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
