export async function getSlowData(delay: number) {
  await wait(delay);
  return `data fetched in ${delay / 1000} seconds`;
}

export async function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
