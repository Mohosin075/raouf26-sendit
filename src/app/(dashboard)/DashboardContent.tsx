"use client";

import React from 'react';
import { TrendingUp, DollarSign, BarChart3 } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

export default function DashboardContent() {
  return (
    <div className="p-8 bg-[#F9F9F9] min-h-screen space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
      </div>

      {/* Top Stats - 6 cards in 3 columns grid for large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Conversion Rate */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Conversion Rate</span>
            <span className="text-green-500 text-xs font-medium">+5.2%</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">68.5%</h2>
        </div>

        {/* Booking Rate */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Booking Rate</span>
            <span className="text-green-500 text-xs font-medium">+3.1%</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">42.8%</h2>
        </div>

        {/* Dispute Rate */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Dispute Rate</span>
            <span className="text-red-500 text-xs font-medium">-0.8%</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">2.4%</h2>
        </div>

        {/* KYC Approval Rate */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">KYC Approval Rate</span>
            <span className="text-green-500 text-xs font-medium">+2.5%</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">89.2%</h2>
        </div>

        {/* Avg Payout Time */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Avg Payout Time</span>
            <span className="text-red-500 text-xs font-medium">-0.3 days</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">1.8 days</h2>
        </div>

        {/* Customer Satisfaction */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Customer Satisfaction</span>
            <span className="text-green-500 text-xs font-medium">+0.2</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">4.6/5</h2>
        </div>
      </div>

      {/* Middle Row - Top Routes and Support Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Routes by Demand */}
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-8">Top Routes by Demand</h3>
          <div className="space-y-8">
            {[
              { route: "NYC → London", bookings: 342, revenue: "45,890", progress: 90 },
              { route: "LA → Tokyo", bookings: 289, revenue: "38,720", progress: 75 },
              { route: "Miami → Paris", bookings: 234, revenue: "31,560", progress: 60 },
              { route: "Boston → Berlin", bookings: 198, revenue: "26,730", progress: 50 },
              { route: "Seattle → Sydney", bookings: 167, revenue: "22,495", progress: 40 },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-gray-900">{item.route}</span>
                  <span className="text-gray-400 font-medium">{item.bookings} bookings</span>
                </div>
                <Progress value={item.progress} className="h-1.5 bg-gray-100 [&>div]:bg-blue-600" />
                <span className="text-xs text-gray-400 font-medium tracking-tight">Revenue: ${item.revenue}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Support Performance */}
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-8">Support Performance</h3>
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-medium">Average Response Time</span>
                <span className="font-bold text-gray-900">2.5 hrs</span>
              </div>
              <Progress value={85} className="h-1.5 bg-gray-100 [&>div]:bg-green-500" />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-medium">First Contact Resolution</span>
                <span className="font-bold text-gray-900">78%</span>
              </div>
              <Progress value={78} className="h-1.5 bg-gray-100 [&>div]:bg-blue-600" />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-medium">Tickets Resolved</span>
                <span className="font-bold text-gray-900">1,245 / 1,342</span>
              </div>
              <Progress value={92} className="h-1.5 bg-gray-100 [&>div]:bg-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Dispute Trends and Financial Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Dispute Trends */}
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-8">Dispute Trends</h3>
          <div className="space-y-6">
            {[
              { label: "Damaged Item", count: 12, progress: 40, color: "bg-orange-500" },
              { label: "Non-Delivery", count: 8, progress: 30, color: "bg-orange-500" },
              { label: "Wrong Weight", count: 6, progress: 20, color: "bg-orange-500" },
              { label: "Payment Issue", count: 4, progress: 15, color: "bg-orange-500" },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-gray-900">{item.label}</span>
                  <span className="text-gray-400 font-medium">{item.count} cases</span>
                </div>
                <Progress value={item.progress} className={`h-1.5 bg-gray-100 [&>div]:${item.color}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Financial Overview */}
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-8">Financial Overview</h3>
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-gray-400 text-xs font-medium">Total Revenue</span>
                <h2 className="text-2xl font-bold text-gray-900">$248,560</h2>
              </div>
              <div className="p-3 bg-green-50 rounded-xl">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-gray-400 text-xs font-medium">Commission Earned</span>
                <h2 className="text-2xl font-bold text-gray-900">$37,284</h2>
              </div>
              <div className="p-3 bg-blue-50 rounded-xl">
                <DollarSign className="w-6 h-6 text-blue-500" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-gray-400 text-xs font-medium">Total Payouts</span>
                <h2 className="text-2xl font-bold text-gray-900">$211,276</h2>
              </div>
              <div className="p-3 bg-purple-50 rounded-xl">
                <BarChart3 className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Export Reports */}
      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Export Reports</h3>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-700 transition-all shadow-sm">
            Export as CSV
          </button>
          <button className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-green-700 transition-all shadow-sm">
            Export as PDF
          </button>
          <button className="bg-white border border-gray-200 text-gray-600 px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-50 transition-all shadow-sm">
            Schedule Report
          </button>
        </div>
      </div>
    </div>
  );
}
