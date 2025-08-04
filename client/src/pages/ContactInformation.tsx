const ContactInformation = () => {
  return (
    <div className="min-h-[75vh] bg-white px-4 py-12 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-10 text-center">
        Contact Information
      </h1>

      {/* Info Block */}
      <div className="max-w-2xl w-full text-center text-gray-700 space-y-4">
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
