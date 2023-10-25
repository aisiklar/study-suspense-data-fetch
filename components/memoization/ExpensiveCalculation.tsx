import { doExpensiveCalculation } from "@/utils";
import { useEffect, useState } from "react";

type Props = {
  render: number;
};

export default function ExpensiveCalculation(props: Props) {
  console.log("ExpensiveCalculation rendered: ", props.render);
  let resultWithNoMemo = doExpensiveCalculation("10");

  return (
    <section>
      <p className="mt-2">The results:</p>
      <ul
        className={
          props.render % 2 == 0
            ? "mt-2 bg-blue-200 text-black"
            : "mt-2 bg-red-200 text-black"
        }
      >
        {resultWithNoMemo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
