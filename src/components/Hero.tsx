import React from 'react';

export default function Hero() {
  return (
    <div className="bg-white overflow-hidden relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 pr-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-3xl font-bold tracking-tight text-[#0056D2]">coursera</span>
            <span className="bg-[#0056D2] text-white text-xs font-bold px-1.5 py-0.5 rounded">PLUS</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-10 leading-[1.1] text-gray-900">
            Achieve your career goals with Coursera Plus
          </h1>
          
          <button className="bg-[#0056D2] text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition hover:shadow-sm">
            Search Coursera Plus
          </button>
        </div>
        
        <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative">
           <div className="relative w-full max-w-[500px] h-[450px]">
             {/* Abstract blue background shape */}
             <div className="absolute right-0 top-0 w-full h-[90%] bg-[#0056D2] rounded-tl-full rounded-tr-xl rounded-bl-[100px] rounded-br-[150px] transform -rotate-12 opacity-90"></div>
             <div className="absolute right-4 top-4 w-full h-[90%] bg-blue-400 rounded-tl-full rounded-tr-xl rounded-bl-[100px] rounded-br-[150px] transform rotate-3 opacity-50"></div>
             <div className="absolute -left-8 bottom-12 w-full h-[80%] bg-blue-200 rounded-tl-full rounded-tr-xl rounded-bl-[100px] rounded-br-[150px] transform rotate-12 opacity-30"></div>
             {/* Image container */}
             <div className="absolute right-4 top-4 w-[85%] h-[90%] rounded-full overflow-hidden shadow-2xl z-10 rounded-br-[10px]">
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop" alt="Student" className="w-full h-full object-cover object-top" />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
