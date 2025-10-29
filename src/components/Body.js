import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [filteredRestaurant, setFilteredRestaurant] = useState([]);

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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurant.map((res) => (
          <RestaurantCard resData={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
