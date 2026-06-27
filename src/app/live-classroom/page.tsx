import React from 'react';
import { Mic, MicOff, Video, VideoOff, MonitorUp, Hand, PhoneOff, Users, MessageSquare, HelpCircle, Send, MoreVertical, Settings } from 'lucide-react';

export default function LiveClassroomMockup() {
  return (
    <div className="h-screen w-full bg-gray-950 text-gray-100 flex flex-col font-sans overflow-hidden">
      {/* Top Header */}
      <header className="h-16 px-6 border-b border-gray-800 flex items-center justify-between bg-gray-950/80 backdrop-blur-md z-10">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold tracking-tight">Cấu trúc Dữ liệu và Giải thuật - Buổi 1</h1>
            <p className="text-sm text-gray-400">Giảng viên: Nguyễn Văn A</p>
          </div>
          <div className="ml-4 px-2 py-1 rounded-md bg-red-500/10 text-red-500 border border-red-500/20 flex items-center gap-2 text-xs font-medium uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Live
          </div>
          <div className="ml-2 px-2 py-1 rounded-md bg-gray-800 flex items-center gap-1.5 text-xs text-gray-300">
            <Users size={14} />
            2,451
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors">
            <Settings size={20} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden">
        {/* Left Side: Video & Controls */}
        <div className="flex-1 flex flex-col p-4 gap-4">
          
          {/* Main Video Stream Container */}
          <div className="flex-1 bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden relative shadow-2xl group flex items-center justify-center">
            {/* Mockup Placeholder for Video Stream */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center text-gray-500">
              <Video size={64} className="mb-4 opacity-50" />
              <p className="text-xl font-medium text-gray-400">Luồng Video Stream Chính (Giảng viên / Share Screen)</p>
              <p className="text-sm mt-2 text-gray-500">Chỗ này sau sẽ nhúng Iframe hoặc WebRTC Video Element</p>
            </div>
            
            {/* Instructor Name Tag Overlay */}
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">A</div>
              <span className="text-sm font-medium">Nguyễn Văn A (Host)</span>
            </div>
          </div>

          {/* Bottom Control Bar */}
          <div className="h-20 bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-800 flex items-center justify-center gap-3 px-6 shrink-0">
            <button className="h-12 w-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-all border border-gray-700">
              <Mic size={20} />
            </button>
            <button className="h-12 w-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-all border border-gray-700">
              <Video size={20} />
            </button>
            
            <div className="w-px h-8 bg-gray-800 mx-2"></div>
            
            <button className="h-12 w-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-all border border-gray-700" title="Chia sẻ màn hình">
              <MonitorUp size={20} />
            </button>
            <button className="h-12 px-6 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-all border border-gray-700 gap-2 font-medium">
              <Hand size={20} />
              Giơ tay
            </button>

            <div className="w-px h-8 bg-gray-800 mx-2"></div>
            
            <button className="h-12 px-8 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center text-white transition-all font-semibold gap-2 shadow-lg shadow-red-600/20">
              <PhoneOff size={20} />
              Rời lớp
            </button>
          </div>
        </div>

        {/* Right Sidebar: Chat & Q&A */}
        <div className="w-96 bg-gray-900 border-l border-gray-800 flex flex-col shadow-xl shrink-0">
          {/* Tabs */}
          <div className="flex border-b border-gray-800">
            <button className="flex-1 py-4 flex items-center justify-center gap-2 border-b-2 border-blue-500 text-blue-400 font-medium bg-gray-800/30">
              <MessageSquare size={18} />
              Trò chuyện
            </button>
            <button className="flex-1 py-4 flex items-center justify-center gap-2 border-b-2 border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800/30 font-medium transition-colors">
              <HelpCircle size={18} />
              Hỏi đáp
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
            {/* System Message */}
            <div className="text-center text-xs text-gray-500 my-2">
              Chào mừng bạn đến với buổi học. Vui lòng giữ lịch sự trong khung chat.
            </div>

            {/* Chat Item 1 */}
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-sm text-blue-400">Trần B</span>
                <span className="text-xs text-gray-500">19:02</span>
              </div>
              <p className="text-sm text-gray-300 bg-gray-800/50 p-2 rounded-lg rounded-tl-none inline-block self-start">
                Chào thầy và các bạn ạ!
              </p>
            </div>

            {/* Chat Item 2 */}
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-sm text-green-400">Lê C</span>
                <span className="text-xs text-gray-500">19:05</span>
              </div>
              <p className="text-sm text-gray-300 bg-gray-800/50 p-2 rounded-lg rounded-tl-none inline-block self-start">
                Thầy ơi cho em hỏi phần Big O notation ở slide trước với ạ.
              </p>
            </div>
            
             {/* Chat Item 3 (Instructor) */}
             <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-2">
                <span className="px-1.5 py-0.5 bg-blue-600 rounded text-[10px] font-bold text-white uppercase tracking-wider">Giảng viên</span>
                <span className="font-semibold text-sm text-white">Nguyễn Văn A</span>
                <span className="text-xs text-gray-500">19:06</span>
              </div>
              <p className="text-sm text-gray-100 bg-blue-900/30 border border-blue-800/50 p-2 rounded-lg rounded-tl-none inline-block self-start">
                Chào các bạn. Bạn Lê C đợi mình giảng xong phần này rồi quay lại giải đáp nhé.
              </p>
            </div>
            
            {/* Chat Item 4 (Current User) */}
            <div className="flex flex-col gap-1 items-end">
              <div className="flex items-baseline gap-2 flex-row-reverse">
                <span className="font-semibold text-sm text-gray-300">Bạn</span>
                <span className="text-xs text-gray-500">19:08</span>
              </div>
              <p className="text-sm text-white bg-blue-600 p-2 rounded-lg rounded-tr-none inline-block">
                Dạ vâng ạ.
              </p>
            </div>
          </div>

          {/* Chat Input Area */}
          <div className="p-4 border-t border-gray-800 bg-gray-900">
            <div className="relative flex items-center">
              <input 
                type="text" 
                placeholder="Nhập tin nhắn..." 
                className="w-full bg-gray-950 border border-gray-800 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button className="absolute right-2 p-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white transition-colors">
                <Send size={16} className="-ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
