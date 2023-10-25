"use client";
import { useState } from "react";
import ExpensiveCalculation from "./ExpensiveCalculation";
import ExpensiveCalculationTwo from "./ExpensiveCalculationTwo";

export default function ExampleNoMemoTwo() {
  const [render, setRender] = useState(1);
  console.log("render: ", render);

  return (
    <section>
      <p>no memo</p>
      <button
        className="border rounded p-2 ml-3 bg-blue-200 text-black"
        onClick={() => setRender(render + 1)}
      >
        calculate - change state
      </button>
      <div className="mt-2">
        <ExpensiveCalculationTwo render={render} />
      </div>
    </section>
  );
}
