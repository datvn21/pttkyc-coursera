import React from 'react';
import { Search } from 'lucide-react';

export default function SearchPrograms() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Search 10,000+ learning programs</h2>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input 
          type="text" 
          placeholder="e.g. Machine Learning" 
          className="w-full border-2 border-gray-800 rounded-full py-4 pl-12 pr-16 focus:outline-none focus:ring-2 focus:ring-[#0056D2] text-lg"
        />
        <button className="absolute right-2 top-2 bottom-2 bg-[#0056D2] text-white rounded-full w-12 flex items-center justify-center hover:bg-blue-700 transition">
          <Search size={20} />
        </button>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 text-sm">
        <span className="font-medium mt-1">Popular</span>
        <a href="#" className="bg-gray-100 hover:bg-gray-200 px-4 py-1.5 rounded-full text-gray-700 transition">Business</a>
        <a href="#" className="bg-gray-100 hover:bg-gray-200 px-4 py-1.5 rounded-full text-gray-700 transition">Computer Science</a>
        <a href="#" className="bg-gray-100 hover:bg-gray-200 px-4 py-1.5 rounded-full text-gray-700 transition">Data Science</a>
        <a href="#" className="bg-gray-100 hover:bg-gray-200 px-4 py-1.5 rounded-full text-gray-700 transition">Health</a>
        <a href="#" className="bg-gray-100 hover:bg-gray-200 px-4 py-1.5 rounded-full text-gray-700 transition">Information Technology</a>
        <a href="#" className="bg-gray-100 hover:bg-gray-200 px-4 py-1.5 rounded-full text-gray-700 transition">Arts and Humanities</a>
      </div>
    </div>
  );
}
