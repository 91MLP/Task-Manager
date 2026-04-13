export default function TaskPage({
  tasksList,
  seletedTask,
  deleteTaskButton,
  taskCompleteButton,
  taskDetailButton,
}) {
  return (
    <div>
      {/* <input type="text" value={text} onChange={handleTextChangeButton} />
      <button onClick={addTaskButton} disabled={text ? false : true}>
        Add Task
      </button> */}
      {tasksList.map((t) => {
        return (
          <li
            key={t.id}
            style={{ textDecoration: t.completed ? "line-through" : "none" }}
          >
            <input type="checkbox" onClick={() => taskCompleteButton(t.id)} />
            {t.task}
            <button
              onClick={() => taskDetailButton(t)}
              disabled={t.completed ? true : false}
            >
              Detail
            </button>
            <button onClick={() => deleteTaskButton(t.id)}>Delete</button>
          </li>
        );
      })}

      {seletedTask && <p>{seletedTask.taskDetail}</p>}
    </div>
  );
}
