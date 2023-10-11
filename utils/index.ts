export async function getSlowData(delay: number) {
  console.log("in getSlowData func.");
  await wait(delay);
  return `data fetched in ${delay / 1000} seconds`;
}

// delay time
export async function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
