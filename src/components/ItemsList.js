import { CDN_URL } from "../utils/constants";
const ItemsList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li className="text-green-700 p-2" key={item.card.info.id}>
          <img
            src={`${CDN_URL}${item.card.info.imageId}`}
            alt={item.card.info.name}
            className="w-16 h-16 object-cover inline-block mr-4"
          />
          {item.card.info.name} - ₹
          {(item.card.info.price / 100).toFixed(2) ||
            (item.card.info.defaultPrice / 100).toFixed(2)}
          <button
            className="bg-green-500 text-white p-1 rounded-md cursor-pointer"
            style={{ marginLeft: "10px" }}
          >
            Add ✚
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ItemsList;
