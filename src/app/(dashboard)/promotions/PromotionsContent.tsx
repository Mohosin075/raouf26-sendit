"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { 
    Search, 
    ChevronLeft, 
    ChevronRight,
    TrendingUp
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function FinancialManagementPage() {
    const stats = [
        { label: "Total Balance", amount: "$124,560.00", trend: "+12.5% from last month", icon: <TrendingUp className="w-4 h-4 text-blue-600" />, bg: "bg-blue-50" },
        { label: "Pending Earnings", amount: "$48,290.00", trend: "Across 127 transactions", icon: <TrendingUp className="w-4 h-4 text-orange-600" />, bg: "bg-orange-50" },
        { label: "Withdrawn Amount", amount: "$76,270.00", trend: "Last 30 days", icon: <TrendingUp className="w-4 h-4 text-green-600" />, bg: "bg-green-50" },
    ];

    const transactions = [
        { id: "TXN5432", type: "Payment", user: "Sarah Johnson", amount: "$45.00", status: "Completed", date: "Apr 18, 2026" },
        { id: "TXN5431", type: "Refund", user: "Emma Williams", amount: "$25.00", status: "Pending", date: "Apr 17, 2026" },
        { id: "TXN5430", type: "Commission", user: "Michael Chen", amount: "$8.50", status: "Completed", date: "Apr 17, 2026" },
        { id: "TXN5429", type: "Payment", user: "James Martinez", amount: "$120.00", status: "Failed", date: "Apr 16, 2026" },
    ];

    const getStatusBadgeClass = (status: string) => {
        switch (status.toLowerCase()) {
            case 'completed': return 'bg-green-50 text-green-700 border-none px-4 py-1 rounded-full text-[10px] font-bold';
            case 'pending': return 'bg-amber-50 text-amber-700 border-none px-4 py-1 rounded-full text-[10px] font-bold';
            case 'failed': return 'bg-red-50 text-red-700 border-none px-4 py-1 rounded-full text-[10px] font-bold';
            default: return 'bg-gray-50 text-gray-700 border-none px-4 py-1 rounded-full text-[10px] font-bold';
        }
    };

    return (
        <div className="p-8 space-y-8 bg-[#F9F9F9] min-h-screen">
            {/* Header */}
            <div className="flex items-center gap-2">
                <SidebarTrigger className="md:hidden block" />
                <h1 className="text-2xl font-bold text-gray-900">Financial Management</h1>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${stat.bg}`}>
                                <span className="text-lg font-bold text-gray-900">$</span>
                            </div>
                            <p className="text-xs text-gray-600 font-bold uppercase tracking-wider">{stat.label}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-bold text-gray-900">{stat.amount}</p>
                            <p className={`text-xs font-bold flex items-center gap-1 ${stat.label === "Total Balance" ? "text-green-700" : "text-gray-600"}`}>
                                {stat.label === "Total Balance" && <TrendingUp className="w-3 h-3" />}
                                {stat.trend}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tabs */}
            <div className="flex gap-8 border-b border-gray-100">
                <button className="pb-4 text-sm font-bold text-blue-700 border-b-2 border-blue-700 px-1">Transactions</button>
                <button className="pb-4 text-sm font-bold text-gray-600 px-1 hover:text-gray-700 transition-colors">Withdrawals</button>
            </div>

            {/* Search */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                <Input 
                    placeholder="Search transactions..." 
                    className="pl-10 bg-white border border-gray-200 rounded-xl h-12 shadow-sm focus-visible:ring-blue-600 font-bold placeholder:text-gray-500" 
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider">TRANSACTION ID</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider">TYPE</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider">USER</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider">AMOUNT</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider">STATUS</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider text-right">DATE</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {transactions.map((txn) => (
                            <tr key={txn.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <span className="text-sm font-bold text-gray-900">{txn.id}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-700 font-bold">{txn.type}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-700 font-bold">{txn.user}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-bold text-gray-900">{txn.amount}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={getStatusBadgeClass(txn.status)}>
                                        {txn.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <span className="text-sm text-gray-700 font-bold">{txn.date}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
