import { getSlowData } from "@/utils";

export default async function DataForLoadingOne() {
  console.log("DataForLoading rendered");
  let response = await getSlowData(1000);

  console.log("response: ", response);

  return (
    <section className="">
      <div className="mt-2  p-2">
        <p className="text-2xl">{response}</p>
      </div>
    </section>
  );
}
