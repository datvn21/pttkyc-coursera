import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 px-6 text-sm border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div>
          <h4 className="font-bold text-gray-900 mb-4">Coursera</h4>
          <ul className="space-y-3 text-gray-600">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">What We Offer</a></li>
            <li><a href="#" className="hover:underline">Leadership</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Catalog</a></li>
            <li><a href="#" className="hover:underline">Coursera Plus</a></li>
            <li><a href="#" className="hover:underline">Professional Certificates</a></li>
            <li><a href="#" className="hover:underline">MasterTrack® Certificates</a></li>
            <li><a href="#" className="hover:underline">Degrees</a></li>
            <li><a href="#" className="hover:underline">For Enterprise</a></li>
            <li><a href="#" className="hover:underline">For Government</a></li>
            <li><a href="#" className="hover:underline">For Campus</a></li>
            <li><a href="#" className="hover:underline">Become a Partner</a></li>
            <li><a href="#" className="hover:underline">Social Impact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-4">Community</h4>
          <ul className="space-y-3 text-gray-600">
            <li><a href="#" className="hover:underline">Learners</a></li>
            <li><a href="#" className="hover:underline">Partners</a></li>
            <li><a href="#" className="hover:underline">Beta Testers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">The Coursera Podcast</a></li>
            <li><a href="#" className="hover:underline">Tech Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-4">More</h4>
          <ul className="space-y-3 text-gray-600">
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Investors</a></li>
            <li><a href="#" className="hover:underline">Terms</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
            <li><a href="#" className="hover:underline">Accessibility</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Articles</a></li>
            <li><a href="#" className="hover:underline">Directory</a></li>
            <li><a href="#" className="hover:underline">Affiliates</a></li>
            <li><a href="#" className="hover:underline">Modern Slavery Statement</a></li>
            <li><a href="#" className="hover:underline">Cookies Preference Center</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-4">Mobile App</h4>
          <div className="flex flex-col gap-4">
            <a href="#" className="bg-black text-white px-4 py-2.5 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition w-40">
              <div className="flex flex-col">
                <span className="text-[10px] leading-none">Download on the</span>
                <span className="font-bold leading-none">App Store</span>
              </div>
            </a>
            <a href="#" className="bg-black text-white px-4 py-2.5 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition w-40">
              <div className="flex flex-col">
                <span className="text-[10px] leading-none">GET IT ON</span>
                <span className="font-bold leading-none">Google Play</span>
              </div>
            </a>

            <div className="mt-8 flex flex-col items-start">
              <div className="text-xs mb-1 font-bold">Certified</div>
              <div className="w-16 h-16 border-2 border-black rounded-full flex flex-col items-center justify-center font-bold text-2xl relative">
                B
                <div className="w-full h-0.5 bg-black absolute bottom-4"></div>
              </div>
              <div className="text-xs mt-1">Corporation</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
        <div className="text-gray-600 mb-4 md:mb-0">
          © 2026 Coursera Inc. All rights reserved.
        </div>
        <div className="flex gap-4 text-2xl">
          <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold hover:bg-gray-800 transition">f</a>
          <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold hover:bg-gray-800 transition">in</a>
          <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold hover:bg-gray-800 transition">X</a>
          <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold hover:bg-gray-800 transition">Y</a>
          <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold hover:bg-gray-800 transition">I</a>
          <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold hover:bg-gray-800 transition">t</a>
        </div>
      </div>
    </footer>
  );
}
