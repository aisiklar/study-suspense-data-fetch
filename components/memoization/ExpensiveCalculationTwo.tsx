import { doExpensiveCalculation } from "@/utils";
import { useEffect, useState } from "react";
import ListNoMemo from "./ListNoMemo";

type Props = {
  render: number;
};

export default function ExpensiveCalculationTwo(props: Props) {
  console.log("ExpensiveCalculationTwo rendered: ", props.render);
  let resultWithNoMemo = doExpensiveCalculation("10");

  return (
    <section>
      <p className="mt-2">The results:</p>
      <ListNoMemo render={props.render} data={resultWithNoMemo} />
    </section>
  );
}
