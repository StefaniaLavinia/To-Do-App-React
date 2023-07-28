import React from "react";
import Form from "./Form";


const Body = ({ setAllTasks, allTasks }) => {
  const handleDeleteTask = (index) => {
    setAllTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const handleTaskCompletion = (index) => {
    setAllTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  

  return (
    <div className="form">
      <Form setAllTasks={setAllTasks} />
      <div className="list-box">
        {allTasks.map((task, index) => (
          <div key={index} className={`task ${task.completed ? "completed" : ""}`}>
            <h3 className="task-name">
              {task.name}{" "}
              <div>
              <button onClick={() => handleTaskCompletion(index)} className="pi pi-check  check-button" > 
              </button>
              <button onClick={() => handleDeleteTask(index)} className="pi pi-trash  trash-button">
              </button>
              </div>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
