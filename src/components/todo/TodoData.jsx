const TodoData = (props) => {
  //props là một biến object {}
  //   {
  //     name: "Harry",
  //     age: 23,
  //     data: {}
  //   }
  const { name, age, data } = props;
  console.log(props);
  return (
    <div className="todo-data">
      <div>My name is {name}</div>
      <div>Learning React</div>
      <div>Watch Youtube</div>
      <div>{JSON.stringify(props.todoList)}</div>
    </div>
  );
};

export default TodoData;
