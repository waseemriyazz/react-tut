function HelloObject({ person }) {
  return (
    <div>
      <h1>Hello from a Object component! </h1>
      <h2>My name is {person.name}.</h2>
      <h2>Prop message {person.message}.</h2>
      <h2>Lucky Numbers {person.luckyNumbers}</h2>
    </div>
  );
}

export default HelloObject;
