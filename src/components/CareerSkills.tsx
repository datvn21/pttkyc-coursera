import React from 'react';

export default function CareerSkills() {
  return (
    <div className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/4">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Career skills that work</h2>
          <button className="border border-[#0056D2] text-[#0056D2] font-medium px-6 py-2.5 rounded-md hover:bg-blue-50 transition bg-white shadow-sm">
            Search Coursera Plus
          </button>
        </div>
        
        <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition cursor-pointer">
            <div className="h-32 bg-[#0056D2] relative">
               <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" alt="AI in Healthcare" className="w-full h-full object-cover opacity-70" />
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <div className="flex items-center gap-2 mb-2 text-xs text-gray-600">
                <div className="w-4 h-4 bg-red-800 text-white flex items-center justify-center font-bold text-[8px] rounded-sm">S</div>
                Stanford University
              </div>
              <h3 className="font-bold text-lg mb-1 leading-snug">AI in Healthcare</h3>
              <p className="text-sm text-gray-600 mt-auto">Beginner · Specialization</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition cursor-pointer">
            <div className="h-32 bg-gray-900 relative">
               <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?q=80&w=1974&auto=format&fit=crop" alt="Python" className="w-full h-full object-cover opacity-70" />
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <div className="flex items-center gap-2 mb-2 text-xs text-gray-600">
                <div className="w-4 h-4 bg-yellow-400 text-blue-900 flex items-center justify-center font-bold text-[8px] rounded-sm">M</div>
                University of Michigan
              </div>
              <h3 className="font-bold text-lg mb-1 leading-snug">Python for Everybody</h3>
              <p className="text-sm text-gray-600 mt-auto">Beginner · Specialization</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition cursor-pointer">
            <div className="h-32 bg-pink-600 relative">
              <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop" alt="Prompt Engineering" className="w-full h-full object-cover opacity-70" />
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <div className="flex items-center gap-2 mb-2 text-xs text-gray-600">
                <div className="w-4 h-4 bg-black text-yellow-500 flex items-center justify-center font-bold text-[8px] rounded-sm">V</div>
                Vanderbilt University
              </div>
              <h3 className="font-bold text-lg mb-1 leading-snug">Prompt Engineering</h3>
              <p className="text-sm text-gray-600 mt-auto">Beginner · Specialization</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-6 flex justify-center lg:justify-end">
        <button className="border border-[#0056D2] text-[#0056D2] font-medium px-4 py-2 rounded hover:bg-blue-50 transition text-sm bg-white shadow-sm">
          Show 8 more
        </button>
      </div>
    </div>
  );
}
