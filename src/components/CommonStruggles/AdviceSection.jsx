import Image from 'next/image';
import React from 'react';

const AdviceSection = () => {
  return (
    <div className="bg-gradient-to-r h-[388px] from-[#2C3E50] to-[#34495E] p-8 rounded-lg flex items-center justify-center">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src="/card1.jpg" // Path to your image in the public folder
          width={800} // Set the width for your image
          height={300} // Set the height for your image (aspect ratio)
          alt="Work-Life Balance"
          className="rounded-lg shadow-lg" // Use rounded corners and shadow for styling
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 ml-8 text-white">
        <div className="bg-white text-[#2C3E50] text-xs font-semibold uppercase py-1 px-3 inline-block rounded-lg mb-4">
          Work-Life Balance
        </div>
        <h2 className="text-4xl font-bold mt-4 mb-4">
          When everything feels like too much it’s time to find your <span className="text-blue-500">balance.</span>
        </h2>
        <p className="text-lg mb-4">
          Long hours, endless to-do lists, and constant pressure can take a toll on your mental health. If you're feeling burned out, distracted.
        </p>
        <div className="flex items-center text-blue-500 cursor-pointer">
          <span className="mr-2">Learn More</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AdviceSection;
