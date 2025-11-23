import TextInput from "../../components/TextInput";

function UseRef() {
  const handleClick = () => {};
  const handleFocus = () => {};
  const handleRemove = () => {};
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleRemove}>Remove</button>

      <TextInput ref={inputRef} />
    </div>
  );
}

export default UseRef;
