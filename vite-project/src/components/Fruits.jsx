import Fruit from "./Fruit";
export default function Fruits() {
  //   const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const fruits = [
    { id: 1, name: "Apple", emoji: "🍎", price: 12, soldOut: false },
    { id: 2, name: "Banana", emoji: "🍌", price: 2, soldOut: true },
    { id: 3, name: "Cherry", emoji: "🍒", price: 5, soldOut: false },
    { id: 4, name: "Date", emoji: "🌴", price: 3, soldOut: false },
    { id: 5, name: "Elderberry", emoji: "🍇", price: 8, soldOut: false },
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
