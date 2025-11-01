import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data }) => {
  const handleClick = () => {
    console.log("Clicked on category:", data?.title);
  };
  return (
    <div
      onClick={() => {
        handleClick();
      }}
    >
      <span className="text-lg font-semibold p-4 cursor-pointer">
        {data?.title} ({data?.itemCards?.length}) ⬇
      </span>
      <div>
        <ItemsList items={data?.itemCards} />
      </div>
    </div>
  );
};
export default RestaurantCategory;
