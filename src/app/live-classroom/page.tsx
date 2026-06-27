import React from 'react';
import { Mic, MicOff, Video, VideoOff, MonitorUp, Hand, PhoneOff, Users, MessageSquare, HelpCircle, Send, MoreVertical, Settings, ChevronLeft } from 'lucide-react';

export default function LiveClassroomMockup() {
  return (
    <div className="h-screen w-full bg-[#f5f5f5] text-gray-900 flex flex-col font-sans overflow-hidden">
      {/* Top Header */}
      <header className="h-16 px-6 border-b border-gray-200 flex items-center justify-between bg-white z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <a href="/" className="mr-2 p-2 text-gray-500 hover:text-[#0056D2] hover:bg-blue-50 rounded-full transition-colors">
            <ChevronLeft size={20} />
          </a>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-gray-900 tracking-tight">Machine Learning Week 3: Assignment Review & Q&A</h1>
            <p className="text-sm text-gray-500 font-medium">Instructor: Tran Anh</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-500 hover:text-[#0056D2] hover:bg-blue-50 rounded-full transition-colors">
            <Settings size={20} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden">
        {/* Left Side: Video & Controls */}
        <div className="flex-1 flex flex-col p-4 gap-4">

          {/* Main Video Stream Container (Keep dark for video contrast) */}
          <div className="flex-1 bg-black rounded-2xl border border-gray-200 overflow-hidden relative shadow-md group flex items-center justify-center">
            <div className='absolute top-3 left-1 flex'>
                <div className="ml-4 px-2.5 py-1 rounded-md text-red-600 border border-red-200 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  Live
                </div>
                <div className="ml-2 px-2.5 py-1 rounded-md border border-gray-200 flex items-center gap-1.5 text-xs text-gray-100 font-medium">
                  <Users size={14} />
                  1,204
                </div>
              </div>
            {/* Mockup Placeholder for Video Stream */}
            <div className="absolute relative inset-0 bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center text-gray-500">
              
              <Video size={64} className="mb-4 opacity-50 text-gray-400" />
              <p className="text-xl font-medium text-gray-300">Main Video Stream Area</p>
              <p className="text-sm mt-2 text-gray-500">WebRTC Video Element goes here</p>
            </div>

            {/* Instructor Name Tag Overlay */}
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-2 text-white">
              <div className="w-6 h-6 rounded-full bg-[#0056D2] flex items-center justify-center text-xs font-bold">TA</div>
              <span className="text-sm font-medium">Tran Anh (Host)</span>
            </div>
          </div>

          {/* Bottom Control Bar */}
          <div className="h-20 bg-white rounded-2xl border border-gray-200 flex items-center justify-center gap-3 px-6 shrink-0 shadow-sm">
            <button className="h-12 w-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-all border border-gray-200">
              <Mic size={20} />
            </button>
            <button className="h-12 w-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-all border border-gray-200">
              <Video size={20} />
            </button>

            <div className="w-px h-8 bg-gray-200 mx-2"></div>

            <button className="h-12 w-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-all border border-gray-200" title="Share Screen">
              <MonitorUp size={20} />
            </button>
            <button className="h-12 px-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-all border border-gray-200 gap-2 font-medium">
              <Hand size={20} />
              Raise Hand
            </button>

            <div className="w-px h-8 bg-gray-200 mx-2"></div>

            <button className="h-12 px-8 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center text-white transition-all font-semibold gap-2 shadow-md">
              <PhoneOff size={20} />
              Leave
            </button>
          </div>
        </div>

        {/* Right Sidebar: Chat & Q&A */}
        <div className="w-96 bg-white border-l border-gray-200 flex flex-col shadow-sm shrink-0 z-10">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button className="flex-1 py-4 flex items-center justify-center gap-2 border-b-2 border-[#0056D2] text-[#0056D2] font-bold bg-blue-50/30">
              <MessageSquare size={18} />
              Chat
            </button>
            <button className="flex-1 py-4 flex items-center justify-center gap-2 border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors">
              <HelpCircle size={18} />
              Q&A
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {/* System Message */}
            <div className="text-center text-xs text-gray-500 my-2 font-medium bg-gray-50 py-2 rounded-lg border border-gray-100">
              Welcome to the live session. Please be respectful in the chat.
            </div>

            {/* Chat Item 1 */}
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-2">
                <span className="font-bold text-sm text-gray-900">David Smith</span>
                <span className="text-xs text-gray-400">19:02</span>
              </div>
              <p className="text-sm text-gray-800 bg-gray-100 p-2.5 rounded-lg rounded-tl-none inline-block self-start">
                Hello everyone!
              </p>
            </div>

            {/* Chat Item 2 */}
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-2">
                <span className="font-bold text-sm text-gray-900">Sarah Lee</span>
                <span className="text-xs text-gray-400">19:05</span>
              </div>
              <p className="text-sm text-gray-800 bg-gray-100 p-2.5 rounded-lg rounded-tl-none inline-block self-start">
                Professor, could you explain the gradient descent part again?
              </p>
            </div>

            {/* Chat Item 3 (Instructor) */}
            <div className="flex flex-col gap-1 mt-2">
              <div className="flex items-baseline gap-2">
                <span className="px-1.5 py-0.5 bg-[#0056D2] rounded text-[10px] font-bold text-white uppercase tracking-wider">Instructor</span>
                <span className="font-bold text-sm text-[#0056D2]">Tran Anh</span>
                <span className="text-xs text-gray-400">19:06</span>
              </div>
              <p className="text-sm text-[#0056D2] bg-blue-50 border border-blue-100 p-2.5 rounded-lg rounded-tl-none inline-block self-start font-medium">
                Sure Sarah, I'll go over that in the next slide.
              </p>
            </div>

            {/* Chat Item 4 (Current User) */}
            <div className="flex flex-col gap-1 items-end mt-2">
              <div className="flex items-baseline gap-2 flex-row-reverse">
                <span className="font-bold text-sm text-gray-900">You</span>
                <span className="text-xs text-gray-400">19:08</span>
              </div>
              <p className="text-sm text-white bg-[#0056D2] p-2.5 rounded-lg rounded-tr-none inline-block shadow-sm">
                Thanks, that would be helpful!
              </p>
            </div>
          </div>

          {/* Chat Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full bg-gray-50 border border-gray-300 rounded-full py-3 pl-4 pr-12 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] transition-all"
              />
              <button className="absolute right-2 p-2 bg-[#0056D2] hover:bg-blue-700 rounded-full text-white transition-colors">
                <Send size={16} className="-ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
