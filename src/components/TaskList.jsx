import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
