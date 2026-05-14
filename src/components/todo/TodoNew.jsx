import { useState } from "react";

const TodoNew = (props) => {
  //useState hook
  // const valueInput = "";
  const [valueInput, setValueInput] = useState("Harry");

  const { addNewTodo } = props;

  // addNewTodo();
  const handClick = () => {
    addNewTodo(valueInput);
    console.log(valueInput);
  };
  const handleOnChange = (name) => {
    setValueInput(name);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <button style={{ cursor: "pointer" }} onClick={handClick}>
        Add
      </button>
      <div>My text input {valueInput}</div>
    </div>
  );
};

export default TodoNew;
