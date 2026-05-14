const TodoData = (props) => {
  //props là một biến object {}
  //   {
  //     name: "Harry",
  //     age: 23,
  //     data: {}
  //   }
  const { todoList } = props;
  console.log(props);
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
          <div className="todo-item" key={item.id}>
            <div>{item.name}</div>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
