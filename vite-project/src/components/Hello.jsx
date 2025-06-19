const name = "Jack";
function displayName(name) {
  return `Hello, my name is ${name}`;
}

function Hello(props) {
  return (
    <div>
      <h1>Hello from a component! </h1>
      <h2>My name is {name}.</h2>
      <h3>{displayName("Bob")}</h3>
      <h4>Two and two are {2 + 2}</h4>
      <h1>****Data from props***</h1>
      <h2>Hello prop name {props.name}.</h2>
      <h2>Prop message {props.message}.</h2>
    </div>
  );
}

export default Hello;
