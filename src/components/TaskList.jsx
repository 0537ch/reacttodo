// components/TaskList.jsx
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  toggleTask,
  deleteTask,
  startEdit,
  saveEdit,
  editingIndex,
  editingText,
  setEditingText,
}) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          startEdit={startEdit}        // ⬅️ penting, harus diteruskan
          saveEdit={saveEdit}
          editingIndex={editingIndex}
          editingText={editingText}
          setEditingText={setEditingText}
        />
      ))}
    </ul>
  );
}

export default TaskList;
