import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    getMenuAPI();
  }, []);
  const getMenuAPI = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4400802&lng=78.3489168&restaurantId=345899&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
    console.log(json.data);
  };

  if (resInfo === null) return <Shimmer />;
  return (
    <div className="resMenu-container">
      <h2>
        {
          resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants[0]?.info?.name
        }
      </h2>
      <p>
        {resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.cuisines.join(
          ", "
        )}
      </p>
      <h3>Menu</h3>
      <ul>
        <li>Paneer Butter Masala</li>
        <li>Dal Makhani</li>
        <li>Jeera Rice</li>
        <li>Naan</li>
        <li>Gulab Jamun</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
