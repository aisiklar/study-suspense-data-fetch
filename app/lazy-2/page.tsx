import LazyClientComp from "@/components/lazyloading/LazyClientComp";

export default function Lazy2Home() {
  return (
    <div className="m-2">
      <h1>Lazy Loading using Next.js dynamic() function</h1>

      <div>
        <LazyClientComp />
      </div>
    </div>
  );
}
