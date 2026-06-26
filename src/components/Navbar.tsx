import React from 'react';
import { Search, ChevronDown, Globe, Bell, LogOut } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white px-6 py-3 flex items-center justify-between border-b sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <div className="flex items-center">
          <span className="text-[#0056D2] text-2xl font-bold tracking-tight">coursera</span>
        </div>
        
        <div className="flex items-center gap-6 text-gray-600 font-medium text-sm">
          <button className="flex items-center gap-1 hover:text-blue-700 transition">
            Explore <ChevronDown size={14} />
          </button>
          <a href="#" className="hover:text-blue-700 transition">My Learning</a>
          <a href="#" className="hover:text-blue-700 transition">Degrees</a>
        </div>
        
        <div className="relative hidden md:block w-[400px] ml-2">
          <input 
            type="text" 
            placeholder="What do you want to learn?" 
            className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
          />
          <button className="absolute right-0 top-0 bottom-0 bg-[#0056D2] text-white rounded-r-full px-4 flex items-center justify-center hover:bg-blue-700">
            <Search size={18} />
          </button>
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-sm font-medium">
        <div className="flex items-center gap-5 text-gray-600">
          <button className="hover:text-black transition">
            <Globe size={20} strokeWidth={2} />
          </button>
          <button className="relative hover:text-black transition mr-2">
            <Bell size={20} strokeWidth={2} />
            <span className="absolute -top-1.5 -right-2 bg-[#c62828] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-white">
              6
            </span>
          </button>
          
          {/* User Avatar with D and PLUS badge */}
          <div className="relative group cursor-pointer">
            <div className="w-10 h-10 rounded-full border-2 border-[#0056D2] flex items-center justify-center bg-[#001D6C] text-white font-bold text-lg hover:ring-2 hover:ring-blue-200 transition">
              D
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#0056D2] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm border border-white shadow-sm z-10">
              PLUS
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
