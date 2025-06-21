import Fruit from "./Fruit";
export default function Fruits() {
  //   const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const fruits = [
    { id: 1, name: "Apple", emoji: "🍎", price: 12 },
    { id: 2, name: "Banana", emoji: "🍌", price: 2 },
    { id: 3, name: "Cherry", emoji: "🍒", price: 5 },
    { id: 4, name: "Date", emoji: "🌴", price: 3 },
    { id: 5, name: "Elderberry", emoji: "🍇", price: 8 },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit fruit={fruit} key={fruit.id} />
        ))}
      </ul>
    </div>
  );
}
