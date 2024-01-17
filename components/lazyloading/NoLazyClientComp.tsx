"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export default function LazyClientComp() {
  const [showMore, setShowMore] = useState(false);

  console.log("LazyClientComp rendered, showMore state: ", showMore);

  return (
    <div className="mt-2">
      <ComponentA />

      {showMore && <ComponentB />}
      <button
        className="rounded rounded-md p-2 bg-red-300 text-black"
        onClick={() => setShowMore(!showMore)}
      >
        Toggle
      </button>

      <ComponentC />
    </div>
  );
}
