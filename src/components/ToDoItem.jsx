import { MdDelete } from "react-icons/md";

function ToDoItem1({ todoName, todoDate, onClickDelete }) {
  return (
    <div class="row">
      <div class="col-6">
        <p>{todoName}</p>
      </div>
      <div class="col-4">
        <p>{todoDate}</p>
      </div>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => onClickDelete(todoName)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default ToDoItem1;
