import { useForm } from "react-hook-form";

// Types
type ContactFormInputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit = (data: ContactFormInputs) => {
    console.log("Submitted Data:", data);
    alert("Thank you for contacting us!");
    reset();
  };

  return (
    <div className="flex justify-center items-center px-4 py-12 min-h-screen">
      <div className="grid grid-cols-1 gap-8 w-full max-w-6xl md:grid-cols-2">
        {/* Left Card: Info */}
        <div className="p-8 rounded-3xl shadow-xl">
          <h1 className="mb-4 text-3xl font-bold text-pink-700 font-great-vibes">
            We Hear You ❤️
          </h1>
          <span>
            <p className="mb-4 text-gray-700">
              If you've experienced any inconvenience, we're truly sorry. We
              care deeply about your experience and are here to make it right.
            </p>
            <p className="mb-4 text-gray-700">
              Your suggestions matter! If there's a feature, a product idea, or
              anything you'd like to see, we’d love to hear it.
            </p>
            <p className="text-gray-700">
              Whether it's a small compliment or a big concern — thank you for
              trusting Kridha Craft Store. Let's create better together 💫
            </p>
          </span>
        </div>

        {/* Right Card: Form */}
        <div className="p-8 bg-white rounded-3xl shadow-2xl sm:p-10">
          <h1 className="mb-6 text-3xl font-bold text-center text-pink-700 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mb-8 text-center text-gray-600">
            We'd love to hear from you! Whether it's a question, feedback, or a
            custom order request — we're here to help.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Your full name"
                className={`w-full border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@]+@[^@]+\.[^@]+$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="you@example.com"
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                })}
                placeholder="+91 1234567890"
                className={`w-full border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows={5}
                placeholder="Type your message here..."
                className={`w-full border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300 resize-none`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 py-3 w-full font-semibold text-white bg-pink-600 rounded-xl transition duration-200 hover:bg-pink-700"
            >
              Send Message
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-500">
            Or email us at{" "}
            <a
              href="mailto:kridhacraftstore@gmail.com"
              className="text-pink-600 underline"
            >
              kridhacraftstore@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
