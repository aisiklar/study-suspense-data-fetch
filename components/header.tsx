import Link from "next/link";

export default function Header() {
  console.log("header rendered");
  let style_Link =
    "border border-black rounded px-2 py-1 hover:no-underline hover:font-semibold hover:text-black visited:no-underline focus:no-underline focus:text-black";

  return (
    <section>
      <div className=" border-black flex justify-between bg-slate-400 text-black p-3  ">
        <Link className={style_Link} href={"/"}>
          Home{" "}
        </Link>
      </div>
    </section>
  );
}
