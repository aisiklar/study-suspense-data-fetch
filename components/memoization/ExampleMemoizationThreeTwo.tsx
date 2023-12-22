"use client";
import React, { useState, memo } from "react";

interface Props {
  count: number;
}

const ChildComponent = ({ count }: Props) => {
  console.log("memoized child component is rendering");

  let start = performance.now();

  while (performance.now() - start < 2000) {
    // wait here
  }
  console.log("after waiting, continue with rendering");

  return (
    <div className="my-1">
      <h1>This is a child component.</h1>
      <h4>Count: {count}</h4>
    </div>
  );
};

const MemoizedChildComponent = memo(ChildComponent);

export default function ExampleMemoizationThree() {
  console.log("rendered parent component");
  const [input, setInput] = useState<string | number>("");
  const [count, setCount] = useState<number>(0);

  return (
    <div className="mt-2 ml-2">
      <h1 className="text-red-300">memoized case</h1>
      <p className="text-red-300 mb-2">
        It renders with delay in first render and also when buttons are clicked,
        which causes a re-render of the child comp.
        <p className="text-red-300 mb-2">
          But if input changes, it shows better performance compared to
          no-memoized case.
        </p>
      </p>
      <p className="text-red-300 mb-2">
        note: child comp. is artificially slowed down (a lot!)
      </p>
      <input
        className="text-black"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="border rounded ml-2 p-1"
        onClick={() => setCount(count + 1)}
      >
        Increment counter
      </button>
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr />
      <MemoizedChildComponent count={count} />
      <hr />
    </div>
  );
}
