const TrackOrder = () => {
  return (
    <div className="flex justify-center items-center px-4 py-8 min-h-screen bg-white">
      <div className="p-6 w-full max-w-3xl bg-gray-50 rounded-2xl shadow-lg sm:p-8 md:p-10">
        <h1 className="mb-6 text-2xl font-bold text-gray-800 font-great-vibes sm:text-3xl">
          How to Track My Order
        </h1>

        <p className="mb-4 text-gray-700">Dear Customer,</p>

        <p className="mb-4 text-gray-700">
          Thank you for shopping with us! Once your order is placed, you will
          receive a confirmation email with your order details.
        </p>

        <p className="mb-4 text-gray-700">
          Within <strong>2–3 business days</strong> of placing the order, we
          will send your tracking information via both <strong>email</strong>{" "}
          and <strong>WhatsApp</strong>.
        </p>

        <p className="mb-4 text-gray-700">
          Delivery typically takes <strong>8–12 days</strong> to reach your
          doorstep, depending on your location and the courier service.
        </p>

        {/* <p className="mb-4 text-gray-700">
          You can also track your order from the <strong>“My Orders”</strong>{" "}
          section after logging into your account on our website.
        </p> */}

        <p className="mb-4 text-gray-700">
          Didn’t receive tracking details within 3 days? Need help with a
          delayed order? Contact our support at{" "}
          <a
            href="mailto:support@yourstore.com"
            className="text-blue-600 underline"
          >
            kridhacraftstore@gmail.com
          </a>{" "}
          or message us directly on WhatsApp.
        </p>

        <p className="mt-6 font-semibold text-gray-800">Happy Shopping! 😊</p>
      </div>
    </div>
  );
};

export default TrackOrder;
