import { useState } from "react";

export default function TaskAddingPage({ tasksList, setTaskList }) {
  const [text, setText] = useState("");
  const [detailText, setDetailText] = useState("");
  function handleTextChange(e) {
    const textValue = e.target.value;
    setText(textValue);
  }
  function handleDetailChage(e) {
    const textValue = e.target.value;
    setDetailText(textValue);
  }
  function handleTaskAdding() {
    setTaskList(() => [
      ...tasksList,
      { id: Date.now(), task: text, taskDetail: detailText, completed: false },
    ]);
    setText("");
    setDetailText("");
  }
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Tasks"
      />
      <input
        type="text"
        value={detailText}
        onChange={handleDetailChage}
        placeholder="Task Detail"
      />
      <button onClick={handleTaskAdding} disabled={text ? false : true}>
        Add Task
      </button>
    </div>
  );
}
