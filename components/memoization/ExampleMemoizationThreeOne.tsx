"use client";
import React, { useState, memo } from "react";

interface Props {
  count: number;
}

const UnMemoizedChildComponent = ({ count }: Props) => {
  console.log("unmemoized child component is rendering");

  let start = performance.now();

  while (performance.now() - start < 2000) {
    // wait here
  }
  console.log("after waiting, continue with rendering");

  return (
    <div className="my-1">
      <h1>This is an unmemoized child component.</h1>
      <h3>
        This is re-rendered even when input changes (although not a props)....
      </h3>
      <h4>Count: {count}</h4>
    </div>
  );
};

export default function ExampleMemoizationThreeOne() {
  console.log("rendered parent component");
  const [input, setInput] = useState<string | number>("");
  const [count, setCount] = useState<number>(0);

  return (
    <div className="mt-2 ml-2">
      <h1 className="text-red-300">unmemoized case</h1>
      <p className="text-red-300 mb-2">
        when input is changed, it renders with bad performance.
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
      <UnMemoizedChildComponent count={count} />
      <hr />
    </div>
  );
}
