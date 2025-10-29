import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
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
  return resInfo;
};
export default useRestaurantMenu;
