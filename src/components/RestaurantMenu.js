import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  const { costForTwoMessage, name, cuisines } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  if (resInfo === null) return <Shimmer />;
  return (
    <div className="p-4 m-4 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold p-4 bg-linear-to-r from-pink-400 via-red-500 to-ornage-500 w-100 text-white rounded-md">
        {name}
      </h1>
      <p className="text-gray-600 p-4 italic font-semibold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={showIndex === index}
          setShowIndex={() => {
            setShowIndex(showIndex === index ? null : index);
          }}
        />
      ))}
      <ul></ul>
    </div>
  );
};
export default RestaurantMenu;
