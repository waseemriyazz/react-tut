export default function Fruit({ fruit }) {
  return (
    // <li>
    //   {fruit.emoji} {fruit.name} - ${fruit.price}
    // </li>
    fruit.price > 3 ? (
      <li>
        {fruit.emoji} {fruit.name} - ${fruit.price}
      </li>
    ) : (
      ""
    )
  );
}
