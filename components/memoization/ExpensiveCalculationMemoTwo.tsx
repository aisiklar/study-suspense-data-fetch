import { doExpensiveCalculation } from "@/utils";
import { useEffect, useMemo, useState } from "react";
import ListWithMemo from "./ListWithMemo";

type Props = {
  render: number;
};

export default function ExpensiveCalculationMemoTwo(props: Props) {
  console.log("ExpensiveCalculationMemoTwo rendered: ", props.render);

  let resultWithMemo = useMemo(() => doExpensiveCalculation("10"), [props.qty]);

  console.log("resultWithMemo:", resultWithMemo);

  return (
    <section>
      <p className="mt-2">The results:</p>
      <ListWithMemo render={props.render} data={resultWithMemo} />
    </section>
  );
}
