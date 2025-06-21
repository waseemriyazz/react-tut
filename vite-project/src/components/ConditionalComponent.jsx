import Fruits from "./Fruits";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  const display = true;
  let message;
  if (display) {
    message = <Welcome />;
  } else {
    message = (
      <div>
        {" "}
        <Fruits />
      </div>
    );
  }
  return message;
}
