import React from 'react';
import { Check } from 'lucide-react';

export default function Plans() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Plans for you or your team</h2>
      
      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 p-1 rounded-full flex">
          <button className="bg-[#0056D2] text-white px-8 py-2.5 rounded-full font-medium">For Individuals</button>
          <button className="text-gray-600 px-8 py-2.5 rounded-full font-medium hover:text-gray-900 transition">For Teams</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Plan 1 */}
        <div className="border border-gray-200 rounded-xl p-8 flex flex-col mt-8 relative bg-white">
          <h3 className="text-xl font-bold mb-2">Single learning program</h3>
          <p className="text-sm text-gray-600 mb-6 h-10">Learn a single topic or skill and earn a credential</p>
          
          <div className="mb-6 border-b border-gray-200 pb-8 text-center">
            <div className="text-4xl font-bold">$20<span className="text-lg font-normal text-gray-500">/month</span></div>
            <p className="text-xs text-gray-500 mt-2 font-medium">Visit an individual course or<br/>Specialization page to purchase.</p>
          </div>
          
          <ul className="space-y-4 mb-8 flex-grow text-sm">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#0056D2] shrink-0 mt-0.5" />
              <span>Access all courses within the learning program</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#0056D2] shrink-0 mt-0.5" />
              <span>Earn a certificate upon completion after your trial ends</span>
            </li>
          </ul>
        </div>
        
        {/* Plan 2 - Most Popular */}
        <div className="border-2 border-[#0056D2] rounded-xl flex flex-col relative bg-white shadow-xl">
          <div className="bg-[#0056D2] text-white text-center py-1.5 text-xs font-bold uppercase rounded-t-lg">
            Most popular
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2">Coursera Plus Monthly</h3>
            <p className="text-sm text-gray-600 mb-6 h-10">Complete multiple courses and earn credentials in the short term</p>
            
            <div className="mb-6 text-center">
              <div className="text-4xl font-bold">$24<span className="text-lg font-normal text-gray-500">/month</span></div>
            </div>
            
            <button className="w-full bg-[#0056D2] text-white font-bold py-3 rounded hover:bg-blue-700 transition mb-4">
              Start 7-day free trial
            </button>
            
            <div className="text-center text-sm font-medium border-b border-gray-200 pb-6 mb-6">
              Cancel anytime
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow text-sm">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#0056D2] shrink-0 mt-0.5" />
                <span>Access thousands of courses and Specializations from 375+ leading university and industry partners</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#0056D2] shrink-0 mt-0.5" />
                <span>Earn unlimited certificates after your trial ends</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#0056D2] shrink-0 mt-0.5" />
                <span>Learn job-relevant skills and tools with 1,000+ applied projects and hands-on labs from industry experts</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#0056D2] shrink-0 mt-0.5" />
                <span>Choose from more than 200 Professional Certificate programs from industry leaders like Google, Facebook, and more</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Plan 3 */}
        <div className="border border-gray-200 rounded-xl p-8 flex flex-col mt-8 relative bg-white">
          <h3 className="text-xl font-bold mb-2">Coursera Plus Annual</h3>
          <p className="text-sm text-gray-600 mb-6 h-10">Combine flexibility and savings with long-term learning goals</p>
          
          <div className="mb-6 text-center">
            <div className="text-4xl font-bold"><span className="line-through text-gray-400 font-normal mr-2">$160</span>$96<span className="text-lg font-normal text-gray-500">/year</span></div>
          </div>
          
          <button className="w-full border-2 border-[#0056D2] text-[#0056D2] font-bold py-3 rounded hover:bg-blue-50 transition mb-4">
            Save now
          </button>
          
          <div className="text-center text-sm font-bold border-b border-gray-200 pb-6 mb-6">
            14-day money-back guarantee
          </div>
          
          <p className="text-sm font-medium mb-4">Everything included in the monthly plan, plus:</p>
          
          <ul className="space-y-4 mb-8 flex-grow text-sm">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#0056D2] shrink-0 mt-0.5" />
              <span>Save when you pay up front for the year</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#0056D2] shrink-0 mt-0.5" />
              <span>Enjoy maximum flexibility to achieve work/life balance and learn at your own pace</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
