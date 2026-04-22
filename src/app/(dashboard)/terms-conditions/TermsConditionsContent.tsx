"use client";

import React, { useState } from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Eye, 
  Send, 
  Trash2, 
  Plus, 
  Clock,
  X
} from 'lucide-react';
import Image from 'next/image';

const initialTermsSections = [
  { id: 1, title: 'Acceptance of Terms', content: 'Enter legal content here for Terms & Conditions...' },
  { id: 2, title: 'User Responsibilities', content: 'Enter legal content here for User Responsibilities...' },
  { id: 3, title: 'Code of Conduct', content: 'Enter legal content here for Code of Conduct...' },
];

const initialPrivacySections = [
  { id: 1, title: 'Data Collection', content: 'How we collect your data...' },
  { id: 2, title: 'Use of Information', content: 'How we use your information...' },
  { id: 3, title: 'Cookies Policy', content: 'Information about cookies...' },
];

export default function TermsConditionsPage() {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');
  const [isPreview, setIsPreview] = useState(false);
  const [termsSections, setTermsSections] = useState(initialTermsSections);
  const [privacySections, setPrivacySections] = useState(initialPrivacySections);

  const sections = activeTab === 'terms' ? termsSections : privacySections;
  const setSections = activeTab === 'terms' ? setTermsSections : setPrivacySections;

  const addSection = () => {
    const newId = sections.length > 0 ? Math.max(...sections.map(s => s.id)) + 1 : 1;
    setSections([...sections, { id: newId, title: 'New Section', content: 'Enter legal content here...' }]);
  };

  const removeSection = (id: number) => {
    setSections(sections.filter(s => s.id !== id));
  };

  const updateSection = (id: number, field: 'title' | 'content', value: string) => {
    setSections(sections.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      {/* Top Header/Tabs */}
      <div className="bg-white border-b border-gray-100 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 font-medium pb-1 border-b-2 transition-all ${activeTab === 'terms' ? 'text-blue-600 border-blue-600' : 'text-gray-400 border-transparent hover:text-gray-600'}`}
          >
            <FileText className="w-4 h-4" />
            <span className="text-sm">Terms & Conditions</span>
          </button>
          <button 
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 font-medium pb-1 border-b-2 transition-all ${activeTab === 'privacy' ? 'text-blue-600 border-blue-600' : 'text-gray-400 border-transparent hover:text-gray-600'}`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span className="text-sm">Privacy Policy</span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsPreview(!isPreview)}
            className={`flex items-center gap-2 px-6 py-2 rounded-xl border font-medium text-sm transition-all ${isPreview ? 'bg-blue-50 border-blue-200 text-blue-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
          >
            {isPreview ? <X className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{isPreview ? 'Close Preview' : 'Preview'}</span>
          </button>
          <button className="flex items-center gap-2 px-8 py-2 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 shadow-md transition-all">
            <Send className="w-4 h-4" />
            <span>Publish</span>
          </button>
        </div>
      </div>

      <div className="p-8 flex gap-8">
        {/* Left Sidebar - On This Page */}
        {!isPreview && (
          <div className="w-64 shrink-0">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-50 sticky top-28">
              <h3 className="text-[10px] font-bold text-gray-900 uppercase tracking-[0.2em] mb-6">On this page</h3>
              <nav className="space-y-4">
                {sections.map((section) => (
                  <a 
                    key={section.id} 
                    href={`#section-${section.id}`}
                    className="block text-xs font-medium text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className={`flex-1 mx-auto space-y-10 pb-20 ${isPreview ? 'max-w-5xl' : 'max-w-4xl'}`}>
          {/* Header Section */}
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest">
              Legal Terms
            </div>
            <h1 className="text-5xl font-bold text-gray-900 tracking-tight capitalize">
              {activeTab === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>Last updated: January 29, 2026</span>
            </div>
          </div>

          {/* Banner Image Section */}
          <div className="relative w-full h-[400px] rounded-[40px] overflow-hidden shadow-xl">
            <Image 
              src={activeTab === 'terms' 
                ? "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                : "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
              } 
              alt="Legal Banner" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-12">
              <p className="text-white text-lg font-medium max-w-xl leading-relaxed">
                {activeTab === 'terms' 
                  ? "Providing a safe, transparent, and respectful learning environment for all our community members."
                  : "We value your privacy and are committed to protecting your personal data in accordance with global standards."
                }
              </p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div 
                key={section.id} 
                id={`section-${section.id}`}
                className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-50 group relative transition-all"
              >
                {!isPreview && (
                  <div className="flex justify-between items-start mb-4">
                    <input 
                      type="text"
                      className="text-xl font-bold text-gray-800 bg-transparent outline-none w-full"
                      value={section.title}
                      onChange={(e) => updateSection(section.id, 'title', e.target.value)}
                    />
                    <button 
                      onClick={() => removeSection(section.id)}
                      className="p-2 text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                )}
                
                {isPreview ? (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-wrap">
                      {section.content}
                    </p>
                  </div>
                ) : (
                  <textarea 
                    className="w-full text-gray-400 text-sm leading-relaxed resize-none outline-none min-h-[120px] bg-transparent border-none p-0"
                    value={section.content}
                    onChange={(e) => updateSection(section.id, 'content', e.target.value)}
                    placeholder="Enter content here..."
                  />
                )}
              </div>
            ))}

            {/* Add New Section Button */}
            {!isPreview && (
              <button 
                onClick={addSection}
                className="w-full bg-white border border-dashed border-gray-200 rounded-[32px] py-6 flex items-center justify-center gap-3 text-gray-400 font-medium hover:bg-gray-50 hover:text-blue-600 transition-all group"
              >
                <div className="p-1.5 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors">
                  <Plus className="w-4 h-4" />
                </div>
                <span>Add New Section</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}