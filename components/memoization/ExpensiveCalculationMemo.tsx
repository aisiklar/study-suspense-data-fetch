import { doExpensiveCalculation } from "@/utils";
import { useEffect, useMemo, useState } from "react";

type Props = {
  render: number;
};

export default function ExpensiveCalculationMemo(props: Props) {
  console.log("ExpensiveCalculationMemo rendered: ", props.render);

  let resultWithMemo = useMemo(() => doExpensiveCalculation("10"), [props.qty]);

  console.log("resultWithMemo:", resultWithMemo);

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
        {resultWithMemo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
