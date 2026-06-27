import React from 'react';

export default function TopBanner() {
  return (
    <div className="bg-[#1f1f1f] text-white text-xs px-12 py-3 flex gap-6">
      <a href="#" className="font-bold border-b border-white pb-0.5">For Individuals</a>
      <a href="#" className="hover:text-gray-300">For Businesses</a>
      <a href="#" className="hover:text-gray-300">For Universities</a>
      <a href="#" className="hover:text-gray-300">For Governments</a>
    </div>
  );
}
