import React from 'react';

export default function Companies() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-center border-b border-gray-200">
      <h2 className="text-2xl font-bold mb-8">Learn from 350+ top universities and companies</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
        <div className="text-xl font-bold text-orange-600 flex items-center gap-2"><span className="text-2xl">I</span> ILLINOIS</div>
        <div className="text-xl font-serif text-blue-900">Duke</div>
        <div className="text-xl font-bold text-gray-500"><span className="text-blue-500">G</span><span className="text-red-500">o</span><span className="text-yellow-500">o</span><span className="text-blue-500">g</span><span className="text-green-500">l</span><span className="text-red-500">e</span></div>
        <div className="w-12 h-12 bg-yellow-400 text-blue-900 font-bold flex items-center justify-center text-2xl">M</div>
        <div className="text-2xl font-bold text-blue-700 tracking-widest">IBM</div>
        <div className="text-xl font-serif text-yellow-700">VANDERBILT</div>
        <div className="text-xl font-serif text-blue-900">JOHNS HOPKINS</div>
      </div>
    </div>
  );
}
