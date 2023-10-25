"use client";
import { useState } from "react";
import ExpensiveCalculationMemo from "./ExpensiveCalculationMemo";
import ExpensiveCalculationMemoTwo from "./ExpensiveCalculationMemoTwo";

export default function ExampleWithMemoTwo() {
  const [render, setRender] = useState(1);
  console.log("render: ", render);

  return (
    <section>
      <p>with memo</p>
      <button
        className="border rounded p-2 ml-3 bg-blue-200 text-black"
        onClick={() => setRender(render + 1)}
      >
        calculate - change state
      </button>
      <div className="mt-2">
        <ExpensiveCalculationMemoTwo render={render} />
      </div>
    </section>
  );
}
