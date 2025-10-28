import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    getMenuAPI();
  }, []);
  const getMenuAPI = async () => {
    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurantMenu/" + resId
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  const { costForTwoMessage, name, cuisines } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  if (resInfo === null) return <Shimmer />;
  return (
    <div className="resMenu-container">
      <h2>{name}</h2>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {(item.card.info.price / 100).toFixed(2) ||
              (item.card.info.defaultPrice / 100).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
