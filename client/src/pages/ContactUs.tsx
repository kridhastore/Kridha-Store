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
    <div className="min-h-screen flex items-center justify-center px-4 py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Left Card: Info */}
        <div className=" p-8 rounded-3xl shadow-xl">
          <h1 className="text-3xl font-bold text-pink-700 mb-4">
            We Hear You ❤️
          </h1>
          <span>
            <p className="text-gray-700 mb-4">
              If you've experienced any inconvenience, we're truly sorry. We
              care deeply about your experience and are here to make it right.
            </p>
            <p className="text-gray-700 mb-4">
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
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-pink-700 mb-6 text-center">
            Contact Us
          </h1>
          <p className="text-gray-600 text-center mb-8">
            We'd love to hear from you! Whether it's a question, feedback, or a
            custom order request — we're here to help.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200"
            >
              Send Message
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
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
