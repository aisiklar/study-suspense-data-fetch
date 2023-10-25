"use client";
import { useState } from "react";
import ExpensiveCalculationMemo from "./ExpensiveCalculationMemo";

export default function ExampleWithMemo() {
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
        <ExpensiveCalculationMemo render={render} />
      </div>
    </section>
  );
}
