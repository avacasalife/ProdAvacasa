"use client";

export default function C7() {
  return (
    <div className="w-full mt-20" id="c7">
      <div className="bg-gray-200 text-center py-10 px-4">
        <h2 className="text-3xl font-semibold text-sky-950">
          Contact Our Property Experts
        </h2>
        <p className="text-gray-600 mt-2">
          Your dream home is just a call away!
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black hover:border border-1 border-black transition duration-300">
            GET IN TOUCH NOW
          </button>
          <button className="border border-gray-900 text-gray-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-white transition">
            CALL US
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center py-10 px-6 md:px-20 space-y-6 md:space-y-0 md:space-x-32">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="https://your-avacasa-logo-url.com/logo.png"
            alt="Avacasa Logo"
            className="w-40 h-40 object-contain"
          />
          <h3 className="text-xl font-semibold text-sky-950 mt-4">
            Luxury Living & Modern Homes
          </h3>
          <p className="text-gray-600 mt-2 max-w-sm">
            Avacasa helps you find the perfect home that fits your lifestyle,
            blending luxury with comfort.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-sky-950">+91 98765 43210</h3>
          <p className="text-gray-600 mt-1">
            Avacasa, 5th Avenue, Dream Residency, <br />
            Mumbai, Maharashtra 400001
          </p>
          <button className="mt-2 bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black hover:border border-1 border-black transition duration-300">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}