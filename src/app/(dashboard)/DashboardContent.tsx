"use client";

import React from 'react';
import { Users, Truck, Box, CheckCircle, AlertTriangle, DollarSign, AlertCircle, Bell } from 'lucide-react';
import StatCard from "@/components/dashboard/StatCard";

export default function DashboardContent() {
  return (
    <div className="p-8 bg-[#F9F9F9] min-h-screen space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Operations Overview</h1>
      </div>

      {/* Top Stat Cards - 4 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Users" 
          value="12,847" 
          trend="+ 2.5k" 
          trendColor="text-green-500"
          icon={Users}
          iconColor="text-blue-500"
          iconBg="bg-blue-50"
        />
        <StatCard 
          title="Active Trips" 
          value="342" 
          trend="+ 45" 
          trendColor="text-green-500"
          icon={Truck}
          iconColor="text-green-500"
          iconBg="bg-green-50"
        />
        <StatCard 
          title="Active Shipments" 
          value="1,284" 
          trend="+ 89" 
          trendColor="text-green-500"
          icon={Box}
          iconColor="text-purple-500"
          iconBg="bg-purple-50"
        />
        <StatCard 
          title="Pending Verifications" 
          value="87" 
          trend="+ 12" 
          trendColor="text-orange-500"
          icon={CheckCircle}
          iconColor="text-yellow-500"
          iconBg="bg-yellow-50"
        />
      </div>

      {/* Second Row Stat Cards - 4 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Open Disputes" 
          value="23" 
          trend="- 5" 
          trendColor="text-green-500"
          icon={AlertTriangle}
          iconColor="text-red-500"
          iconBg="bg-red-50"
        />
        <StatCard 
          title="Pending Payouts" 
          value="$48,290" 
          trend="+ 8.5k" 
          trendColor="text-green-500"
          icon={DollarSign}
          iconColor="text-green-600"
          iconBg="bg-green-50"
        />
        <StatCard 
          title="Failed Payments" 
          value="12" 
          trend="- 3" 
          trendColor="text-green-500"
          icon={AlertCircle}
          iconColor="text-red-500"
          iconBg="bg-red-50"
        />
        <StatCard 
          title="System Alerts" 
          value="5" 
          trend="+ 2" 
          trendColor="text-red-500"
          icon={Bell}
          iconColor="text-red-500"
          iconBg="bg-red-50"
        />
      </div>

      {/* Operation Health & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Operation Health */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Operation Health</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Support Queue Size</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold">34 tickets</span>
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">KYC Backlog</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold">87 pending</span>
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Withdrawal Backlog</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold">12 pending</span>
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Delivery Exceptions</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold">8 cases</span>
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <span className="font-medium text-gray-700">Review KYC</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-purple-600" />
              </div>
              <span className="font-medium text-gray-700">Review Withdrawals</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Truck className="w-4 h-4 text-green-600" />
              </div>
              <span className="font-medium text-gray-700">Open Support Tickets</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
              <span className="font-medium text-gray-700">Monitor Risk Alerts</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
