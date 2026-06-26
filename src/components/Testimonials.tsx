import React from 'react';

export default function Testimonials() {
  return (
    <div className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">What subscribers are achieving through learning</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=47" alt="Abigail P." className="w-full h-full object-cover" />
              </div>
              <div className="font-bold text-lg">Abigail P.</div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              "I have a full-time job and 3 kids. I needed the flexibility offered by Coursera Plus in order to achieve my goals. My Coursera Plus subscription motivated me to keep learning."
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=11" alt="Shi Jie F." className="w-full h-full object-cover" />
              </div>
              <div className="font-bold text-lg">Shi Jie F.</div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              "Coursera Plus keeps me motivated to learn. With each course, I'm getting more value out of my subscription. I can access almost anything with Coursera Plus!"
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=5" alt="Inés K." className="w-full h-full object-cover" />
              </div>
              <div className="font-bold text-lg">Inés K.</div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              "I really appreciate the flexibility I get with Coursera Plus. I can try any course and switch to another one for no additional cost. This motivates me to learn even more!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
