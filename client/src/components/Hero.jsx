import React from "react";

const HeroSection = () => {
  const scrollToEvents = () => {
    document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen pt-20 ">
        {/* Brand Name */}
        <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent text-start absolute top-7 left-3 z-20">
          Eventflow
        </h1>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl font-bold leading-tight text-gray-900 mb-6">
              Discover{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Amazing Events
              </span>
              <br />
              Book Instantly
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              From tech summits to music festivals, find and book the perfect
              events that match your interests. Seamless booking, instant
              confirmations.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-12">
              <button
                onClick={scrollToEvents}
                className="bg-gradient-to-r from-red-600 to-red-800 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:-translate-y-1 transition"
              >
                Explore Events
              </button>
              <button className="border-2 border-red-600 text-red-600 py-3 px-6 rounded-full font-semibold hover:bg-red-600 hover:text-white transition">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <p className="text-2xl font-bold text-red-600">50K+</p>
                <p className="text-sm text-gray-500 font-medium">Events Booked</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">10K+</p>
                <p className="text-sm text-gray-500 font-medium">
                  Happy Customers
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">500+</p>
                <p className="text-sm text-gray-500 font-medium">
                  Event Partners
                </p>
              </div>
            </div>
          </div>

          {/* Right Floating Cards */}
          <div className="relative h-[500px]">
            {/* Card 1 */}
            <div className="absolute top-5 right-24 w-48 bg-white p-4 rounded-xl shadow-xl animate-float">
              <div className="flex justify-between mb-2 text-xs">
                <span className="bg-red-600 text-white px-2 py-1 rounded-full font-semibold">
                  Tech
                </span>
                <span className="text-gray-500 font-medium">Nov 15</span>
              </div>
              <h4 className="text-gray-800 font-semibold mb-1">
                Innovation Summit
              </h4>
              <p className="text-red-600 font-bold text-lg">$99.99</p>
            </div>

            {/* Card 2 */}
            <div className="absolute top-48 right-6 w-48 bg-white p-4 rounded-xl shadow-xl animate-float delay-2000">
              <div className="flex justify-between mb-2 text-xs">
                <span className="bg-red-600 text-white px-2 py-1 rounded-full font-semibold">
                  Music
                </span>
                <span className="text-gray-500 font-medium">Dec 1</span>
              </div>
              <h4 className="text-gray-800 font-semibold mb-1">Music Festival</h4>
              <p className="text-red-600 font-bold text-lg">$49.99</p>
            </div>

            {/* Card 3 */}
            <div className="absolute top-[320px] right-28 w-48 bg-white p-4 rounded-xl shadow-xl animate-float delay-4000">
              <div className="flex justify-between mb-2 text-xs">
                <span className="bg-red-600 text-white px-2 py-1 rounded-full font-semibold">
                  Food
                </span>
                <span className="text-gray-500 font-medium">Nov 20</span>
              </div>
              <h4 className="text-gray-800 font-semibold mb-1">
                Culinary Workshop
              </h4>
              <p className="text-red-600 font-bold text-lg">$75.00</p>
            </div>
          </div>
        </div>

        {/* Background Circles */}
        <div className="absolute w-full h-full top-0 left-0 z-0 overflow-hidden">
          <div className="absolute w-[300px] h-[300px] rounded-full bg-red-200 top-[-150px] right-[-150px]"></div>
          <div className="absolute w-[200px] h-[200px] rounded-full bg-red-100 bottom-[100px] left-[-100px]"></div>
          <div className="absolute w-[150px] h-[150px] rounded-full bg-red-100 top-1/2 left-[10%]"></div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
