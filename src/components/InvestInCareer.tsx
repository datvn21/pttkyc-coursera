import React from 'react';
import { Target, FileBadge, Star } from 'lucide-react';

export default function InvestInCareer() {
  return (
    <div className="bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Invest in your career</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Target className="w-8 h-8 text-gray-800 mb-4" />
            <h3 className="font-bold text-lg mb-2">Explore new skills</h3>
            <p className="text-gray-600">Access 10,000+ courses in AI, business, technology, and more.</p>
          </div>
          <div>
            <FileBadge className="w-8 h-8 text-gray-800 mb-4" strokeWidth={1.5} />
            <h3 className="font-bold text-lg mb-2">Earn valuable credentials</h3>
            <p className="text-gray-600">Get certificates for every course you finish and boost your chances of getting hired after your trial ends at no additional cost.</p>
          </div>
          <div>
            <Star className="w-8 h-8 text-gray-800 mb-4" />
            <h3 className="font-bold text-lg mb-2">Learn from the best</h3>
            <p className="text-gray-600">Take your skills to the next level with expert-led courses and AI-enabled personalization and guidance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
