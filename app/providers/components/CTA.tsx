import React from "react";

export default function CTA() {
  return (
    <section className="bg-[#231f1e] text-[#F4EFE7] py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to Transform Your Practice?
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto font-light">
          Join leading healthcare providers who are revolutionizing aging care
          with our advanced platform.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-[#f8f3e3] text-black px-6 py-3 rounded-full font-medium shadow-[0_0_15px_rgba(248,243,227,0.5)] hover:shadow-[0_0_20px_rgba(248,243,227,0.7)] transition-all">
            Schedule a Demo
          </button>
          <button className="px-8 py-3 border border-gray-600 hover:border-gray-400 bg-transparent rounded-full font-medium transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
