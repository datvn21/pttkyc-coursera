import React from 'react';

export default function Outcomes() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 pr-12">
        <h2 className="text-4xl font-bold mb-8 leading-tight text-gray-900">
          Join the 91% of learners who achieved a positive career outcome, like new job opportunities, increased knowledge, and improved performance at work.¹
        </h2>
        <button className="border border-[#0056D2] text-[#0056D2] font-medium px-6 py-3 rounded-xl hover:bg-blue-50 transition hover:shadow-sm bg-white">
          Search Coursera Plus
        </button>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
        <div className="relative w-full max-w-[500px] h-[400px]">
          {/* Abstract shape for the background */}
          <div className="absolute inset-0 bg-[#0056D2] rounded-tl-[100px] rounded-br-[150px] rounded-tr-xl rounded-bl-xl transform -rotate-6 opacity-90"></div>
          <div className="absolute inset-2 bg-blue-100 rounded-tl-[100px] rounded-br-[150px] rounded-tr-xl rounded-bl-xl transform rotate-3"></div>

          <div className="absolute right-0 top-0 w-[95%] h-[95%] rounded-tr-[150px] rounded-bl-[150px] overflow-hidden shadow-xl z-10">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" alt="Learner" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </div>
    </div>
  );
}
