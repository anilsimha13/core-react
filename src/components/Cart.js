import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container text-center m-10 p-10 border border-gray-300 font-bold text-xl">
      <h3>Cart Items</h3>
      <button
        onClick={handleClearCart}
        className="bg-red-500 text-white p-2 m-4 rounded-md cursor-pointer"
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h4>Your cart is empty!</h4>}
      <ItemsList items={cartItems} />
    </div>
  );
};

export default Cart;
