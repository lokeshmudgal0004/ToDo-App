import { useState } from "react";
import AddToDo from "./components/AddToDo";
import ToDoItem from "./components/ToDoItem";
import WelcomeMessage from "./components/WelcomeMessage";
import "./to-do-app.css";

function App() {
  const [todoItems, setToDoItems] = useState([]);

  const handleNewItem = (a, b) => {
    /*let newItem = [...todoItems, { todoName: a, dueDate: b }];
    setToDoItems(newItem);*/

    //using functional updates
    setToDoItems((currValue) => [...currValue, { todoName: a, dueDate: b }]);
  };

  const handleDeleteItem = (item) => {
    const newToDOItems = todoItems.filter((e) => e.todoName !== item);
    setToDoItems(newToDOItems);
  };

  return (
    <center class="to-do-container">
      <h1> TODO App</h1>
      <div class="container text-center">
        <AddToDo handleNewItem={handleNewItem} />
        <WelcomeMessage todoItems={todoItems} />

        {todoItems.map((items) => (
          <ToDoItem
            todoName={items.todoName}
            todoDate={items.dueDate}
            onClickDelete={handleDeleteItem}
          ></ToDoItem>
        ))}
      </div>
    </center>
  );
}

export default App;
