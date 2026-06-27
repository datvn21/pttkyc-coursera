import React from 'react';
import { X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (username: string) => void;
  username: string;
  setUsername: (username: string) => void;
}

export default function LoginModal({ isOpen, onClose, onLogin, username, setUsername }: LoginModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-[#0056D2]">Log In</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-800 transition p-1 rounded-full hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="username">
              Email or Username
            </label>
            <input
              id="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0056D2] focus:border-transparent transition"
              placeholder="name@example.com"
              autoFocus
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0056D2] focus:border-transparent transition"
              placeholder="••••••••"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#0056D2] text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
          >
            Login
          </button>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            Don't have an account? <a href="#" className="text-[#0056D2] font-medium hover:underline">Sign up for free</a>
          </div>
        </form>
      </div>
    </div>
  );
}
