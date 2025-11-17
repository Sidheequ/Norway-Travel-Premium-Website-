import React from 'react';
import './TestimonialSection.css';

export default function TestimonialSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <p className="leading-relaxed text-lg">
          “Travel is not just about distances crossed, but about horizons expanded — every step away from home is a step closer to understanding who you are.”
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            NORWAY TRAVEL PREMIUM
          </h2>
        </div>
      </div>
    </section>
  );
}
