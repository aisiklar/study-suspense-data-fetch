"use client";

import { getSlowData } from "@/utils";
import { Suspense, useState } from "react";

export default function StudyLoading() {
  console.log("at loadingSubject page");

  const [data, setData] = useState<string>("");

  async function getData() {
    console.log("clicked button!");
    let response = await getSlowData(3000);
    setData(response);
  }

  return (
    <section>
      <div className="m-2">
        this page will simulate slow data fetching from a server:
      </div>
      <button onClick={getData} className="m-2 border rounded p-2">
        Click to fetch data
      </button>
      <Suspense
        fallback={
          <p className="p-2 border rounded text-red-300">
            Wait for a moment please
          </p>
        }
      >
        <p className="mt-2  p-2">{data}</p>
      </Suspense>
    </section>
  );
}
