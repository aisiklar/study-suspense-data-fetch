

export default function ComponentA() {
  console.log("component A rendered")
  // this below line doesnt work bc this component is server side
  // and window object is only available on client side
  // console.log("window.location at component A: ", window.location)

  return (
    <>
      <h1>Component A</h1>
    </>
  )
}
