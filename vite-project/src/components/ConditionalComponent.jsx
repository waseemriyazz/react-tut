import Fruits from "./Fruits";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  const display = false;
  return display ? <Welcome /> : <Fruits />;
}
