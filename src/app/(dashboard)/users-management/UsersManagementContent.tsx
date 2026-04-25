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

import { MOCK_USERS } from "@/data/demoUsers";

export default function UserManagement() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="p-8 space-y-8 bg-[#F8FAFC] min-h-screen">
            {/* Header */}
            <div>
                <h1 className="text-xl font-bold text-gray-900">Users Management</h1>
            </div>

            {/* Search and Filter */}
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Search by name, email, phone, user ID, parcel ID" 
                            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-gray-300"
                        />
                    </div>
                    <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:bg-gray-50">
                        <Filter className="w-5 h-5" />
                    </button>
                    <div className="w-20 border border-gray-200 rounded-lg"></div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-[#F8FAFC] border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">User Name</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Verification</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Wallet Balance</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {MOCK_USERS.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-gray-900">{user.name}</span>
                                        <span className="text-xs text-gray-400 font-medium">{user.userId}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500 font-medium">{user.email}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500 font-medium">{user.role}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <Badge className={`
                                        ${user.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-400'} 
                                        border-none text-[10px] font-bold px-3 py-0.5 rounded-full
                                    `}>
                                        {user.status}
                                    </Badge>
                                </td>
                                <td className="px-6 py-4">
                                    <Badge className={`
                                        ${user.verification === 'Verified' ? 'bg-green-50 text-green-600' : 
                                          user.verification === 'Pending' ? 'bg-yellow-50 text-yellow-500' : 
                                          'bg-red-50 text-red-400'} 
                                        border-none text-[10px] font-bold px-3 py-0.5 rounded-full
                                    `}>
                                        {user.verification}
                                    </Badge>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-bold text-gray-900">{user.walletBalance}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <Link href={`/users-management/${user.id}`} className="text-blue-600 text-sm font-semibold hover:underline">
                                        View
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
