const TodoNew = (props) => {
  const { addNewTodo } = props;

  // addNewTodo();
  const handClick = () => {
    alert("click me");
  };
  const handleOnChange = (name) => {
    console.log("handleOnChange", name);
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
    </div>
  );
};

export default TodoNew;
