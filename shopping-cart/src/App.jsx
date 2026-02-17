import {
  addToCart,
  calculateTotal,
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "./features/cart/cartSlice";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";

const products = [
  { id: 1, title: "Bag", price: 1000 },
  { id: 2, title: "Shoes", price: 2200 },
  { id: 3, title: "Shirt", price: 800 },
  { id: 4, title: "Jeans", price: 1800 },
];
function App() {
  const cartProducts = useSelector((state) => state.cart.items);

  const amount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();

  function handleAddToCartClick(item) {
    dispatch(addToCart(item));
    dispatch(calculateTotal());
  }

  function handleIncQtyClick(item) {
    dispatch(increaseQty(item));
    dispatch(calculateTotal());
  }

  function handleDecQtyClick(item) {
    dispatch(decreaseQty(item));
    dispatch(calculateTotal());
  }

  function handleRemoveClick(item){
    dispatch(removeFromCart(item));
    dispatch(calculateTotal());
  }

  return (
    <div className="p-8 flex flex-col gap-20">
      <div className="grid grid-cols-2 gap-6">
        {products.map((item) => (
          <div key={item.id} className="flex flex-col gap-2 border-2 border-grey p-4 rounded-lg">
            <h1 className="font-bold text-2xl">{item.title}</h1>
            <img src="" alt={item.title} />
            <p className="font-semibold">Rs. {item.price}</p>
            <button
              onClick={() => handleAddToCartClick(item)}
              className="bg-red-600 text-white p-1 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Cart</h1>

        {cartProducts.length === 0 && <p>Cart is empty..</p>}

        {cartProducts.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-2 mb-2"
          >
            <div>
              <p className="font-semibold">{item.title}</p>
              <p>
                ₹{item.price} x {item.quantity}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleIncQtyClick(item.id)}
                className="px-2 bg-gray-300"
              >
                +
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleDecQtyClick(item.id)}
                className="px-2 bg-gray-300"
              >
                -
              </button>
              <button
                onClick={() => handleRemoveClick(item.id)}
                className="px-2 bg-red-500 text-white rounded"
              >Remove</button>
            </div>
          </div>
        ))}

        <p className="mt-4 font-bold text-xl">Total Amount: ₹{amount}</p>
      </div>
    </div>
  );
}

export default App;
