import { memo } from "react";

type Props = {
  render: number;
  data: any[];
};

//function ListWithMemo(props: Props) {

// it seems it is not really necessary to wrap the comp in memo()
const ListWithMemo = memo(function ListWithMemo(props: Props) {
  console.log("ListWithMemo rendered");
  let resultWithMemo = props.data;

  return (
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
  );
}
);

export default ListWithMemo;
