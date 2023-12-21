import React, { useState, useCallback, memo } from "react";

interface Props {
  count: number;
  onClick: () => void;
}

// React.memo component, wrapping ChildComponent
const MemoizedChildComponent = memo(function ChildComponent({ count, onClick }: Props) {
  console.log("child component is rendering");
  return (
    <div>
      <h2>This is a child component.</h2>
      <button onClick={onClick}>Increment</button>
      <h4>Count: {count}</h4>
    </div>
  );
});

export default function ExampleMemoizationFour() {
  const [input, setInput] = useState<string | number>("");
  const [count, setCount] = useState<number>(0);

  // const incrementCount = () => setCount(count + 1);
  const incrementCount = useCallback(() => setCount(count + 1), [count]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={incrementCount}>Increment counter</button>
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr />
      <MemoizedChildComponent count={count} onClick={incrementCount} />
    </div>
  );
}
