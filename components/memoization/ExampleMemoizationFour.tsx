"use client";

import React, { useState, useCallback, memo } from "react";

interface Props {
  count: number;
  onClick: () => void;
}

// React.memo component, wrapping ChildComponent
const MemoizedChildComponent = memo(function ChildComponent({
  count,
  onClick,
}: Props) {
  console.log("memoized child component is rendering");

  let start = performance.now();

  while (performance.now() - start < 2000) {
    // wait here
  }
  console.log("after waiting, continue with rendering");

  return (
    <div>
      <h2>This is a child component.</h2>
      <button
        className="border rounded p-1 m-1"
        onClick={() => {
          console.log("button on child comp clicked");
          onClick();
        }}
      >
        Increment
      </button>
      <h4>Count: {count}</h4>
    </div>
  );
});

export default function ExampleMemoizationFour() {
  console.log("parent comp rendering..");
  const [input, setInput] = useState<string | number>("");
  const [count, setCount] = useState<number>(0);

  // callback case
  const incrementCount = useCallback(() => {
    console.log(
      "increment count function in parent comp called from child comp"
    );
    setCount(count + 1);
  }, [count]);

  function incrementCountFromParent() {
    console.log("button on parent comp. clicked");
    setCount(count + 1);
  }

  // no callback() case
  /* const incrementCount = () => {
    console.log("button on parent comp. clicked");
    setCount(count + 1);
  }; */

  return (
    <div className="mt-2 ml-2">
      <h1 className="text-red-300">memoized case with useCallback() hook</h1>
      <p className="text-red-300 mb-2">
        It renders with delay in first render and also when buttons are clicked,
        which causes a re-render of the child comp. But if input changes, it
        shows better performance compared to no-memoized / no useCallback() hook
        case. note: child comp. is artificially slowed down (a lot!)
      </p>
      <input
        className="text-black"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="border rounded p-1 mx-2"
        onClick={incrementCountFromParent}
      >
        Increment counter
      </button>
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr />
      <MemoizedChildComponent count={count} onClick={incrementCount} />
    </div>
  );
}
