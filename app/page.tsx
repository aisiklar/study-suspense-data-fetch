import { projectSubjects } from "@/constants";
import Link from "next/link";

export default function Home() {
  console.log("at home page");

  let style_Link =
    "px-2 py-1 hover:no-underline hover:font-semibold hover:text-white visited:no-underline focus:no-underline focus:text-white";

  return (
    <section>
      <p className="mt-2 ml-2">
        This study-projectissimo will cover following subjects:
      </p>

      <div className="ml-2 mt-3">
        {projectSubjects.map((subject, index) => {
          return (
            <div key={index} className="flex mx-2">
              <p className="border rounded px-2 py-1 my-1">
                <Link className={style_Link} href={subject.link}>
                  {subject.subject}
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
