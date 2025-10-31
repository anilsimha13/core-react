import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const { costForTwoMessage, name, cuisines } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  if (resInfo === null) return <Shimmer />;
  return (
    <div className="p-4 m-4 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold p-4 bg-linear-to-r from-pink-400 via-red-500 to-ornage-500 w-100 text-white rounded-md">
        {name}
      </h1>
      <p className="text-gray-600 p-4 italic font-semibold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3 className="text-xl font-semibold p-4">Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li className="text-green-700 p-2 " key={item.card.info.id}>
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
