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
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src="https://static.toiimg.com/thumb/msid-101282760,width-1280,height-720,resizemode-4/101282760.jpg"
        />
        <h3>{name}</h3>
        <h4>{cuisines.map((cuisine) => cuisine).join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{deliveryTime} Mins</h4>
        <h4>{costForTwo}</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
