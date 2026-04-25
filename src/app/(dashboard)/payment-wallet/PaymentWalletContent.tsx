"use client";

import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { 
    Search, 
    TrendingUp,
    Filter,
    Download,
    Plus,
    MoreVertical,
    ExternalLink,
    AlertCircle,
    CheckCircle2,
    XCircle,
    Clock,
    RotateCcw,
    FileText,
    History,
    ArrowRight
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { 
    Dialog, 
    DialogContent, 
    DialogHeader, 
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogDescription
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { 
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";

export default function PaymentWalletPage() {
    const [activeTab, setActiveTab] = useState<"transactions" | "withdrawals">("transactions");
    const [showManualAction, setShowManualAction] = useState(false);
    const [manualActionType, setManualActionType] = useState<string>("");
    const [showDetails, setShowDetails] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [showAuditLogs, setShowAuditLogs] = useState(false);
    const [showFilters, setShowFilters] = useState(false);

    const auditLogs = [
        { id: "LOG1", admin: "Admin John", action: "Manual Refund", target: "TXN5431", reason: "Customer error", date: "Apr 19, 2026 10:30 AM", oldValue: "$120.00", newValue: "$0.00 (Refunded)" },
        { id: "LOG2", admin: "Admin Sarah", action: "Withdrawal Approved", target: "WDL9874", reason: "Verified", date: "Apr 18, 2026 02:15 PM", oldValue: "Pending", newValue: "Approved" },
        { id: "LOG3", admin: "System", action: "Payout Failed", target: "WDL9873", reason: "Bank rejection", date: "Apr 17, 2026 11:45 AM", oldValue: "Processing", newValue: "Failed" },
    ];

    const stats = [
        { label: "Total Balance", amount: "$124,560.00", trend: "+12.5% from last month", icon: <TrendingUp className="w-4 h-4 text-blue-700" />, bg: "bg-blue-50" },
        { label: "Pending Earnings", amount: "$48,290.00", trend: "Across 127 transactions", icon: <TrendingUp className="w-4 h-4 text-amber-700" />, bg: "bg-amber-50" },
        { label: "Withdrawn Amount", amount: "$76,270.00", trend: "Last 30 days", icon: <TrendingUp className="w-4 h-4 text-green-700" />, bg: "bg-green-50" },
    ];  

    const transactions = [
        { id: "TXN5432", type: "Payment", user: "Sarah Johnson", amount: "$45.00", status: "Completed", date: "Apr 18, 2026", method: "Wallet", shipmentId: "SHP-9921", sender: "Sarah Johnson", receiver: "John Doe", timeline: [{ status: "Initiated", date: "Apr 18, 10:00 AM" }, { status: "Completed", date: "Apr 18, 10:05 AM" }] },
        { id: "TXN5431", type: "Refund", user: "Emma Williams", amount: "$25.00", status: "Pending", date: "Apr 17, 2026", method: "Stripe", shipmentId: "SHP-8812", sender: "Emma Williams", receiver: "Michael Ross", timeline: [{ status: "Refund Requested", date: "Apr 17, 02:30 PM" }] },
        { id: "TXN5430", type: "Commission", user: "Michael Chen", amount: "$8.50", status: "Completed", date: "Apr 17, 2026", method: "System", shipmentId: "SHP-7711", sender: "Michael Chen", receiver: "Platform", timeline: [{ status: "Calculated", date: "Apr 17, 09:00 AM" }, { status: "Paid", date: "Apr 17, 09:10 AM" }] },
        { id: "TXN5429", type: "Payment", user: "James Martinez", amount: "$120.00", status: "Failed", date: "Apr 16, 2026", method: "Card", shipmentId: "SHP-6610", sender: "James Martinez", receiver: "Alice Smith", timeline: [{ status: "Initiated", date: "Apr 16, 11:00 AM" }, { status: "Failed", date: "Apr 16, 11:02 AM" }] },
        { id: "TXN5428", type: "Adjustment", user: "Platform Admin", amount: "$10.00", status: "Completed", date: "Apr 15, 2026", method: "Manual", shipmentId: "N/A", sender: "Platform", receiver: "Sarah Johnson", timeline: [{ status: "Manual Adjustment", date: "Apr 15, 03:00 PM" }] },
    ];

    const handleManualAction = (type: string) => {
        setManualActionType(type);
        setShowManualAction(true);
    };

    const handleViewDetails = (item: any) => {
        setSelectedItem(item);
        setShowDetails(true);
    };

    const withdrawals = [
        { id: "WDL9876", user: "Robert Wilson", amount: "$1,200.00", status: "Pending", date: "Apr 19, 2026", method: "Bank Transfer" },
        { id: "WDL9875", user: "Linda Davis", amount: "$450.00", status: "Under Review", date: "Apr 18, 2026", method: "PayPal" },
        { id: "WDL9874", user: "Kevin Lee", amount: "$890.00", status: "Processing", date: "Apr 18, 2026", method: "Bank Transfer" },
        { id: "WDL9873", user: "Maria Garcia", amount: "$2,100.00", status: "Failed", date: "Apr 17, 2026", method: "Stripe Connect" },
        { id: "WDL9872", user: "Thomas Wright", amount: "$320.00", status: "Rejected", date: "Apr 16, 2026", method: "Bank Transfer" },
    ];

    const getStatusBadgeClass = (status: string) => {
        switch (status.toLowerCase()) {
            case 'completed': return 'bg-green-50 text-green-700 border-none px-4 py-1 rounded-full text-[10px] font-bold';
            case 'pending': return 'bg-amber-50 text-amber-700 border-none px-4 py-1 rounded-full text-[10px] font-bold';
            case 'failed': return 'bg-red-50 text-red-700 border-none px-4 py-1 rounded-full text-[10px] font-bold';
            case 'under review': return 'bg-blue-50 text-blue-700 border-none px-4 py-1 rounded-full text-[10px] font-bold';
            case 'processing': return 'bg-purple-50 text-purple-700 border-none px-4 py-1 rounded-full text-[10px] font-bold';
            case 'rejected': return 'bg-gray-100 text-gray-700 border-none px-4 py-1 rounded-full text-[10px] font-bold';
            case 'reversed': return 'bg-orange-50 text-orange-700 border-none px-4 py-1 rounded-full text-[10px] font-bold';
            case 'refunded': return 'bg-purple-50 text-purple-700 border-none px-4 py-1 rounded-full text-[10px] font-bold';
            case 'payout processing': return 'bg-cyan-50 text-cyan-700 border-none px-4 py-1 rounded-full text-[10px] font-bold';
            case 'payout rejected': return 'bg-rose-50 text-rose-700 border-none px-4 py-1 rounded-full text-[10px] font-bold';
            default: return 'bg-gray-50 text-gray-700 border-none px-4 py-1 rounded-full text-[10px] font-bold';
        }
    };

    return (
        <div className="p-8 space-y-8 bg-[#F9F9F9] min-h-screen">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="md:hidden block" />
                    <h1 className="text-2xl font-bold text-gray-900">Financial Management</h1>
                </div>
                <div className="flex items-center gap-3">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="border-gray-200 text-gray-700 font-bold gap-2">
                                <Download className="w-4 h-4" />
                                Export Data
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel className="font-bold">Export Options</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer font-bold">
                                <FileText className="w-4 h-4 mr-2" /> Export All Transactions
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer font-bold">
                                <TrendingUp className="w-4 h-4 mr-2" /> Export Payouts Only
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer font-bold">
                                <RotateCcw className="w-4 h-4 mr-2" /> Export Refunds/Adjustments
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer font-bold text-blue-700">
                                <Download className="w-4 h-4 mr-2" /> Export Filtered View
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold gap-2">
                                <Plus className="w-4 h-4" />
                                Manual Action
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>Financial Operations</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleManualAction("Refund")} className="cursor-pointer font-bold text-gray-700">
                                Create Manual Refund
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleManualAction("Adjustment")} className="cursor-pointer font-bold text-gray-700">
                                Manual Adjustment
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleManualAction("Credit")} className="cursor-pointer font-bold text-blue-700">
                                Credit User Wallet
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleManualAction("Deduct")} className="cursor-pointer font-bold text-red-700">
                                Deduct from Wallet
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleManualAction("Send")} className="cursor-pointer font-bold text-gray-700">
                                Send Money to User
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleManualAction("Freeze Wallet")} className="cursor-pointer font-bold text-red-700">
                                Freeze User Wallet
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${stat.bg}`}>
                                {stat.icon}
                            </div>
                            <p className="text-xs text-gray-700 font-bold uppercase tracking-wider">{stat.label}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-bold text-gray-900">{stat.amount}</p>
                            <p className={`text-xs font-bold flex items-center gap-1 ${stat.label === "Total Balance" ? "text-green-700" : "text-gray-700"}`}>
                                {stat.label === "Total Balance" && <TrendingUp className="w-3 h-3" />}
                                {stat.trend}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tabs & Filters */}
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100">
                    <div className="flex gap-8">
                        <button 
                            onClick={() => setActiveTab("transactions")}
                            className={`pb-4 text-sm font-bold transition-all px-1 ${activeTab === "transactions" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-600 hover:text-gray-900"}`}
                        >
                            Transactions
                        </button>
                        <button 
                            onClick={() => setActiveTab("withdrawals")}
                            className={`pb-4 text-sm font-bold transition-all px-1 ${activeTab === "withdrawals" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-600 hover:text-gray-900"}`}
                        >
                            Withdrawals
                        </button>
                    </div>
                    <div className="flex items-center gap-2 pb-2">
                        <Button 
                            onClick={() => setShowFilters(true)}
                            variant="ghost" 
                            size="sm" 
                            className="text-gray-600 font-bold gap-2"
                        >
                            <Filter className="w-4 h-4" />
                            Filters
                        </Button>
                        <Button 
                            onClick={() => setShowAuditLogs(true)}
                            variant="ghost" 
                            size="sm" 
                            className="text-gray-600 font-bold gap-2"
                        >
                            <History className="w-4 h-4" />
                            Audit Logs
                        </Button>
                    </div>
                </div>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                    <Input 
                        placeholder={`Search ${activeTab}...`} 
                        className="pl-10 bg-white border border-gray-200 rounded-xl h-12 shadow-sm focus-visible:ring-blue-600 font-bold placeholder:text-gray-500" 
                    />
                </div>

                {/* Table Area */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {activeTab === "transactions" ? (
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50 border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider">TRANSACTION ID</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider">TYPE</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider">USER</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider">METHOD</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider">AMOUNT</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider">STATUS</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider text-right">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {transactions.map((txn) => (
                                    <tr key={txn.id} className="hover:bg-gray-50/50 transition-colors group">
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
                                            <span className="text-xs text-gray-600 font-bold">{txn.method}</span>
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
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500">
                                                        <MoreVertical className="w-4 h-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                     <DropdownMenuItem onClick={() => handleViewDetails(txn)} className="font-bold gap-2 cursor-pointer">
                                                         <ExternalLink className="w-4 h-4" /> View Details
                                                     </DropdownMenuItem>
                                                     <DropdownMenuItem onClick={() => handleManualAction("Refund")} className="font-bold gap-2 cursor-pointer text-blue-700">
                                                         <RotateCcw className="w-4 h-4" /> Refund
                                                     </DropdownMenuItem>
                                                     <DropdownMenuItem onClick={() => handleManualAction("Reverse")} className="font-bold gap-2 cursor-pointer text-red-700">
                                                         <AlertCircle className="w-4 h-4" /> Reverse
                                                     </DropdownMenuItem>
                                                 </DropdownMenuContent>
                                            </DropdownMenu>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50 border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider">WITHDRAWAL ID</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider">USER</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider">AMOUNT</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider">METHOD</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider">STATUS</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider text-right">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {withdrawals.map((wdl) => (
                                    <tr key={wdl.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <span className="text-sm font-bold text-gray-900">{wdl.id}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-gray-700 font-bold">{wdl.user}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm font-bold text-gray-900">{wdl.amount}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-xs text-gray-600 font-bold">{wdl.method}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={getStatusBadgeClass(wdl.status)}>
                                                {wdl.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                {wdl.status === "Pending" && (
                                                    <>
                                                        <Button size="sm" variant="outline" className="h-8 border-green-200 text-green-700 hover:bg-green-50 font-bold">Approve</Button>
                                                        <Button size="sm" variant="outline" className="h-8 border-red-200 text-red-700 hover:bg-red-50 font-bold">Reject</Button>
                                                    </>
                                                )}
                                                {wdl.status === "Failed" && (
                                                    <Button size="sm" variant="outline" className="h-8 border-blue-200 text-blue-700 hover:bg-blue-50 font-bold">Retry Payout</Button>
                                                )}
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500">
                                                            <MoreVertical className="w-4 h-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                         <DropdownMenuItem onClick={() => handleViewDetails(wdl)} className="font-bold gap-2 cursor-pointer">
                                                             <FileText className="w-4 h-4" /> View Details
                                                         </DropdownMenuItem>
                                                         <DropdownMenuItem className="font-bold gap-2 cursor-pointer text-amber-700">
                                                             <Clock className="w-4 h-4" /> Hold for Review
                                                         </DropdownMenuItem>
                                                         <DropdownMenuItem className="font-bold gap-2 cursor-pointer text-green-700">
                                                             <CheckCircle2 className="w-4 h-4" /> Mark as Processed
                                                         </DropdownMenuItem>
                                                     </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* Manual Action Dialog */}
            <Dialog open={showManualAction} onOpenChange={setShowManualAction}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle className="font-bold text-xl">{manualActionType} Operation</DialogTitle>
                        <DialogDescription className="font-bold text-gray-500">
                            Perform a manual financial action. This will be logged in the audit trail.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label className="font-bold text-gray-700">Target User / ID</Label>
                            <Input placeholder="Enter User ID or Name" className="font-bold" />
                        </div>
                        {manualActionType !== "Freeze Wallet" && (
                            <div className="space-y-2">
                                <Label className="font-bold text-gray-700">Amount ($)</Label>
                                <Input type="number" placeholder="0.00" className="font-bold" />
                            </div>
                        )}
                        <div className="space-y-2">
                            <Label className="font-bold text-gray-700">{manualActionType === "Freeze Wallet" ? "Reason for Freezing" : "Reason / Description"}</Label>
                            <Textarea placeholder="Explain the reason for this action..." className="font-bold min-h-[100px]" />
                        </div>
                        <div className="space-y-2">
                            <Label className="font-bold text-gray-700">Category</Label>
                            <Select>
                                <SelectTrigger className="font-bold">
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="error" className="font-bold">Error Correction</SelectItem>
                                    <SelectItem value="promo" className="font-bold">Promotional Credit</SelectItem>
                                    <SelectItem value="dispute" className="font-bold">Dispute Resolution</SelectItem>
                                    <SelectItem value="other" className="font-bold">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowManualAction(false)} className="font-bold">Cancel</Button>
                        <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8">Confirm Action</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Transaction/Withdrawal Details Dialog */}
            <Dialog open={showDetails} onOpenChange={setShowDetails}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="font-bold text-xl">Investigation View: {selectedItem?.id}</DialogTitle>
                        <DialogDescription className="font-bold text-gray-500">
                            Detailed breakdown of the financial entity and linked information.
                        </DialogDescription>
                    </DialogHeader>
                    
                    {selectedItem && (
                        <div className="space-y-8 py-4">
                            {/* Key Info */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Amount</p>
                                    <p className="text-lg font-bold text-gray-900">{selectedItem.amount}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Status</p>
                                    <Badge className={getStatusBadgeClass(selectedItem.status)}>{selectedItem.status}</Badge>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Date</p>
                                    <p className="text-sm font-bold text-gray-900">{selectedItem.date}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Payment Method</p>
                                    <p className="text-sm font-bold text-gray-900">{selectedItem.method}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Payout Method</p>
                                    <p className="text-sm font-bold text-gray-900">{selectedItem.payoutMethod || "Bank Transfer"}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Parties Involved */}
                                <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                                    <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                                        <Plus className="w-4 h-4 text-blue-700" /> Involved Parties
                                    </h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-bold text-gray-500">Sender / User</span>
                                            <span className="text-sm font-bold text-gray-900">{selectedItem.user || selectedItem.sender}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-bold text-gray-500">Transporter / Traveler</span>
                                            <span className="text-sm font-bold text-gray-900">{selectedItem.transporter || "Alex Nomad"}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-bold text-gray-500">Receiver</span>
                                            <span className="text-sm font-bold text-gray-900">{selectedItem.receiver || "N/A"}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-bold text-gray-500">Linked Entity</span>
                                            <span className="text-sm font-bold text-blue-700 hover:underline cursor-pointer">
                                                {selectedItem.shipmentId || selectedItem.bookingId || selectedItem.tripId || "SHP-9921"}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline */}
                                <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                                    <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                                        <History className="w-4 h-4 text-blue-700" /> Transaction Timeline
                                    </h4>
                                    <div className="space-y-4 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-gray-200">
                                        {(selectedItem.timeline || [{ status: "Created", date: selectedItem.date }]).map((event: any, i: number) => (
                                            <div key={i} className="pl-6 relative">
                                                <div className="absolute left-[5px] top-[6px] w-2 h-2 rounded-full bg-blue-700 border-2 border-white shadow-sm" />
                                                <p className="text-sm font-bold text-gray-900">{event.status}</p>
                                                <p className="text-[10px] font-bold text-gray-500">{event.date}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Internal Notes */}
                            <div className="space-y-3">
                                <Label className="font-bold text-gray-900">Internal Admin Notes</Label>
                                <Textarea 
                                    placeholder="Add notes for other admins..." 
                                    className="font-bold min-h-[100px] bg-amber-50/30 border-amber-100" 
                                />
                                <p className="text-[10px] font-bold text-gray-500">Only visible to administrators and financial team.</p>
                            </div>
                        </div>
                    )}

                    <DialogFooter className="flex items-center justify-between border-t pt-6 mt-6">
                        <div className="flex gap-2">
                            {selectedItem?.status === "Pending" && (
                                <>
                                    <Button className="bg-green-700 hover:bg-green-800 text-white font-bold">Approve</Button>
                                    <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50 font-bold">Reject</Button>
                                </>
                            )}
                            {selectedItem?.status === "Failed" && (
                                <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold">Retry Payout</Button>
                            )}
                        </div>
                        <Button variant="ghost" onClick={() => setShowDetails(false)} className="font-bold">Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Audit Logs Sheet */}
            <Sheet open={showAuditLogs} onOpenChange={setShowAuditLogs}>
                <SheetContent className="sm:max-w-md overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle className="font-bold text-xl">Financial Audit Logs</SheetTitle>
                        <SheetDescription className="font-bold text-gray-500">
                            Every financial action performed by administrators or the system is logged here.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="mt-8 space-y-6">
                        {auditLogs.map((log) => (
                            <div key={log.id} className="p-4 rounded-xl border border-gray-100 space-y-3 hover:bg-gray-50/50 transition-colors">
                                <div className="flex justify-between items-start">
                                    <Badge className="bg-blue-50 text-blue-700 border-none font-bold text-[10px]">{log.action}</Badge>
                                    <span className="text-[10px] font-bold text-gray-400">{log.date}</span>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-bold text-gray-900">Performed by: {log.admin}</p>
                                    <p className="text-xs font-bold text-gray-600">Target ID: <span className="text-blue-700">{log.target}</span></p>
                                    <div className="flex items-center gap-2 mt-2 p-2 bg-gray-100 rounded text-[10px] font-bold">
                                        <span className="text-red-600 line-through">{log.oldValue}</span>
                                        <ArrowRight className="w-3 h-3 text-gray-400" />
                                        <span className="text-green-600">{log.newValue}</span>
                                    </div>
                                </div>
                                <div className="pt-2 border-t border-gray-50">
                                    <p className="text-xs font-bold text-gray-500 italic">{log.reason}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>

            {/* Filters Dialog */}
            <Dialog open={showFilters} onOpenChange={setShowFilters}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle className="font-bold text-xl">Filter Financial Data</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label className="font-bold text-gray-700">Transaction Type</Label>
                            <Select>
                                <SelectTrigger className="font-bold">
                                    <SelectValue placeholder="All Types" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="payment" className="font-bold">Payment</SelectItem>
                                    <SelectItem value="refund" className="font-bold">Refund</SelectItem>
                                    <SelectItem value="withdrawal" className="font-bold">Withdrawal</SelectItem>
                                    <SelectItem value="commission" className="font-bold">Commission</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="font-bold text-gray-700">User</Label>
                                <Input placeholder="User name or ID" className="font-bold" />
                            </div>
                            <div className="space-y-2">
                                <Label className="font-bold text-gray-700">Shipment / Booking ID</Label>
                                <Input placeholder="Enter ID" className="font-bold" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label className="font-bold text-gray-700">Status</Label>
                            <Select>
                                <SelectTrigger className="font-bold">
                                    <SelectValue placeholder="All Statuses" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="completed" className="font-bold text-green-700">Completed</SelectItem>
                                    <SelectItem value="pending" className="font-bold text-amber-700">Pending</SelectItem>
                                    <SelectItem value="failed" className="font-bold text-red-700">Failed</SelectItem>
                                    <SelectItem value="review" className="font-bold text-blue-700">Under Review</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label className="font-bold text-gray-700">Payment Method</Label>
                            <Select>
                                <SelectTrigger className="font-bold">
                                    <SelectValue placeholder="All Methods" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="wallet" className="font-bold">Wallet</SelectItem>
                                    <SelectItem value="card" className="font-bold">Credit/Debit Card</SelectItem>
                                    <SelectItem value="bank" className="font-bold">Bank Transfer</SelectItem>
                                    <SelectItem value="stripe" className="font-bold">Stripe</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex items-center gap-2 pt-2">
                            <input type="checkbox" id="failed-only" className="rounded border-gray-300" />
                            <Label htmlFor="failed-only" className="font-bold text-gray-700 cursor-pointer">Show Failed / Under Review Only</Label>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowFilters(false)} className="font-bold text-gray-500">Reset</Button>
                        <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8">Apply Filters</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

