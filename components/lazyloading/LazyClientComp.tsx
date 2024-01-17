"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const ComponentA = dynamic(() => import("./ComponentA"));
const ComponentB = dynamic(() => import("./ComponentB"));
const ComponentC = dynamic(() => import("./ComponentC"), { ssr: false });

export default function LazyClientComp() {
  const [showMore, setShowMore] = useState(false);

  console.log("LazyClientComp rendered, showMore state: ", showMore);

  return (
    <div className="mt-2">
      {/* Load immediately, but in a separate client bundle */}
      <ComponentA />

      {/* Load on demand, only when/if the condition is met */}
      {showMore && <ComponentB />}
      <button
        className="rounded rounded-md p-2 bg-red-300 text-black"
        onClick={() => setShowMore(!showMore)}
      >
        Toggle
      </button>

      {/* Load only on the client side */}
      <ComponentC />
    </div>
  );
}
