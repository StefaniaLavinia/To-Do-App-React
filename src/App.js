import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { useState } from "react";


let initialTasks = [];

// component parinte
const App = () => {
  const [allTasks, setAllTasks] = useState(initialTasks);

  return (
    <div className="main">
      <Header title="To-Do List" />
      <Body setAllTasks={setAllTasks} allTasks={allTasks} />
    </div>
  );
};
export default App;
