import { useState } from "react";

export default function TaskAddingPage({ tasksList, setTaskList }) {
  const [text, setText] = useState("");
  function handleTextChange(e) {
    setText(e.target.value);
  }
  function handleTaskAdding() {
    setTaskList(() => [
      ...tasksList,
      { id: Date.now(), task: text, taskDetail: "", completed: false },
    ]);
    setText("");
  }
  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange}/>
      <button onClick={handleTaskAdding} disabled={text ? false : true}>
        Add Task
      </button>
    </div>
  );
}
