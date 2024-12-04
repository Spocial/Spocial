import React, { useState } from "react";

const TodoApp = () => {
  const [leftTasks, setLeftTasks] = useState<string[]>([]);
  const [rightTasks, setRightTasks] = useState<string[]>([]);

  const [leftInput, setLeftInput] = useState("");
  const [rightInput, setRightInput] = useState("");

  const addLeftTask = () => {
    if (leftInput.trim()) {
      setLeftTasks([...leftTasks, leftInput]);
      setLeftInput("");
    }
  };

  const addRightTask = () => {
    if (rightInput.trim()) {
      setRightTasks([...rightTasks, rightInput]);
      setRightInput("");
    }
  };

  // Get the maximum number of rows to synchronize alignment
  const maxRows = Math.max(leftTasks.length, rightTasks.length);

  return (
    <div>
      <h1>To-Do Lists</h1>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
        {/* Left Input Section */}
        <div style={{ width: "45%" }}>
          <h2>Left To-Do List</h2>
          <input
            type="text"
            value={leftInput}
            onChange={(e) => setLeftInput(e.target.value)}
            placeholder="Add a task..."
          />
          <button onClick={addLeftTask}>Add Task</button>
        </div>

        {/* Right Input Section */}
        <div style={{ width: "45%" }}>
          <h2>Right To-Do List</h2>
          <input
            type="text"
            value={rightInput}
            onChange={(e) => setRightInput(e.target.value)}
            placeholder="Add a task..."
          />
          <button onClick={addRightTask}>Add Task</button>
        </div>
      </div>

      {/* Task Lists */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", marginTop: "20px" }}>
        {/* Left Task List */}
        <div style={{ width: "45%" }}>
          {Array.from({ length: maxRows }).map((_, index) => (
            <div key={index} style={{ minHeight: "30px" }}>
              {leftTasks[index] || ""}
            </div>
          ))}
        </div>

        {/* Right Task List */}
        <div style={{ width: "45%" }}>
          {Array.from({ length: maxRows }).map((_, index) => (
            <div key={index} style={{ minHeight: "30px" }}>
              {rightTasks[index] || ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
