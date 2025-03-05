import ToDoItem from "./components/ToDoItem";

function ToDoList(todoItems) {
  return (
    <>
      {todoItems.map((items) => (
        <ToDoItem todoName={items.todoName} todoDate={items.dueDate}></ToDoItem>
      ))}
    </>
  );
}

export default ToDoList;
