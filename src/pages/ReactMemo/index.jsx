import { Button } from "@/components/ui/button";
import { memo, useCallback, useState } from "react";

const ChildComponent1 = memo(({ value, onIncrease, ...passProps }) => {
  console.log("Child 1 Count:", value);
  return (
    <div className="flex flex-col gap-4 w-fit">
      <div>Child 1 Count: {value}</div>
      <Button variant="outline" onClick={onIncrease}>
        Tăng Count 1
      </Button>
    </div>
  );
});

const ChildComponent2 = memo(({ value, onIncrease, ...passProps }) => {
  console.log("Child 2 Count: ", value);

  return (
    <div className="flex flex-col gap-4 w-fit">
      <div>Child 2 Count: {value}</div>
      <Button variant="outline" onClick={onIncrease}>
        Tăng Count 2
      </Button>
    </div>
  );
});

function ReactMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncreaseCount1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleIncreaseCount2 = useCallback(() => {
    setCount2(count2 + 2);
  }, [count2]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <ChildComponent1 value={count1} onIncrease={handleIncreaseCount1} />

      <ChildComponent2 value={count2} onIncrease={handleIncreaseCount2} />
    </div>
  );
}

export default ReactMemo;
