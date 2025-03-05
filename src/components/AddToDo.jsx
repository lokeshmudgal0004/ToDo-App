import { useState, useRef } from "react";
import { BiCalendarCheck } from "react-icons/bi";
function AddToDo({ handleNewItem }) {
  /* const [toDoItem, setToDoItem] = useState("");
  const [dueDate, setdueDate] = useState(""); */
  const toDoElement = useRef();
  const dueDateElement = useRef();

  /*let handleToDoItem = (event) => {
    setToDoItem(event.target.value);
  };

  let handleDueDate = (event) => {
    setdueDate(event.target.value);
  };*/

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const toDoItem = toDoElement.current.value;
    const dueDate = dueDateElement.current.value;
    handleNewItem(toDoItem, dueDate);
    dueDateElement.current.value = "";
    toDoElement.current.value = "";
    /* setToDoItem("");
    setdueDate("");*/
  };

  return (
    <form class="row" onSubmit={handleAddButtonClicked}>
      <div class="col-6">
        <input type="text" ref={toDoElement} placeholder="Enter ToDo Here" />
      </div>
      <div class="col-4">
        <input type="date" ref={dueDateElement} />
      </div>
      <div class="col-2">
        <button class="btn btn-success" onSubmit={handleAddButtonClicked}>
          <BiCalendarCheck />
        </button>
      </div>
    </form>
  );
}

export default AddToDo;
