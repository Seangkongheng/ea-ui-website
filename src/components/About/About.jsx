import React from "react";

const About = () => {
  return (
    <div className=" text-white mt-28">
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1581092580490-7e2d6b6182d8?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center h-[60vh] flex items-center justify-center">
        <div className="border-[#BAFD00] border bg-opacity-50 p-10 rounded-xl text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#BAFD00]">
            About Us
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Discover our mission, vision, and the team dedicated to bringing
            you the best automation tools for XAUUSD trading.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;
