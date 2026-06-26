import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  return (
    <div className="bg-white py-20 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Frequently asked questions</h2>
        
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="border-b border-gray-200 p-6 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition">
            <ChevronDown className="text-gray-900 shrink-0" size={20} />
            <h3 className="font-bold text-lg text-gray-900">Can I try Coursera Plus first, to make sure it's right for me?</h3>
          </div>
          <div className="border-b border-gray-200 p-6 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition">
            <ChevronDown className="text-gray-900 shrink-0" size={20} />
            <h3 className="font-bold text-lg text-gray-900">What is included in Coursera Plus?</h3>
          </div>
          <div className="p-6 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition">
            <ChevronDown className="text-gray-900 shrink-0" size={20} />
            <h3 className="font-bold text-lg text-gray-900">Will I save money with Coursera Plus?</h3>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <button className="text-gray-900 font-bold text-sm flex items-center justify-center gap-2 hover:underline">
            Show all 8 frequently asked questions <ChevronDown size={16} />
          </button>
        </div>
        
        <div className="mt-12 text-sm text-[#0056D2] hover:underline cursor-pointer pt-6">
          1 - Learner Outcome Report 2025
        </div>
      </div>
    </div>
  );
}
