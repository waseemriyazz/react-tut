import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted with: ", name);
  }
  return (
    <div>
      <h3>
        {name.firstname} - {name.lastname}
      </h3>
      <form>
        <input
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
          type="text"
          value={name.firstname}
        />
        <input
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
          type="text"
          value={name.lastname}
        />
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}
