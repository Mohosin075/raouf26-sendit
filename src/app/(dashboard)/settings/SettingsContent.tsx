"use client";

import React from 'react';
import { DollarSign, Shield, FileText, HelpCircle, Save } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  return (
    <div className="p-8 bg-[#F9F9F9] min-h-screen space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Configurations */}
        <div className="lg:col-span-2 space-y-8">
          {/* Financial Configuration */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-8">
            <div className="flex items-center gap-3 text-blue-600">
              <DollarSign className="w-5 h-5" />
              <h2 className="text-lg font-bold text-gray-900">Financial Configuration</h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Commission Percentage</label>
                <div className="relative">
                  <Input 
                    type="text" 
                    defaultValue="15"
                    className="h-12 border-gray-200 focus-visible:ring-blue-600 rounded-lg pr-8"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">%</span>
                </div>
                <p className="text-xs text-gray-400 font-medium">Platform commission on each transaction</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Withdrawal Fee</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                  <Input 
                    type="text" 
                    defaultValue="2.50"
                    className="h-12 border-gray-200 focus-visible:ring-blue-600 rounded-lg pl-8"
                  />
                </div>
                <p className="text-xs text-gray-400 font-medium">Fee charged for wallet withdrawals</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Minimum Payout Threshold</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                  <Input 
                    type="text" 
                    defaultValue="50"
                    className="h-12 border-gray-200 focus-visible:ring-blue-600 rounded-lg pl-8"
                  />
                </div>
                <p className="text-xs text-gray-400 font-medium">Minimum amount required for withdrawal</p>
              </div>
            </div>
          </div>

          {/* Security & Verification */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-8">
            <div className="flex items-center gap-3 text-green-500">
              <Shield className="w-5 h-5" />
              <h2 className="text-lg font-bold text-gray-900">Security & Verification</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-gray-900">KYC Verification</h4>
                  <p className="text-xs text-gray-400 font-medium">Require identity verification for new users</p>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-gray-900">Two-Factor Authentication</h4>
                  <p className="text-xs text-gray-400 font-medium">Require 2FA for admin accounts</p>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-gray-900">Auto-Suspend Risk Accounts</h4>
                  <p className="text-xs text-gray-400 font-medium">Automatically suspend high-risk accounts</p>
                </div>
                <Switch className="data-[state=checked]:bg-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content Management & Save */}
        <div className="space-y-8">
          {/* Content Management */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-gray-900">Content Management</h2>
            
            <div className="space-y-4">
              <button className="w-full flex flex-col items-start p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-all text-left group">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-sm font-bold text-gray-900">Edit FAQ</span>
                </div>
                <p className="text-xs text-gray-400 font-medium">Manage help articles</p>
              </button>

              <button className="w-full flex flex-col items-start p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-all text-left group">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-sm font-bold text-gray-900">Edit Policies</span>
                </div>
                <p className="text-xs text-gray-400 font-medium">Terms & conditions</p>
              </button>

              <button className="w-full flex flex-col items-start p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-all text-left group">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-sm font-bold text-gray-900">Edit Help Content</span>
                </div>
                <p className="text-xs text-gray-400 font-medium">Support documentation</p>
              </button>
            </div>
          </div>

          {/* Save Changes */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-gray-900">Save Changes</h2>
              <p className="text-xs text-gray-400 font-medium leading-relaxed">
                Review your changes before saving. These settings affect the entire platform.
              </p>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-md flex items-center justify-center gap-2">
              Save All Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}