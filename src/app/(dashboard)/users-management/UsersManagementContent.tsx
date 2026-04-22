"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Loader2, MoreHorizontal, Filter } from "lucide-react";
import Image from "next/image";
import { USER_STATUS } from "@/redux/features/users/userApi";
import { getImageUrl } from "@/utils";
import { toast } from "sonner";
import { MOCK_USERS } from "@/data/demoUsers";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

export default function UserManagement() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [page, setPage] = useState(1);

    // Filter and Paginate Mock Data
    const filteredUsers = MOCK_USERS.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             (user as any).userId?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "all" || user.status.toLowerCase() === statusFilter.toLowerCase();
        return matchesSearch && matchesStatus;
    });

    const itemsPerPage = 10;
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const users = filteredUsers.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    const isLoading = false;
    const isFetching = false;
    const isUpdating = false;

    const handleStatusUpdate = async (userId: string, newStatus: string) => {
        toast.success(`User status updated to ${newStatus} (Demo)`);
    };

    const getStatusBadgeClass = (status: string) => {
        switch (status.toLowerCase()) {
            case 'active': return 'bg-green-50 text-green-600 border-none px-4 py-1 rounded-full text-xs font-medium';
            case 'suspended': return 'bg-red-50 text-red-600 border-none px-4 py-1 rounded-full text-xs font-medium';
            case 'pending': return 'bg-yellow-50 text-yellow-600 border-none px-4 py-1 rounded-full text-xs font-medium';
            default: return 'bg-gray-50 text-gray-600 border-none px-4 py-1 rounded-full text-xs font-medium';
        }
    };

    const getVerificationBadgeClass = (status: string) => {
        switch (status.toLowerCase()) {
            case 'verified': return 'bg-green-50 text-green-600 border-none px-4 py-1 rounded-full text-xs font-medium';
            case 'unverified': return 'bg-orange-50 text-orange-600 border-none px-4 py-1 rounded-full text-xs font-medium';
            case 'pending': return 'bg-yellow-50 text-yellow-600 border-none px-4 py-1 rounded-full text-xs font-medium';
            default: return 'bg-gray-50 text-gray-600 border-none px-4 py-1 rounded-full text-xs font-medium';
        }
    };

    return (
        <div className="p-8 space-y-6 bg-[#F9F9F9] min-h-screen">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Users Management</h1>
            </div>

            {/* Search and Filters */}
            <div className="flex gap-4 items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input 
                        placeholder="Search by name, email, phone, user ID, parcel ID" 
                        className="pl-10 bg-transparent border border-gray-200 rounded-lg h-11 focus-visible:ring-blue-600" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <Filter className="w-5 h-5 text-gray-500" />
                </button>
                <div className="w-24">
                    <Input className="bg-transparent border border-gray-200 rounded-lg h-11" disabled />
                </div>
            </div>

            {/* User List Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">User Name</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Verification</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Wallet Balance</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {users.map((user: any) => (
                            <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-gray-900">{user.name}</span>
                                        <span className="text-xs text-gray-400">{user.userId}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-600">{user.email}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-600">{user.role}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={getStatusBadgeClass(user.status)}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={getVerificationBadgeClass(user.verification)}>
                                        {user.verification}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-bold text-gray-900">{user.walletBalance}</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link href={`/users-management/${user.id}`} className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                                        View
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-8 pb-8">
                    <Button 
                        variant="outline" 
                        size="sm" 
                        disabled={page === 1} 
                        onClick={() => setPage(p => p - 1)}
                        className="rounded-lg border-gray-200"
                    >
                        Previous
                    </Button>
                    <div className="flex items-center gap-1">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <Button
                                key={i + 1}
                                variant={page === i + 1 ? "default" : "outline"}
                                size="sm"
                                onClick={() => setPage(i + 1)}
                                className={`w-8 h-8 rounded-lg ${page === i + 1 ? 'bg-blue-600 hover:bg-blue-700' : 'border-gray-200'}`}
                            >
                                {i + 1}
                            </Button>
                        ))}
                    </div>
                    <Button 
                        variant="outline" 
                        size="sm" 
                        disabled={page === totalPages} 
                        onClick={() => setPage(p => p + 1)}
                        className="rounded-lg border-gray-200"
                    >
                        Next
                    </Button>
                </div>
            )}
        </div>
    );
}
