type Props = {
  render: number;
  data: any[];
};

export default function ListNoMemo(props: Props) {
  console.log("ListNoMemo rendered");
  let resultWithNoMemo = props.data;

  return (
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
  );
}
