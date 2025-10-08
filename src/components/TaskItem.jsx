function TaskItem({
  task,
  index,
  toggleTask,
  deleteTask,
  startEdit,
  saveEdit,
  editingIndex,
  editingText,
  setEditingText,
}) {
  const isEditing = editingIndex === index;

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <button onClick={() => saveEdit(index)}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "gray" : "black",
            }}
          >
            {task.text}
          </span>
          <button onClick={() => toggleTask(index)} style={{ marginLeft: "1rem" }}>
            {task.completed ? "Undo" : "Done"}
          </button>
          <button onClick={() => startEdit(index)} style={{ marginLeft: "0.5rem" }}>
            Edit
          </button>
          <button onClick={() => deleteTask(index)} style={{ marginLeft: "0.5rem" }}>
            Delete
          </button>
        </>
      )}
    </li>
  );
}


export default TaskItem;
