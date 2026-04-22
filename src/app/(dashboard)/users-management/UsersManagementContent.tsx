"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download, UserPlus, MoreVertical, Edit2, Shield, Activity } from "lucide-react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function UserManagement() {
    const [searchTerm, setSearchTerm] = useState("");

    const admins = [
        {
            id: "1",
            name: "Sarah Connor",
            email: "sarah.c@sendit.com",
            role: "Senior Dispatcher",
            permissions: ["FLEET EDIT", "SHIPMENTS"],
            security: "2FA Enabled",
            status: "Active",
            avatar: "/avatar.png"
        },
        {
            id: "2",
            name: "Marcus Wright",
            email: "m.wright@sendit.com",
            role: "Support Agent",
            permissions: ["VIEW ONLY"],
            security: "2FA Disabled",
            status: "Active",
            avatar: "/avatar.png"
        },
        {
            id: "3",
            name: "Kyle Reese",
            email: "kyle.r@sendit.com",
            role: "Regional Manager",
            permissions: ["ALL ACCESS"],
            security: "2FA Enabled",
            status: "Inactive",
            avatar: "/avatar.png"
        }
    ];

    return (
        <div className="p-8 space-y-8 bg-[#F9F9F9] min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Admin Management</h1>
                    <p className="text-gray-500 mt-1">Configure access levels and monitor administrative security across the platform.</p>
                </div>
                <Link href="/users-management/new">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-xl flex items-center gap-2 font-bold shadow-md transition-all">
                        <UserPlus className="w-5 h-5" />
                        Create Admin
                    </Button>
                </Link>
            </div>

            {/* Top Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 2FA Adoption Rate */}
                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-4">
                    <div className="flex justify-between items-start">
                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">2FA Adoption Rate</span>
                        <Badge className="bg-green-100 text-green-600 border-none font-bold text-[10px] px-2 py-0.5">+4.2%</Badge>
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-4xl font-bold text-gray-900">94.2%</h2>
                        <p className="text-xs text-gray-400 font-medium">32 of 34 accounts protected</p>
                    </div>
                    {/* Tiny bar chart placeholder */}
                    <div className="flex items-end gap-1.5 h-12 pt-4">
                        {[40, 60, 45, 80, 55, 90].map((h, i) => (
                            <div key={i} className="flex-1 bg-blue-100 rounded-sm" style={{ height: `${h}%` }}>
                                {i === 5 && <div className="w-full h-full bg-blue-600 rounded-sm" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Security Activity */}
                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Recent Security Activity</span>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                                <Activity className="w-5 h-5 text-green-500" />
                            </div>
                            <div className="space-y-0.5">
                                <h4 className="text-sm font-bold text-gray-900">Successful login from London, UK</h4>
                                <p className="text-xs text-gray-400 font-medium">Sarah Connor • 2 minutes ago</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                                <Shield className="w-5 h-5 text-red-500" />
                            </div>
                            <div className="space-y-0.5">
                                <h4 className="text-sm font-bold text-gray-900">Failed attempt: Incorrect password</h4>
                                <p className="text-xs text-gray-400 font-medium">Unknown IP • 1 hour ago</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Role Distribution */}
                <div className="bg-blue-600 p-8 rounded-xl shadow-lg space-y-6 text-white relative overflow-hidden">
                    <div className="relative z-10 space-y-6">
                        <span className="text-blue-100 text-[10px] font-bold uppercase tracking-widest">Role Distribution</span>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold">
                                    <span>Super Admins</span>
                                    <span>04</span>
                                </div>
                                <div className="h-1 bg-blue-400/30 rounded-full overflow-hidden">
                                    <div className="h-full bg-white w-1/4" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold">
                                    <span>Dispatchers</span>
                                    <span>18</span>
                                </div>
                                <div className="h-1 bg-blue-400/30 rounded-full overflow-hidden">
                                    <div className="h-full bg-white w-1/2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Decorative shield icon in background */}
                    <Shield className="absolute -right-4 -bottom-4 w-32 h-32 text-blue-500/20 rotate-12" />
                </div>
            </div>

            {/* Administrator Directory Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex items-center gap-4">
                        <h3 className="text-lg font-bold text-gray-900">Administrator Directory</h3>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-xs text-gray-400 font-bold uppercase tracking-tight">34 Active Admins</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" className="rounded-lg border-gray-100 text-gray-500 gap-2 font-bold text-xs h-9">
                            <Filter className="w-3.5 h-3.5" /> Filter
                        </Button>
                        <Button variant="outline" className="rounded-lg border-gray-100 text-gray-500 gap-2 font-bold text-xs h-9">
                            <Download className="w-3.5 h-3.5" /> Export CSV
                        </Button>
                    </div>
                </div>

                <table className="w-full text-left">
                    <thead className="bg-gray-50/30 border-b border-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Administrator</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Role & Permissions</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Security</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {admins.map((admin) => (
                            <tr key={admin.id} className="hover:bg-gray-50/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg overflow-hidden relative border border-gray-100">
                                            <Image src={admin.avatar} alt={admin.name} fill className="object-cover" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-gray-900">{admin.name}</span>
                                            <span className="text-xs text-gray-400 font-medium">{admin.email}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-sm font-bold text-blue-600">{admin.role}</span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {admin.permissions.map((p, i) => (
                                                <Badge key={i} className={`${p === 'ALL ACCESS' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-600'} border-none text-[8px] font-bold px-1.5 py-0`}>
                                                    {p}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <Shield className={`w-3.5 h-3.5 ${admin.security.includes('Enabled') ? 'text-green-500' : 'text-red-500'}`} />
                                        <span className={`text-xs font-bold ${admin.security.includes('Enabled') ? 'text-green-600' : 'text-red-500'}`}>
                                            {admin.security}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <Switch 
                                            checked={admin.status === 'Active'} 
                                            className="scale-75 data-[state=checked]:bg-green-500"
                                        />
                                        <span className="text-xs font-bold text-gray-900">{admin.status}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-400 hover:text-blue-600">
                                            <Edit2 className="w-4 h-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-400 hover:text-gray-900">
                                            <MoreVertical className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Table Footer / Pagination */}
                <div className="p-6 bg-gray-50/30 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-tight">Showing 1 - 10 of 34 administrators</span>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="w-8 h-8 rounded-lg border-gray-200 text-gray-400">
                            <span className="text-xs">&lt;</span>
                        </Button>
                        <Button className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold text-xs">1</Button>
                        <Button variant="ghost" className="w-8 h-8 rounded-lg text-gray-400 font-bold text-xs">2</Button>
                        <Button variant="ghost" className="w-8 h-8 rounded-lg text-gray-400 font-bold text-xs">3</Button>
                        <Button variant="outline" size="icon" className="w-8 h-8 rounded-lg border-gray-200 text-gray-400">
                            <span className="text-xs">&gt;</span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Role Configuration and Security Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Role Configuration */}
                <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-8">
                    <div className="flex justify-between items-center">
                        <div className="space-y-1">
                            <h3 className="text-lg font-bold text-gray-900">Role Configuration</h3>
                            <p className="text-xs text-gray-400 font-medium">Manage what each admin level is allowed to see and perform.</p>
                        </div>
                        <button className="text-xs font-bold text-blue-600 hover:underline">Customize Rules</button>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-6 bg-gray-50/30 rounded-2xl border border-gray-50">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                                    <Activity className="w-6 h-6 text-blue-600" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold text-gray-900">Manage Finances</h4>
                                    <p className="text-xs text-gray-400 font-medium">Access to billing, invoices, and payment gateway settings.</p>
                                </div>
                            </div>
                            <div className="flex -space-x-2">
                                {['SA', 'AM'].map((tag, i) => (
                                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold ${i === 0 ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-6 bg-gray-50/30 rounded-2xl border border-gray-50">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                                    <Edit2 className="w-6 h-6 text-green-600" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold text-gray-900">Edit Shipments</h4>
                                    <p className="text-xs text-gray-400 font-medium">Modify ongoing routes, assign drivers, and update status logs.</p>
                                </div>
                            </div>
                            <div className="flex -space-x-2">
                                {['SA', 'DS', '+4'].map((tag, i) => (
                                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold ${i === 0 ? 'bg-blue-100 text-blue-600' : i === 1 ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-600'}`}>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Security Overview and Compliance */}
                <div className="space-y-6">
                    {/* Security Overview */}
                    <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Security Overview</span>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                                <Shield className="w-6 h-6 text-green-500" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-sm font-bold text-gray-900">Health: Excellent</h4>
                                <p className="text-xs text-gray-400 font-medium">All critical accounts secured.</p>
                            </div>
                        </div>
                        <div className="space-y-4 pt-2">
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-bold text-gray-700">Hardware Key Support</span>
                                <Badge className="bg-green-100 text-green-600 border-none font-bold text-[8px] px-2 py-0.5">ENFORCED</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-bold text-gray-700">IP Whitelisting</span>
                                <Badge className="bg-red-50 text-red-500 border-none font-bold text-[8px] px-2 py-0.5">DISABLED</Badge>
                            </div>
                        </div>
                    </div>

                    {/* Compliance Report */}
                    <div className="bg-gray-100 p-8 rounded-xl border border-gray-200 shadow-sm text-center space-y-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-xl mx-auto flex items-center justify-center">
                            <Activity className="w-6 h-6 text-gray-500" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-sm font-bold text-gray-900">Need a full compliance report?</h4>
                        </div>
                        <Button className="w-full bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 font-bold text-xs py-6 rounded-xl shadow-sm">
                            Generate Audit PDF
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
