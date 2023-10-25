"use client";

import { Suspense, useState } from "react";
import Loading from "../loading";
import DataForLoadingTwo from "@/components/suspense/DataForLoadingTwo";
import DataForLoadingOne from "@/components/suspense/DataForLoadingOne";

export default function StudyLoading() {
  console.log("at loadingSubject page");

  const [isShowDataAtOnce, setIsShowDataAtOnce] = useState<boolean>(false);
  const [isShowDataInSequence, setIsShowDataInSequence] =
    useState<boolean>(false);

  console.log("isShowDataAtOnce: ", isShowDataAtOnce);

  async function showDataAtOnce() {
    console.log("clicked button!");
    setIsShowDataAtOnce(true);
    setIsShowDataInSequence(false);
  }

  async function showDataInSequence() {
    console.log("clicked button!");
    setIsShowDataInSequence(true);
    setIsShowDataAtOnce(false);
  }

  return (
    <section>
      <div className="m-2">
        Usage of React Suspense for streaming data (simulated):
      </div>
      <button onClick={showDataAtOnce} className="m-2 border rounded p-2">
        Click to fetch data (all in one)
      </button>
      <button onClick={showDataInSequence} className="m-2 border rounded p-2">
        Click to fetch data (sequentially)
      </button>

      {isShowDataAtOnce && (
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
      {isShowDataInSequence && (
        <div>
          <Suspense fallback={<Loading />}>
            <DataForLoadingOne />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <DataForLoadingTwo />
          </Suspense>
        </div>
      )}
    </section>
  );
}
