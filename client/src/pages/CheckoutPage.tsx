import { useForm } from "react-hook-form";

interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  pinCode: string;
  phone: string;
}

const CheckoutPage = () => {
  const { register, handleSubmit } = useForm<CheckoutFormData>();

  const onSubmit = (data: CheckoutFormData) => {
    console.log("Form Data:", data);
  };

  const cartItems = [
    { id: 1, name: "Mor Jhumka", price: 59, qty: 1, image: "/mor.jpg" },
    { id: 2, name: "Jhoomar Jhumka", price: 49, qty: 1, image: "/jhoomar.jpg" },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="px-4 py-10 min-h-screen bg-gray-50 md:px-16">
      <div className="grid gap-8 mx-auto max-w-7xl md:grid-cols-2">
        {/* LEFT SIDE - Checkout Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm"
        >
          <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
          <input
            {...register("email")}
            placeholder="Email or mobile phone number"
            className="p-3 mb-4 w-full rounded-md border border-gray-200 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />

          <h2 className="mb-4 text-2xl font-semibold">Delivery</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              {...register("firstName")}
              placeholder="First name"
              className="p-3 rounded-md border border-gray-200"
            />
            <input
              {...register("lastName")}
              placeholder="Last name"
              className="p-3 rounded-md border border-gray-200"
            />
          </div>
          <input
            {...register("address")}
            placeholder="Address"
            className="p-3 mb-4 w-full rounded-md border border-gray-200"
          />
          <input
            {...register("apartment")}
            placeholder="Apartment, suite, etc. (optional)"
            className="p-3 mb-4 w-full rounded-md border border-gray-200"
          />

          <div className="grid grid-cols-3 gap-4 mb-4">
            <input
              {...register("city")}
              placeholder="City"
              className="p-3 rounded-md border border-gray-200"
            />
            <input
              {...register("state")}
              placeholder="State"
              className="p-3 rounded-md border border-gray-200"
            />
            <input
              {...register("pinCode")}
              placeholder="PIN code"
              className="p-3 rounded-md border border-gray-200"
            />
          </div>
          <input
            {...register("phone")}
            placeholder="Phone"
            className="p-3 mb-4 w-full rounded-md border border-gray-200"
          />

          <h2 className="mb-4 text-2xl font-semibold">Payment</h2>
          <div className="p-4 mb-6 bg-gray-50 rounded-lg border border-gray-200">
            <p className="mb-2 text-sm text-gray-500">
              Secure payment via UPI, Cards, NetBanking
            </p>
            <img src="/razorpay.png" alt="Razorpay" className="w-32" />
          </div>

          <button
            type="submit"
            className="py-3 w-full font-semibold text-white bg-orange-500 rounded-lg transition hover:bg-orange-600"
          >
            Pay Now
          </button>
        </form>

        {/* RIGHT SIDE - Order Summary */}
        <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm h-fit">
          <h2 className="mb-4 text-2xl font-semibold">Order Summary</h2>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-12 h-12 rounded-md"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                  </div>
                </div>
                <p className="font-medium">₹{item.price * item.qty}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 mt-6 space-y-2 border-t border-gray-200">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
            </div>
            <div className="flex justify-between mt-2 text-lg font-semibold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          <div className="mt-4">
            <input
              placeholder="Discount code"
              className="p-2 mr-2 w-2/3 rounded-md border border-gray-200"
            />
            <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
