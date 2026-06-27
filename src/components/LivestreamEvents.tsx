import React from 'react';
import { Calendar, Clock, Video, Users, ChevronRight, Bell } from 'lucide-react';

export default function LivestreamEvents() {
  return (
    <div className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-red-600 font-bold uppercase tracking-wider text-sm">
               <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
               Live Events
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Interactive Live Sessions
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Join live instructor-led sessions, Q&As, and workshops. Learn directly from experts in real-time.
            </p>
          </div>
          <button className="text-blue-600 text-sm font-semibold hover:underline flex items-center shrink-0">
            View all schedule <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: LIVE NOW */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col">
            <div className="h-44 bg-gray-900 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop" 
                alt="Data Science Q&A" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute top-3 left-3 z-20 flex gap-2">
                <span className="px-2.5 py-1 bg-red-600 text-white text-[11px] font-bold uppercase tracking-wider rounded flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  Live Now
                </span>
              </div>
              <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1 text-xs text-white bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm font-medium">
                <Users size={14} /> 1,204 watching
              </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <div className="text-xs font-bold text-[#0056D2] uppercase tracking-wider mb-2">Data Science</div>
              <h3 className="font-bold text-xl text-gray-900 leading-tight mb-3 line-clamp-2">
                Machine Learning Week 3: Assignment Review & Q&A
              </h3>
              
              <div className="flex items-center gap-3 mt-auto mb-5">
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-[#0056D2] font-bold text-sm shrink-0 border border-blue-200">
                  TA
                </div>
                <div className="text-sm">
                  <p className="text-gray-900 font-semibold leading-none mb-1">Tran Anh</p>
                  <p className="text-gray-500 text-xs">Senior Instructor, Coursera</p>
                </div>
              </div>
              
              <a href="/live-classroom" className="w-full bg-[#0056D2] text-white hover:bg-blue-800 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                Join Classroom
              </a>
            </div>
          </div>


          {/* Card 2: UPCOMING */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col">
            <div className="h-44 bg-blue-900 relative overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop" 
                alt="UX/UI Workshop" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-overlay"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="px-2.5 py-1 bg-yellow-500 text-gray-900 text-[11px] font-bold uppercase tracking-wider rounded shadow-sm">
                  Upcoming
                </span>
              </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <div className="text-xs font-bold text-[#0056D2] uppercase tracking-wider mb-2">UX/UI Design</div>
              <h3 className="font-bold text-xl text-gray-900 leading-tight mb-3 line-clamp-2">
                Workshop: Analyzing UI of Top 10 App Store Applications
              </h3>
              
              <div className="flex items-center gap-3 mb-4">
                 <img src="https://i.pravatar.cc/100?img=47" className="w-9 h-9 rounded-full border border-gray-200" alt="Avatar" />
                <div className="text-sm">
                  <p className="text-gray-900 font-semibold leading-none mb-1">Le Quynh</p>
                  <p className="text-gray-500 text-xs">Product Designer</p>
                </div>
              </div>

              <div className="mt-auto bg-[#f5f5f5] p-3.5 rounded border border-gray-200 flex flex-col gap-2 mb-5 text-sm text-gray-700">
                <div className="flex items-center gap-2 font-semibold"><Calendar size={16} className="text-gray-500" /> Tonight, June 27, 2026</div>
                <div className="flex items-center gap-2"><Clock size={16} className="text-gray-500" /> 8:00 PM - 9:30 PM</div>
              </div>
              
              <button className="w-full bg-white text-[#0056D2] border border-[#0056D2] hover:bg-blue-50 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                <Bell size={18} /> Remind Me
              </button>
            </div>
          </div>

          {/* Card 3: TOMORROW */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col">
            <div className="h-44 bg-emerald-900 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop" 
                alt="Project Management" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-overlay"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="px-2.5 py-1 bg-gray-900/80 backdrop-blur text-white text-[11px] font-bold uppercase tracking-wider rounded shadow-sm">
                  Tomorrow
                </span>
              </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <div className="text-xs font-bold text-[#0056D2] uppercase tracking-wider mb-2">Project Management</div>
              <h3 className="font-bold text-xl text-gray-900 leading-tight mb-3 line-clamp-2">
                Case Study: Risk Mitigation when Projects Exceed Budget
              </h3>
              
              <div className="flex items-center gap-3 mb-4">
                <img src="https://i.pravatar.cc/100?img=11" className="w-9 h-9 rounded-full border border-gray-200" alt="Avatar" />
                <div className="text-sm">
                  <p className="text-gray-900 font-semibold leading-none mb-1">Hoang Long</p>
                  <p className="text-gray-500 text-xs">PMP Certified Coach</p>
                </div>
              </div>

              <div className="mt-auto bg-[#f5f5f5] p-3.5 rounded border border-gray-200 flex flex-col gap-2 mb-5 text-sm text-gray-700">
                <div className="flex items-center gap-2"><Calendar size={16} className="text-gray-500" /> Sunday, June 28, 2026</div>
                <div className="flex items-center gap-2"><Clock size={16} className="text-gray-500" /> 9:00 AM - 11:00 AM</div>
              </div>
              
              <button className="w-full bg-white text-[#0056D2] border border-[#0056D2] hover:bg-blue-50 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                 Register to Join
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
