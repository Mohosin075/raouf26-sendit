"use client";

import React from 'react';
import { Users, Activity, Calendar, MessageCircle } from 'lucide-react';
import StatCard from "@/components/dashboard/StatCard";
import Image from 'next/image';

const totalUsersData = [
  { name: 'Jan', value: 135 },
  { name: 'Feb', value: 115 },
  { name: 'Mar', value: 145 },
  { name: 'Apr', value: 125 },
  { name: 'May', value: 135 },
  { name: 'Jun', value: 115 },
  { name: 'Jul', value: 135 },
  { name: 'Aug', value: 125 },
  { name: 'Sep', value: 145 },
  { name: 'Oct', value: 135 },
  { name: 'Nov', value: 155 },
  { name: 'Dec', value: 135 },
];

export default function DashboardContent() {
  return (
    <div className="p-8 bg-[#F9F9F9] min-h-screen space-y-8">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-400 text-sm">Super Admin</p>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
            <Image src="/user.png" alt="User" width={40} height={40} className="object-cover" />
          </div>
        </div>
      </div>

      {/* Stat Cards - Generic */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Users" 
          value="9,170" 
          trend="+ 2.5k" 
          trendColor="text-green-500"
          icon={Users}
          iconColor="text-green-500"
          iconBg="bg-green-50"
          showStar={true}
        />
        <StatCard 
          title="Active Events" 
          value="2,340" 
          trend="+ 150" 
          trendColor="text-blue-500"
          icon={Activity}
          iconColor="text-blue-500"
          iconBg="bg-blue-50"
        />
        <StatCard 
          title="Support Tickets" 
          value="156" 
          trend="- 12" 
          trendColor="text-orange-500"
          icon={MessageCircle}
          iconColor="text-orange-500"
          iconBg="bg-orange-50"
        />
      </div>

      {/* Charts Section - Generic */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-50">
          <h3 className="text-xl font-bold text-gray-900 mb-8">User Growth</h3>
          <div className="h-[300px] bg-gray-50 rounded-2xl animate-pulse"></div>
        </div>
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-50">
          <h3 className="text-xl font-bold text-gray-900 mb-8">User Distribution</h3>
          <div className="h-[300px] bg-gray-50 rounded-2xl animate-pulse"></div>
        </div>
      </div>

      {/* Recent Activity Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-50">
          <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            Recent Events <Calendar className="w-5 h-5" />
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
              <div>
                <p className="font-medium">Event Name</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Live</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
              <div>
                <p className="font-medium">Workshop Session</p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Upcoming</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-50">
          <h3 className="text-xl font-bold text-gray-900 mb-8">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-sm">New user registered</p>
                <p className="text-xs text-gray-500">2 mins ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-sm">Event started</p>
                <p className="text-xs text-gray-500">5 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
