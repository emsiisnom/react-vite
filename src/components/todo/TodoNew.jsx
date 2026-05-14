import { useState } from "react";

const TodoNew = (props) => {
  //useState hook
  // const valueInput = "";
  const [valueInput, setValueInput] = useState("Harry");

  const { addNewTodo } = props;

  // addNewTodo();
  const handClick = () => {
    addNewTodo(valueInput);
    setValueInput("");
  };
  const handleOnChange = (name) => {
    setValueInput(name);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => handleOnChange(event.target.value)}
        value={valueInput}
      />
      <button style={{ cursor: "pointer" }} onClick={handClick}>
        Add
      </button>
      <div>My text input {valueInput}</div>
    </div>
  );
};

export default TodoNew;
