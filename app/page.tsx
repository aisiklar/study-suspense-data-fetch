import { projectSubjects } from "@/constants";
import Link from "next/link";

export default function Home() {
  console.log("at home page");

  return (
    <section>
      <p className="mt-2 ml-2">
        This Projectissimo will cover following subjects:
      </p>

      <div className="ml-2 mt-3">
        {projectSubjects.map((subject, index) => {
          return (
            <div key={index} className="flex">
              <p className="ml-2 mr-4">{index + 1}</p>
              <p>
                <Link href={subject.link}>{subject.subject}</Link>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
