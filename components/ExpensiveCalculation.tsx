import { doExpensiveCalculation } from "@/utils";
import { useEffect, useState } from "react";

type Props = {
  qty: string;
  isShown: (state: boolean) => void;
};

export default function ExpensiveCalculation(props: Props) {
  console.log("ExpensiveCalculation rendered");
  const [result, setResult] = useState<number[]>([]);
  console.log("result:", result);

  useEffect(() => {
    console.log("in useEffect");
    let resultWithNoMemo = doExpensiveCalculation(props.qty);
    setResult(resultWithNoMemo);
  }, []);

  return (
    <section>
      <p className="mt-2">The results:</p>
      <ul className="ml-4">
        {result.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
