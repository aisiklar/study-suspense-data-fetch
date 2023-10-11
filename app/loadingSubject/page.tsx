"use client";

import { Suspense, useState } from "react";
import Loading from "../loading";
import DataForLoadingTwo from "@/components/DataForLoadingTwo";
import DataForLoadingOne from "@/components/DataForLoadingOne";

export default function StudyLoading() {
  console.log("at loadingSubject page");

  const [isShowData, setIsShowData] = useState<boolean>(false);

  console.log("isShowData: ", isShowData);

  async function showData() {
    console.log("clicked button!");
    setIsShowData(true);
  }

  return (
    <section>
      <div className="m-2">
        Usage of React Suspense for streaming data (simulated):
      </div>
      <button onClick={showData} className="m-2 border rounded p-2">
        Click to fetch data
      </button>

      {isShowData && (
        <div>
          <Suspense fallback={<Loading />}>
            <DataForLoadingOne />
            <DataForLoadingTwo />
          </Suspense>
          {/*  <Suspense fallback={<Loading />}>
            <DataForLoadingOne />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <DataForLoadingTwo />
          </Suspense> */}
        </div>
      )}
    </section>
  );
}
