import { useRef, useState } from "react";
import TextInput from "../../components/TextInput";
import { Button } from "@/components/ui/button";
import NewTextInput from "@/components/NewTextInput";

function UseRef() {
  const [input, setInput] = useState("");
  const [nextInput, setNextInput] = useState("");
  const countClick = useRef(0);
  const inputRef = useRef();
  const newTextInputRef = useRef();

  const handleClick = () => {
    countClick.current++;

    if (countClick.current % 5 === 0) {
      alert(`Click ${countClick.current} lần!`);
    }
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleRemove = () => {
    inputRef.current.remove();
  };

  console.log("newTextInputRef", newTextInputRef);

  return (
    <div className="p-4 flex flex-col gap-4">
      <div>
        <Button variant="outline" onClick={handleClick}>
          Click me
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <TextInput
          ref={inputRef}
          placeholder={"Nhập giá trị input"}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="border px-3 py-2 w-fit"
        />

        <NewTextInput
          ref={newTextInputRef}
          placeholder={"Nhập giá trị next input "}
          value={nextInput}
          onChange={(e) => {
            setNextInput(e.target.value);
          }}
          className="border px-3 py-2 w-fit"
        />

        <div className="flex gap-3">
          <Button variant="outline" onClick={handleFocus}>
            Focus
          </Button>

          {/* <Button
            variant="outline"
            onClick={() => {
              newTextInputRef.current.focus();
            }}
          >
            Focus Next Input
          </Button> */}

          <Button variant="outline" onClick={handleRemove}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UseRef;
