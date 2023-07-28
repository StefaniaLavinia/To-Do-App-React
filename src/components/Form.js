import React, { useState } from "react";
// import "primeicons/primeicons.css";

// let obiectproba = {
// name: "",
// };

const Form = ({ setAllTasks }) => {
const [nameValue, setNameValue] = useState("");

// const [task, setTask] = useState(obiectproba);

const handleName = (e) => {
    setNameValue(e.target.value);
};

const handleClick = (e) => {
    e.preventDefault();

    const trimmedNameValue = nameValue.trim();

    if (trimmedNameValue === "") {
      return;
    }
 
    const newTask = { name: nameValue };
    //  console.log(task);
    setAllTasks((prevTasks) => [...prevTasks, newTask]);
    setNameValue("");
};

return (
    <form className="input block">
<input
        className="inpname"
        onChange={handleName}
        type="text"
        name="Add to list"
        value={nameValue}
        placeholder="Add to list"
/>
<button
        i
        className="pi pi-plus plus-button"
        onClick={handleClick}
></button>
    </form>
);
};

export default Form;
