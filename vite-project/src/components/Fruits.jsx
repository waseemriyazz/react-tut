export default function Fruits() {
  //   const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const fruits = [
    { key: 1, name: "Apple", emoji: "🍎", price: 12 },
    { key: 2, name: "Banana", emoji: "🍌", price: 2 },
    { key: 3, name: "Cherry", emoji: "🍒", price: 5 },
    { key: 4, name: "Date", emoji: "🌴", price: 3 },
    { key: 5, name: "Elderberry", emoji: "🍇", price: 8 },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.key}>
            {fruit.emoji} {fruit.name} ${fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
