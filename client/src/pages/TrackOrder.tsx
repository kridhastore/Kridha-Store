const TrackOrder = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-gray-50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          How to Track My Order
        </h1>

        <p className="text-gray-700 mb-4">Dear Customer,</p>

        <p className="text-gray-700 mb-4">
          Thank you for shopping with us! Once your order is placed, you will
          receive a confirmation email with your order details.
        </p>

        <p className="text-gray-700 mb-4">
          Within <strong>2–3 business days</strong> of placing the order, we
          will send your tracking information via both <strong>email</strong>{" "}
          and <strong>WhatsApp</strong>.
        </p>

        <p className="text-gray-700 mb-4">
          Delivery typically takes <strong>8–12 days</strong> to reach your
          doorstep, depending on your location and the courier service.
        </p>

        {/* <p className="text-gray-700 mb-4">
          You can also track your order from the <strong>“My Orders”</strong>{" "}
          section after logging into your account on our website.
        </p> */}

        <p className="text-gray-700 mb-4">
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

        <p className="text-gray-800 font-semibold mt-6">Happy Shopping! 😊</p>
      </div>
    </div>
  );
};

export default TrackOrder;
