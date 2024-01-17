import DummyComp1 from "@/components/dummyComponents/DummyComp1";
import NoLazyClientComp from "@/components/lazyloading/NoLazyClientComp";
import Link from "next/link";

export default function LazyHome() {
  return (
    <div className="m-2">
      <h1>Exercise when lazy loading is not done (no NEXT/dynamic())</h1>

      <div>
        <NoLazyClientComp />
      </div>
    </div>
  );
}
