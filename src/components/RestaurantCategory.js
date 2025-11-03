import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showIndex, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(!showIndex);
  };
  return (
    <div
      onClick={() => {
        handleClick();
      }}
    >
      <div className="m-2 p-2 border border-gray-300 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 w-100">
        <span className="text-lg font-semibold p-4 cursor-pointer">
          {data?.title} ({data?.itemCards?.length}) ⬇
        </span>
      </div>
      <div>{showItems && <ItemsList items={data?.itemCards} />}</div>
    </div>
  );
};
export default RestaurantCategory;
