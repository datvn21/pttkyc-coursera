import React from 'react';

export default function BottomBanner() {
  return (
    <div className="bg-[#0056D2] text-white py-16 text-center px-6 flex flex-col items-center">
      <div className="flex justify-center items-center gap-2 mb-8">
        <span className="text-4xl font-bold tracking-tight">coursera</span>
        <span className="bg-white text-[#0056D2] text-xs font-bold px-1.5 py-0.5 rounded">PLUS</span>
      </div>
      
      <button className="bg-white text-[#0056D2] font-medium px-8 py-3 rounded-xl hover:bg-gray-100 transition hover:shadow-lg mt-4">
        Search Coursera Plus
      </button>
    </div>
  );
}
