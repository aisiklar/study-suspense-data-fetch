import { doExpensiveCalculation } from "@/utils";
import { useEffect, useMemo, useState } from "react";

type Props = {
  qty: string;
};

export default function ExpensiveCalculationMemo(props: Props) {
  console.log("ExpensiveCalculation rendered");

  let resultWithMemo = useMemo(
    () => doExpensiveCalculation(props.qty),
    [props.qty]
  );

  console.log("resultWithMemo:", resultWithMemo);

  return (
    <section>
      <p className="mt-2">The results:</p>
      <ul className="ml-4">
        {resultWithMemo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
