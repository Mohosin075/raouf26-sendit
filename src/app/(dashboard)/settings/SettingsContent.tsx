"use client";

import React from 'react';
import { Camera } from 'lucide-react';
import Image from 'next/image';

export default function SettingsPage() {
  return (
    <div className="p-8 bg-[#F9F9F9] min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-400 text-sm font-medium tracking-tight">Super Admin</p>
            <h1 className="text-2xl font-bold text-gray-900">Setting</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
              <Image src="/user.png" alt="User" width={40} height={40} className="object-cover" />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Form */}
          <div className="flex-1 space-y-10 w-full">
            <h2 className="text-2xl font-bold text-gray-900">Your Account Settings</h2>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Full name</label>
                <input 
                  type="text" 
                  defaultValue="Ibrahim M"
                  className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-6 outline-none text-gray-700 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Phone Number</label>
                <div className="flex gap-4">
                  <div className="relative w-32">
                    <select className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 outline-none text-gray-700 appearance-none shadow-sm">
                      <option>+880</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                  <input 
                    type="text" 
                    defaultValue="+88 017489376702"
                    className="flex-1 bg-white border border-gray-200 rounded-xl py-3.5 px-6 outline-none text-gray-700 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Email</label>
                <input 
                  type="email" 
                  defaultValue="users@gmail.com"
                  className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-6 outline-none text-gray-700 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                />
              </div>

              <button type="submit" className="bg-blue-600 text-white px-10 py-3 rounded-lg font-bold text-sm hover:bg-blue-700 transition-all shadow-md">
                Update Info
              </button>
            </form>
          </div>

          {/* Right Side - Profile Image Upload */}
          <div className="w-full lg:w-80 flex flex-col items-center">
            <div className="bg-white rounded-2xl p-10 flex flex-col items-center space-y-6 shadow-sm border border-gray-100 w-full">
              <div className="relative w-48 h-48 rounded-lg overflow-hidden border-4 border-white shadow-xl">
                <Image src="/user.png" alt="Profile" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera className="w-8 h-8 text-white mb-2" />
                  <span className="text-white text-xs font-bold uppercase tracking-wider">Upload Photo</span>
                </div>
                {/* Image's overlay text shown in image */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-3 flex items-center justify-center gap-2">
                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                   <span className="text-white text-[10px] font-bold uppercase tracking-tighter">Upload Photo</span>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 text-center leading-relaxed max-w-[180px]">
                Image size should be under 1MB and image ration needs to be 1:1
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}