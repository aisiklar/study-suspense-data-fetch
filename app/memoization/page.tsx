"use client";

import ExpensiveCalculation from "@/components/ExpensiveCalculation";
import { useEffect, useState } from "react";

export default function Memoization() {
  const [qty, setQty] = useState<string>("10");
  const [renderKey, setRenderKey] = useState<number>(1);
  const [buttonNoMemoClicked, setButtonNoMemoClicked] =
    useState<boolean>(false);

  const [showNoMemo, setShowNoMemo] = useState<boolean>(false);

  useEffect(() => {
    console.log("use Effect, on change of showNoMemo");
    if (buttonNoMemoClicked && !showNoMemo) {
      console.log("remount comp");
      setShowNoMemo(true);
    }
  }, [showNoMemo]);

  console.log("qty:", qty);
  console.log("renderKey:", renderKey);
  console.log("showNoMemo: ", showNoMemo);
  console.log("buttonNoMemoClicked: ", buttonNoMemoClicked);

  function calculateNoMemo() {
    setButtonNoMemoClicked(true);
    setRenderKey(renderKey + 1);
    setShowNoMemo(!showNoMemo);
  }

  function calculateWithMemo() {
    console.log("calculateWithMemo func");
  }

  return (
    <section>
      <h1>Memoization</h1>
      <p>Please enter a number (integer) for expensive calculation.</p>
      <p>The bigger number, the more expensive.</p>
      <div className="flex mt-4">
        <label className="mr-2">Input Number:</label>
        <input
          onChange={(e) => setQty(e.target.value)}
          value={qty}
          className=" text-black"
        ></input>
        <button onClick={calculateNoMemo} className="border rounded ml-2 p-1">
          Enter to calculate (no memoization)
        </button>
        <button onClick={calculateWithMemo} className="border rounded ml-2 p-1">
          Enter to calculate (with memoization)
        </button>
      </div>
      <div className="flex mt-[30px] justify-center">
        <div className="border rounded p-1 mr-4">
          <p className="mt-2">
            Results of expensive calculation (no memoization):
          </p>
          {showNoMemo ? (
            <ExpensiveCalculation
              qty={qty}
              isShown={(state) => setShowNoMemo(state)}
            />
          ) : null}
        </div>
        <div className="border rounded p-1 ml-4">
          <p className="mt-2">
            Results of expensive calculation (with memoization):
          </p>
        </div>
      </div>
    </section>
  );
}