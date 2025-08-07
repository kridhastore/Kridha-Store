const ContactInformation = () => {
  return (
    <div className="min-h-[75vh] bg-white px-4 py-12 flex flex-col items-center">
      {/* Heading */}
      <h1 className="mb-10 text-3xl font-semibold text-center text-gray-800 font-great-vibes sm:text-4xl">
        Contact Information
      </h1>

      {/* Info Block */}
      <div className="space-y-4 w-full max-w-2xl text-center text-gray-700">
        <p>
          <strong>Trade name:</strong> Kridha Craft Store
        </p>
        <p>
          <strong>Phone number:</strong>{" "}
          <a href="tel:+91 76782 67785" className="text-pink-600 underline">
            76782 67785
          </a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:support@kridhacraftstore.com"
            className="text-pink-600 underline"
          >
            support@kridhacraftstore.com
          </a>
        </p>
        <p>
          <strong>Physical address:</strong> Rajajipuram, 226017 Lucknow UP,
          India
        </p>
      </div>
    </div>
  );
};

export default ContactInformation;
