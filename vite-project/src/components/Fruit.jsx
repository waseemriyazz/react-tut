export default function Fruit({ fruit }) {
  return (
    // <li>
    //   {fruit.emoji} {fruit.name} - ${fruit.price}
    // </li>

    <li>
      {fruit.emoji} {fruit.name} - ${fruit.price}{" "}
      {fruit.soldOut ? " Sold Out" : ""}
    </li>
  );
}
