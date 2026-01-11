import React from "react";

const Contact = () => {
  return (
    <div className="text-white mt-28">
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1581092580490-7e2d6b6182d8?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center h-[50vh] flex items-center justify-center">
        <div className="bg-opacity-50 p-10 rounded-xl text-center max-w-3xl border-[#BAFD00] border">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#BAFD00]">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            We're here to help. Send us a message and we'll get back to you as
            soon as possible.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
