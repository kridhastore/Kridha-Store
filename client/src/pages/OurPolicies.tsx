const OurPolicies = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-gray-50 p-6 sm:p-8 md:p-12 rounded-2xl shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
          Our Policies
        </h1>

        {/* Shipping & Delivery */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Shipping & Delivery Policy
          </h2>
          <p className="text-gray-700 mb-2">
            At <strong>Kridha Craft Store</strong>, we ship all orders via
            trusted delivery partners like Delhivery and Amazon (prepaid only).
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Delivery Timeline:</strong> Orders are usually delivered
            within <strong>10–12 business days</strong>, depending on your
            location.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Shipping Charges:</strong> A flat delivery fee of ₹70 is
            applicable across India.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Order Tracking:</strong> Once your order is dispatched, we
            will share a tracking receipt on your registered WhatsApp number.
          </p>
          <p className="text-gray-700">
            <strong>Note:</strong> While we aim to deliver on time, delays may
            occasionally occur due to external factors such as weather, traffic,
            or courier issues. We appreciate your patience and support.
          </p>
        </section>

        {/* Privacy Policy */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Privacy Policy
          </h2>
          <p className="text-gray-700 mb-2">
            At <strong>Kridha Craft Store</strong>, your privacy matters. We
            collect only essential information such as your name, email, and
            browsing behavior to improve your experience and respond to your
            inquiries.
          </p>
          <p className="text-gray-700 mb-2">
            You have the right to{" "}
            <strong>access, update, or request deletion</strong> of your
            personal data at any time. You can also opt out of marketing
            messages if you prefer.
          </p>
          <p className="text-gray-700">
            For any questions or concerns related to your data, please reach out
            to us at{" "}
            <a href="tel:+9176782 67785" className="text-blue-600 underline">
              +91 76782 67785
            </a>
            .
          </p>
        </section>

        {/* Cancellations and Refunds */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Cancellations & Refunds
          </h2>
          <p className="text-gray-700 mb-2">
            To be eligible for a return or exchange, an{" "}
            <strong>unboxing video</strong> is mandatory. The video must capture
            the package being opened from the start without edits, filters, or
            breaks.
          </p>
          <p className="text-gray-700 mb-2">
            We do not accept returns for damages caused after the product is
            opened or mishandled. Products must be returned in their{" "}
            <strong>original condition</strong> with all packaging, including
            jewelry boxes.
          </p>
          <p className="text-gray-700 mb-2">
            If your return is approved, allow <strong>2 business days</strong>{" "}
            after we receive the product for the refund to be processed to your
            original payment method.
          </p>
        </section>
      </div>
    </div>
  );
};

export default OurPolicies;
