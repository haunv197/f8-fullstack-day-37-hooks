import { forwardRef } from "react";

const TextInput = forwardRef(({ type = "text", ...passProps }, ref) => {
  const { placeholder, value, onChange, className } = passProps;
  return (
    <input
      type={type}
      value={value}
      ref={ref}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
});

TextInput.displayName = "TextInput";

export default TextInput;
