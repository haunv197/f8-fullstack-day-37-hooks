import { forwardRef } from "react";

const TextInput = forwardRef((props, ref) => {
  const { placeholder, value, onChange } = props;
  return (
    <input
      value={value}
      ref={ref}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
});

export default TextInput;
