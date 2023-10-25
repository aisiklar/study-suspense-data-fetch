"use client";

import ExampleNoMemo from "@/components/memoization/ExampleNoMemo";
import ExampleNoMemoTwo from "@/components/memoization/ExampleNoMemoTwo";
import ExampleWithMemo from "@/components/memoization/ExampleWithMemo";
import ExpensiveCalculation from "@/components/memoization/ExpensiveCalculation";
import ExpensiveCalculationMemo from "@/components/memoization/ExpensiveCalculationMemo";
import { useEffect, useState } from "react";

export default function Memoization() {
  const [showNoMemo, setShowNoMemo] = useState(false);
  const [showWithMemo, setShowWithMemo] = useState(false);

  function getNoMemoExample() {
    console.log("in getNoMemoExample func");
    setShowNoMemo(!showNoMemo);
    setShowWithMemo(false);
  }
  function getWithMemoExample() {
    console.log("in getWithMemoExample func");
    setShowWithMemo(!showWithMemo);
    setShowNoMemo(false);
  }

  console.log("showNoMemo: ", showNoMemo);
  console.log("showWithMemo: ", showWithMemo);
  return (
    <section>
      <h1 className="mt-2">Memoization - Avoiding Expensive Calculation</h1>
      <div className="flex mt-4">
        <button
          className="border rounded p-2 bg-blue-200 text-black"
          onClick={getNoMemoExample}
        >
          Example for no-memoization
        </button>
        <button
          className="border rounded p-2 ml-3 bg-blue-200 text-black"
          onClick={getWithMemoExample}
        >
          Example for with-memoization
        </button>
      </div>
      <div className="mt-2">
        {showNoMemo && <ExampleNoMemoTwo />}
        {showWithMemo && <ExampleWithMemo />}
      </div>
    </section>
  );
}
