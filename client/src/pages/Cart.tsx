// Cart.tsx
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const initialCart: CartItem[] = [
  {
    id: 1,
    name: "Pendant",
    price: 299,
    quantity: 1,
    image:
      "https://www.boldpetals.in/cdn/shop/collections/FullSizeRender.jpg?v=1745181260&width=535",
  },
  {
    id: 2,
    name: "Floral Bracelet",
    price: 199,
    quantity: 2,
    image:
      "https://www.boldpetals.in/cdn/shop/collections/IMG-0310.jpg?v=1745181573&width=535",
  },
];

const SHIPPING = 70;
const HANDLING = 20;
const TAX_RATE = 0.18;

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * TAX_RATE;
  const total = subtotal + SHIPPING + HANDLING + tax;

  return (
    <div className="px-4 py-8 min-h-screen bg-white">
      <h1 className="mb-8 text-3xl font-semibold text-center text-gray-800 font-great-vibes">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="mx-auto space-y-6 max-w-4xl">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 items-center pb-4 border-b"
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-24 h-24 rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-600">
                  ₹{item.price} × {item.quantity} = ₹
                  {item.price * item.quantity}
                </p>
                <div className="flex gap-2 items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          ))}

          <div className="mt-8 space-y-2 text-right text-gray-700">
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p>Shipping: ₹{SHIPPING.toFixed(2)}</p>
            <p>Handling Fee: ₹{HANDLING.toFixed(2)}</p>
            <p>Tax (18%): ₹{tax.toFixed(2)}</p>
            <h3 className="pt-2 text-xl font-semibold text-gray-800">
              Total: ₹{total.toFixed(2)}
            </h3>
            <button
              type="button"
              onClick={() => {
                navigate("/checkout");
              }}
              disabled={cartItems.length === 0}
              className="px-6 py-3 mt-4 text-white bg-pink-600 rounded-full transition cursor-pointer hover:bg-pink-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
