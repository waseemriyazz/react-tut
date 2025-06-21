import Fruits from "./Fruits";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  const display = false;
  if (display) {
    return (
      <div>
        <Welcome />
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <Fruits />
      </div>
    );
  }
}
