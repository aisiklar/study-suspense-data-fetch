import { type } from "os";

export async function getSlowData(delay: number) {
  console.log("in getSlowData func.");
  await wait(delay);
  return `data fetched in ${delay / 1000} seconds`;
}

// delay time
export async function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export function doExpensiveCalculation(qtyInput: string) {
  console.log("qtyInput: ", qtyInput, typeof qtyInput);
  let qty = parseInt(qtyInput);

  console.log("qty in doExpensiveCalculation: ", qty, typeof qty);
  let Arr = new Array(qty);

  let start = performance.now();

  while (performance.now() - start < (500 * qty) / 5) {
    // waiting here
  }

  for (let i = 0; i < Arr.length; i++) {
    //Arr[i] = Math.floor(Math.random() * i);
    Arr[i] = i;
  }
  console.log("Arr: ", Arr);
  return Arr;
}
