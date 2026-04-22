"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import Link from "next/link";

export default function ShipmentsContent() {
    const [searchTerm, setSearchTerm] = useState("");

    const shipments = [
        {
            id: "SHP2845",
            sender: "Sarah Johnson",
            traveler: "Michael Chen",
            route: "NYC → London",
            status: "Active",
            date: "Apr 18, 2026",
            riskFlag: "Normal"
        },
        {
            id: "SHP2844",
            sender: "Emma Williams",
            traveler: "James Martinez",
            route: "LA → Tokyo",
            status: "Completed",
            date: "Apr 17, 2026",
            riskFlag: "Normal"
        },
        {
            id: "SHP2843",
            sender: "Olivia Brown",
            traveler: "Michael Chen",
            route: "Miami → Paris",
            status: "Pending",
            date: "Apr 16, 2026",
            riskFlag: "Flagged"
        },
        {
            id: "SHP2842",
            sender: "Sarah Johnson",
            traveler: "James Martinez",
            route: "Boston → Berlin",
            status: "Active",
            date: "Apr 15, 2026",
            riskFlag: "Normal"
        },
        {
            id: "SHP2841",
            sender: "Emma Williams",
            traveler: "Michael Chen",
            route: "Seattle → Sydney",
            status: "Failed",
            date: "Apr 14, 2026",
            riskFlag: "Flagged"
        }
    ];

    const getStatusBadgeClass = (status: string) => {
        switch (status.toLowerCase()) {
            case 'active': return 'bg-green-50 text-green-600 border-none px-4 py-1 rounded-full text-[10px] font-medium';
            case 'completed': return 'bg-green-100 text-green-800 border-none px-4 py-1 rounded-full text-[10px] font-medium';
            case 'pending': return 'bg-yellow-50 text-yellow-600 border-none px-4 py-1 rounded-full text-[10px] font-medium';
            case 'failed': return 'bg-red-50 text-red-600 border-none px-4 py-1 rounded-full text-[10px] font-medium';
            default: return 'bg-gray-50 text-gray-600 border-none px-4 py-1 rounded-full text-[10px] font-medium';
        }
    };

    const getRiskBadgeClass = (risk: string) => {
        return risk.toLowerCase() === 'flagged' 
            ? 'bg-red-50 text-red-600 border-none px-4 py-1 rounded-full text-[10px] font-medium' 
            : 'bg-green-50 text-green-600 border-none px-4 py-1 rounded-full text-[10px] font-medium';
    };

    return (
        <div className="p-8 space-y-6 bg-[#F9F9F9] min-h-screen">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Trips & Shipments</h1>
            </div>

            {/* Filters Row */}
            <div className="grid grid-cols-4 gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input 
                        placeholder="Search shipments..." 
                        className="pl-10 bg-transparent border border-gray-200 rounded-lg h-11 focus-visible:ring-blue-600" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="bg-transparent border border-gray-200 rounded-lg h-11"></div>
                <div className="bg-transparent border border-gray-200 rounded-lg h-11"></div>
                <div className="bg-transparent border border-gray-200 rounded-lg h-11"></div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">SHIPMENT ID</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">SENDER</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">TRAVELER</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">ROUTE</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">STATUS</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">DATE</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">RISK FLAG</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {shipments.map((shipment) => (
                            <tr key={shipment.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <span className="text-sm font-bold text-gray-900">{shipment.id}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-600">{shipment.sender}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-600">{shipment.traveler}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-600">{shipment.route}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={getStatusBadgeClass(shipment.status)}>
                                        {shipment.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-600">{shipment.date}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={getRiskBadgeClass(shipment.riskFlag)}>
                                        {shipment.riskFlag}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link 
                                        href={`/shipments/${shipment.id}`}
                                        className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                                    >
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
