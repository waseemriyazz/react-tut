export default function Message() {
  function handleClick() {
    console.log("Button clicked!");
  }

  return (
    <div>
      <button onClick={handleClick}>Click me and check console</button>
    </div>
  );
}
