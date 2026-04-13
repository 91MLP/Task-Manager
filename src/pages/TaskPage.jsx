export default function TaskPage({
  tasksList,
  seletedTask,
  deleteTaskButton,
  taskCompleteButton,
  taskDetailButton,
}) {
  return (
    <div>
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
