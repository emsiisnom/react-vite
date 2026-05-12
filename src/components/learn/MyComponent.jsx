//component = html + css + js
const MyComponent = () => {
  const string1 = "string"; //string
  const number = 25; //number
  return (
    <>
      <div>{string1} Hello World update</div>
      <div>{console.log("test")}</div>
      <div className="child" style={{ borderRadius: "10px" }}>
        child
      </div>
    </>
  );
};
export default MyComponent;
