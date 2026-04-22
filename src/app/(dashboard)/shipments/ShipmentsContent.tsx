"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

export default function ShipmentsContent() {
    const [searchTerm, setSearchTerm] = useState("");

    const shipments = [
        {
            id: "SHP2845",
            sender: "Sarah Johnson",
            traveler: "Michael Chen",
            route: "NYC ? London",
            status: "Active",
            date: "Apr 18, 2026",
            riskFlag: "Normal"
        },
        {
            id: "SHP2844",
            sender: "Emma Williams",
            traveler: "James Martinez",
            route: "LA ? Tokyo",
            status: "Completed",
            date: "Apr 17, 2026",
            riskFlag: "Normal"
        },
        {
            id: "SHP2843",
            sender: "Olivia Brown",
            traveler: "Michael Chen",
            route: "Miami ? Paris",
            status: "Pending",
            date: "Apr 16, 2026",
            riskFlag: "Flagged"
        },
        {
            id: "SHP2842",
            sender: "Sarah Johnson",
            traveler: "James Martinez",
            route: "Boston ? Berlin",
            status: "Active",
            date: "Apr 15, 2026",
            riskFlag: "Normal"
        },
        {
            id: "SHP2841",
            sender: "Emma Williams",
            traveler: "Michael Chen",
            route: "Seattle ? Sydney",
            status: "Failed",
            date: "Apr 14, 2026",
            riskFlag: "Flagged"
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active": return "bg-green-100 text-green-800";
            case "Completed": return "bg-blue-100 text-blue-800";
            case "Pending": return "bg-yellow-100 text-yellow-800";
            case "Failed": return "bg-red-100 text-red-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getRiskColor = (risk: string) => {
        return risk === "Flagged" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800";
    };

    return (
        <div className="p-8 bg-[#F9F9F9] min-h-screen space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Trips & Shipments</h1>
            </div>

            {/* Search Bar */}
            <div className="flex gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                        placeholder="Search shipments..."
                        className="pl-10 rounded-lg border-gray-300"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">SHIPMENT ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">SENDER</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">TRAVELER</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">ROUTE</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">STATUS</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">DATE</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">RISK FLAG</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shipments.map((shipment) => (
                                <tr key={shipment.id} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{shipment.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{shipment.sender}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{shipment.traveler}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{shipment.route}</td>
                                    <td className="px-6 py-4">
                                        <Badge className={`${getStatusColor(shipment.status)}`}>
                                            {shipment.status}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{shipment.date}</td>
                                    <td className="px-6 py-4">
                                        <Badge className={`${getRiskColor(shipment.riskFlag)}`}>
                                            {shipment.riskFlag}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
