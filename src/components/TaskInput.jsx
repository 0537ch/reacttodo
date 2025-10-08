function TaskInput({ newTask, setNewTask, addTask }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask} style={{ marginLeft: "0.5rem" }}>
        Add
      </button>
    </div>
  );
}

export default TaskInput;
