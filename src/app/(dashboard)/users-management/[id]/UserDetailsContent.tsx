"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { 
    CheckCircle, 
    XCircle, 
    RefreshCcw, 
    Flag, 
    ShieldCheck, 
    FileText, 
    Clock, 
    ArrowUpRight,
    Lock
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function UserDetailsContent({ id }: { id: string }) {
    const [note, setNote] = useState("");

    return (
        <div className="p-8 space-y-8 bg-[#F9F9F9] min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Sarah Johnson</h1>
                    <p className="text-gray-500 text-sm mt-1">User ID: USR001</p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-[#00B67A] hover:bg-[#00A36D] text-white rounded-lg px-6">
                        Approve KYC
                    </Button>
                    <Button variant="destructive" className="bg-[#FF3B30] hover:bg-[#E6352B] text-white rounded-lg px-6">
                        Suspend User
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Left Column */}
                <div className="col-span-12 lg:col-span-4 space-y-6">
                    {/* Basic Information */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-gray-900">Basic Information</h2>
                            <button className="text-gray-400 hover:text-gray-600">
                                <FileText className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Full Legal Name</p>
                                <p className="text-sm font-medium text-gray-900">Sarah Elizabeth Johnson</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email Address</p>
                                <p className="text-sm font-medium text-gray-900">s.johnson@example.com</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Phone Number</p>
                                <p className="text-sm font-medium text-gray-900">+254 712 345 678</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Role</p>
                                    <p className="text-sm font-medium text-gray-900">Premium Shipper</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Language</p>
                                    <p className="text-sm font-medium text-gray-900">English (UK)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Column */}
                <div className="col-span-12 lg:col-span-5 space-y-6">
                    {/* Wallet Summary */}
                    <div className="bg-[#0052FF] p-8 rounded-3xl shadow-lg text-white space-y-8">
                        <div>
                            <p className="text-xs font-medium opacity-80 mb-2">AVAILABLE BALANCE</p>
                            <h3 className="text-5xl font-bold">$12,450.00</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/10 p-4 rounded-xl">
                                <p className="text-[10px] font-bold opacity-70 uppercase tracking-wider mb-1">Pending Funds</p>
                                <p className="text-lg font-bold">$1,200.50</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl">
                                <p className="text-[10px] font-bold opacity-70 uppercase tracking-wider mb-1">Total Earned</p>
                                <p className="text-lg font-bold">$45,000.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-span-12 lg:col-span-3 space-y-6">
                    {/* Account Status */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
                        <h2 className="text-lg font-bold text-gray-900 mb-6">Account Status</h2>
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Verification</span>
                                <Badge className="bg-[#00FF85]/20 text-[#00B67A] border-none px-3 py-0.5 text-[10px] font-bold rounded-full">Level 3</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Risk Level</span>
                                <Badge className="bg-gray-100 text-gray-500 border-none px-3 py-0.5 text-[10px] font-bold rounded-full">Low Risk</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Auto-Payout</span>
                                <Switch checked />
                            </div>
                            <div className="pt-4 border-t border-gray-50 flex items-center gap-2 text-[#00B67A] font-bold text-xs">
                                <CheckCircle className="w-4 h-4" />
                                ACTIVE STATUS
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Row */}
                <div className="col-span-12 lg:col-span-8 space-y-6">
                    {/* Uploaded Documents */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-gray-900">Uploaded Documents</h2>
                            <div className="flex gap-2">
                                <Badge className="bg-[#0052FF]/10 text-[#0052FF] border-none px-3 py-0.5 text-[10px] font-bold rounded-full">3 TOTAL</Badge>
                                <Badge className="bg-[#FF3B30]/10 text-[#FF3B30] border-none px-3 py-0.5 text-[10px] font-bold rounded-full">1 PENDING REVIEW</Badge>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {/* Passport */}
                            <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 space-y-3 relative">
                                <div className="h-32 bg-gray-200 rounded-lg overflow-hidden relative">
                                    <div className="absolute inset-0 bg-[#C05621]/20"></div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Passport</p>
                                    <p className="text-[10px] text-gray-400">Expires: 2028-10</p>
                                </div>
                                <CheckCircle className="w-4 h-4 text-[#00B67A] absolute bottom-4 right-4" />
                            </div>
                            {/* CIN */}
                            <div className="p-4 rounded-xl border border-[#0052FF] bg-[#0052FF]/5 space-y-3 relative">
                                <div className="h-32 bg-gray-200 rounded-lg overflow-hidden relative">
                                    <div className="absolute inset-0 bg-[#2D3748]/80 flex flex-col items-center justify-center text-white p-2">
                                        <Badge className="bg-[#0052FF] text-white border-none px-2 py-0.5 text-[8px] font-bold mb-1">REVIEW REQUIRED</Badge>
                                        <p className="text-[8px] font-bold">CIN (ID Card)</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">CIN (ID Card)</p>
                                    <p className="text-[10px] text-gray-400">Front & Back</p>
                                </div>
                                <Clock className="w-4 h-4 text-[#0052FF] absolute bottom-4 right-4" />
                            </div>
                            {/* Driving License */}
                            <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 space-y-3 relative">
                                <div className="h-32 bg-gray-200 rounded-lg overflow-hidden relative">
                                    <div className="absolute inset-0 bg-[#2C7A7B]/20"></div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Driving License</p>
                                    <p className="text-[10px] text-gray-400">Class B/C</p>
                                </div>
                                <CheckCircle className="w-4 h-4 text-[#00B67A] absolute bottom-4 right-4" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-4 space-y-6">
                    {/* Agreements */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900 mb-6">Agreements</h2>
                        <div className="space-y-3">
                            {['Terms of Service', 'Privacy Policy', 'KYC Consent'].map((agreement) => (
                                <div key={agreement} className="flex justify-between items-center p-3 rounded-xl bg-gray-50/50 border border-gray-50">
                                    <div className="flex items-center gap-3">
                                        <FileText className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm font-medium text-gray-700">{agreement}</span>
                                    </div>
                                    <Badge className="bg-[#00B67A]/10 text-[#00B67A] border-none px-2 py-0.5 text-[8px] font-bold rounded-md">SIGNED</Badge>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Third Row */}
                <div className="col-span-12 lg:col-span-7 space-y-6">
                    {/* Recent Activity */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
                            <button className="text-[#0052FF] text-[10px] font-bold uppercase tracking-widest hover:underline">VIEW ALL</button>
                        </div>
                        <div className="space-y-6">
                            {[
                                { 
                                    title: "Withdrawal Approved", 
                                    desc: "Administrator approved a payout of $450.00 to Bank Account ...4567", 
                                    time: "2 HOURS AGO",
                                    icon: <CheckCircle className="w-5 h-5 text-[#00B67A]" />,
                                    iconBg: "bg-[#00B67A]/10"
                                },
                                { 
                                    title: "New Document Uploaded", 
                                    desc: "User uploaded a new CIN (ID Card) for verification", 
                                    time: "5 HOURS AGO",
                                    icon: <RefreshCcw className="w-5 h-5 text-[#0052FF]" />,
                                    iconBg: "bg-[#0052FF]/10"
                                },
                                { 
                                    title: "User Login", 
                                    desc: "Successful login from IP: 192.168.1.104 (Nairobi, KE)", 
                                    time: "YESTERDAY",
                                    icon: <Clock className="w-5 h-5 text-gray-400" />,
                                    iconBg: "bg-gray-100"
                                }
                            ].map((activity, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className={`w-10 h-10 rounded-full ${activity.iconBg} flex items-center justify-center shrink-0`}>
                                        {activity.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">{activity.title}</p>
                                        <p className="text-xs text-gray-500 mt-1">{activity.desc}</p>
                                        <p className="text-[10px] font-bold text-gray-400 mt-2">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-5 space-y-6">
                    {/* Actions */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900 mb-6">Actions</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="p-4 rounded-xl border border-gray-100 hover:bg-gray-50 flex flex-col items-center justify-center gap-2 transition-colors">
                                <RefreshCcw className="w-5 h-5 text-[#0052FF]" />
                                <span className="text-[8px] font-bold text-gray-900 uppercase tracking-widest text-center">Request Re-upload</span>
                            </button>
                            <button className="p-4 rounded-xl border border-gray-100 hover:bg-gray-50 flex flex-col items-center justify-center gap-2 transition-colors">
                                <XCircle className="w-5 h-5 text-[#FF3B30]" />
                                <span className="text-[8px] font-bold text-gray-900 uppercase tracking-widest text-center">Reject KYC</span>
                            </button>
                            <button className="p-4 rounded-xl border border-gray-100 hover:bg-gray-50 flex flex-col items-center justify-center gap-2 transition-colors">
                                <Flag className="w-5 h-5 text-[#FF3B30]" />
                                <span className="text-[8px] font-bold text-gray-900 uppercase tracking-widest text-center">Flag User</span>
                            </button>
                            <button className="p-4 rounded-xl border border-gray-100 hover:bg-gray-50 flex flex-col items-center justify-center gap-2 transition-colors">
                                <ShieldCheck className="w-5 h-5 text-[#00B67A]" />
                                <span className="text-[8px] font-bold text-gray-900 uppercase tracking-widest text-center">Reactivate User</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Internal Notes */}
                <div className="col-span-12">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900 mb-6">Internal Notes</h2>
                        <div className="space-y-4">
                            <Textarea 
                                placeholder="Add a private note about this user for the compliance team..." 
                                className="min-h-[120px] bg-gray-100/50 border-none rounded-xl focus-visible:ring-1 focus-visible:ring-[#0052FF] p-4 text-sm"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            />
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                                    <Lock className="w-3 h-3" />
                                    Visibility: Compliance Team Only
                                </div>
                                <Button className="bg-[#0052FF] hover:bg-[#0041CC] text-white rounded-lg px-8 font-bold">
                                    Save Note
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
