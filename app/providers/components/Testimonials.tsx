import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Testimonials() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#231f1e] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header with title and CTA button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-0">Elevate Your Practice</h2>
          <Link 
            href="/providers/register" 
            className="bg-[#f8f3e3] text-black px-6 py-3 rounded-full font-medium shadow-[0_0_15px_rgba(248,243,227,0.5)] hover:shadow-[0_0_20px_rgba(248,243,227,0.7)] transition-all"
          >
            Become a Provider
          </Link>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-transparent border border-[#f8f3e3] rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-[#3a5a55]">
              <Image 
                src="/doctors/doctor1.jpg"
                alt="Dr. James Pattinson"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Dr. James Pattinson</h3>
            <p className="text-gray-400 text-sm mb-4">Explore Longevity Clinic, Los Angeles</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              "Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultricies."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-transparent border border-[#f8f3e3] rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-[#3a5a55]">
              <Image 
                src="/doctors/doctor2.jpg"
                alt="Dr. Clayton Anderwson"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Dr. Clayton Anderwson</h3>
            <p className="text-gray-400 text-sm mb-4">Peek Longevity Clinic, New York</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              "Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultricies."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-transparent border border-[#f8f3e3] rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-[#3a5a55]">
              <Image 
                src="/doctors/doctor3.jpg"
                alt="Dr. Kate Ma"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Dr. Kate Ma</h3>
            <p className="text-gray-400 text-sm mb-4">Peek Longevity Clinic, New York</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              "Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultricies."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}