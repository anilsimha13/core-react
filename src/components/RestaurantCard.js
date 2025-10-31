import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <Link
      to={"/restaurant/" + resData.info.id}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="res-card m-4 p-4 w-60 h-90 border border-gray-300 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-b from-orange-100 via-red-200 to-pink-300 cursor-pointer flex flex-col">
        <img
          className="w-40 h-40 rounded-md"
          alt="Comfort Food Placeholder"
          src={
            cloudinaryImageId
              ? CDN_URL + cloudinaryImageId
              : "https://placehold.co/200x200/e4e4e7/404040?text=Restaurant"
          }
          onError={(e) => {
            e.target.src =
              "https://placehold.co/200x200/e4e4e7/404040?text=Not+Found";
          }}
        />
        <h3 className="text-xl font-semibold">{name}</h3>
        <h4 className="text-gray-600">
          {cuisines.map((cuisine) => cuisine).join(", ")}
        </h4>
        <h4 className="text-black-600">{avgRating} ⭐</h4>
        <h4 className="text-black-600">{deliveryTime} Mins</h4>
        <h4 className="text-black-600">{costForTwo}</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
