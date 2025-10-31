import RestaurantCard, { vegNonVegLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [filteredRestaurant, setFilteredRestaurant] = useState([]);
  console.log(listOfRestaurants);
  let VegNonVegLabel = vegNonVegLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    const restaurants =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>oops!! you are offline</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter flex items-center justify-between w-full">
        <div className="search flex items-center">
          <input
            type="text"
            placeholder="Search any restaurant"
            className="border border-gray-600 px-4 py-1.5 rounded-md w-54 m-4 h-10"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="rounded-full bg-orange-500 text-white px-4 ml-1 mr-4 my-4 h-12 hover:bg-orange-700 transition-colors cursor-pointer"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filteredRes);
              setFilteredRestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex justify-end">
          <button className="bg-amber-500 px-6 h-12 rounded-3xl m-4 text-white font-bold cursor-pointer">
            Dummy
          </button>
          <button
            className="rounded-full bg-green-500 text-white px-6 m-4 h-12 whitespace-nowrap flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer "
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info?.avgRating > 4.3
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((res) =>
          res.info.veg ? (
            <VegNonVegLabel resData={res} key={res.info.id} />
          ) : (
            <RestaurantCard resData={res} key={res.info.id} />
          )
        )}
      </div>
    </div>
  );
};
export default Body;
