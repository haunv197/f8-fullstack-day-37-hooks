import { forwardRef, useImperativeHandle, useRef } from "react";

const NewTextInput = forwardRef(({ type = "text", ...passProps }, ref) => {
  const { placeholder, value, onChange, className } = passProps;

  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      focus() {
        console.log("ref", ref);
        return inputRef.current.focus();
      },
    };
  }, []);

  return (
    <input
      type={type}
      value={value}
      ref={inputRef}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
});

NewTextInput.displayName = "NewTextInput";

export default NewTextInput;
