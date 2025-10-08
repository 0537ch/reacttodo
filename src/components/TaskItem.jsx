function TaskItem({ task, index, toggleTask, deleteTask }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "gray" : "black",
        }}
      >
        {task.text}
      </span>

      <button
        onClick={() => toggleTask(index)}
        style={{ marginLeft: "1rem" }}
      >
        {task.completed ? "Undo" : "Done"}
      </button>

      <button
        onClick={() => deleteTask(index)}
        style={{ marginLeft: "0.5rem" }}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
