"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

export default function AuditLogsContent() {
    const [searchTerm, setSearchTerm] = useState("");

    const auditLogs = [
        {
            id: "LOG001",
            timestamp: "Apr 23, 2026 - 14:32 PM",
            user: "admin@example.com",
            action: "User Status Updated",
            resource: "USR002",
            changes: "Status: Active ? Suspended",
            ipAddress: "192.168.1.100"
        },
        {
            id: "LOG002",
            timestamp: "Apr 23, 2026 - 13:15 PM",
            user: "admin@example.com",
            action: "Payment Approved",
            resource: "TXN5432",
            changes: "Amount: $150.00 approved",
            ipAddress: "192.168.1.100"
        },
        {
            id: "LOG003",
            timestamp: "Apr 23, 2026 - 12:45 PM",
            user: "moderator@example.com",
            action: "Content Flagged",
            resource: "CNT1234",
            changes: "Status: Pending ? Reviewed",
            ipAddress: "192.168.1.101"
        },
        {
            id: "LOG004",
            timestamp: "Apr 23, 2026 - 11:20 PM",
            user: "admin@example.com",
            action: "Settings Changed",
            resource: "CONFIG",
            changes: "Commission rate updated: 5% ? 6%",
            ipAddress: "192.168.1.100"
        },
        {
            id: "LOG005",
            timestamp: "Apr 23, 2026 - 10:05 AM",
            user: "admin@example.com",
            action: "Report Generated",
            resource: "RPT001",
            changes: "Monthly analytics report created",
            ipAddress: "192.168.1.100"
        }
    ];

    return (
        <div className="p-8 bg-[#F9F9F9] min-h-screen space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Audit Logs</h1>
                <p className="text-gray-600 mt-1">Track all administrative actions and system changes</p>
            </div>

            {/* Search Bar */}
            <div className="flex gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                        placeholder="Search logs..."
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
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">LOG ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">TIMESTAMP</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">USER</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">ACTION</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">RESOURCE</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">CHANGES</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">IP ADDRESS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {auditLogs.map((log) => (
                                <tr key={log.id} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{log.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{log.timestamp}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{log.user}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <Badge className="bg-blue-100 text-blue-800">{log.action}</Badge>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">{log.resource}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{log.changes}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700 font-mono">{log.ipAddress}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
