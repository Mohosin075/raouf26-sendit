"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Loader2, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { useGetUsersQuery, useUpdateUserStatusMutation, USER_STATUS } from "@/redux/features/users/userApi";
import { getImageUrl } from "@/utils";
import { toast } from "sonner";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function UserManagement() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [page, setPage] = useState(1);

    const { data: usersResponse, isLoading, isFetching } = useGetUsersQuery({
        searchTerm: searchTerm || undefined,
        status: statusFilter !== "all" ? statusFilter as USER_STATUS : undefined,
        page,
        limit: 10,
    });

    const [updateUserStatus, { isLoading: isUpdating }] = useUpdateUserStatusMutation();

    const users = usersResponse?.data || [];
    const meta = usersResponse?.meta;

    const handleStatusUpdate = async (userId: string, newStatus: USER_STATUS) => {
        try {
            await updateUserStatus({ id: userId, status: newStatus }).unwrap();
            toast.success(`User status updated to ${newStatus}`);
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to update status");
        }
    };

    const formatDate = (dateString: string) => {
        if (!dateString) return "N/A";
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="p-6 space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-serif text-foreground uppercase tracking-widest">User Management</h1>
                <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                    <span>Total: <span className="font-bold text-foreground">{meta?.total || 0} users</span></span>
                    {/* These might need separate API calls or derived from data if meta doesn't provide them */}
                    {/* For now, showing total from meta */}
                </div>
            </div>

            {/* Filters */}
            <div className="flex gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input 
                        placeholder="Search User..." 
                        className="pl-10 bg-input border-none rounded-2xl" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[180px] bg-input border-none rounded-2xl">
                        <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* User List */}
            <div className="space-y-4">
                {isLoading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    </div>
                ) : users.length === 0 ? (
                    <div className="text-center py-20 text-muted-foreground bg-secondary rounded-xl">
                        No users found
                    </div>
                ) : (
                    users.map((user: any) => (
                        <div key={user._id} className="bg-secondary rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center relative">
                            <div className="relative w-16 h-16 bg-gray-300 rounded-full shrink-0 overflow-hidden">
                                {user.profile ? (
                                    <Image src={getImageUrl(user.profile)} alt={user.name || "User"} fill className="object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white text-xl font-bold">
                                        {(user.name || user.email || "?").charAt(0).toUpperCase()}
                                    </div>
                                )}
                            </div>
                            
                            <div className="flex-1 space-y-2">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-serif text-lg font-medium text-foreground">{user.name || "N/A"}</h3>
                                    <Badge variant={user.status === 'active' ? 'default' : 'secondary'} className={`${user.status === 'active' ? 'bg-green-100 text-green-700 hover:bg-green-100' : user.status === 'deleted' ? 'bg-red-100 text-red-700 hover:bg-red-100' : 'bg-gray-200 text-gray-600 hover:bg-gray-200'} font-normal text-xs`}>
                                        {user.status}
                                    </Badge>
                                </div>
                                <div className="text-sm text-muted-foreground flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                                    <span>{user.email}</span>
                                </div>
                                <div className="text-xs text-muted-foreground flex flex-wrap gap-4 mt-1">
                                    <span className="flex items-center gap-1">📅 Joined {formatDate(user.createdAt)}</span>
                                    {/* lastActive is not in the model but we can show updatedAt if needed */}
                                    <span className="flex items-center gap-1">● Last active: {formatDate(user.updatedAt)}</span>
                                </div>
                            </div>

                            {/* Top Right Action Button */}
                              <div className="absolute top-4 right-4 z-20">
                                  <DropdownMenu modal={false}>
                                      <DropdownMenuTrigger className="h-8 w-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors outline-none border-none bg-transparent cursor-pointer">
                                           <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
                                       </DropdownMenuTrigger>
                                      <DropdownMenuContent align="end" sideOffset={8} className="w-48 p-2 space-y-2 bg-white border border-gray-100 shadow-2xl rounded-2xl z-[9999] !opacity-100 !visible">
                                          <DropdownMenuItem 
                                              className="flex items-center justify-center text-white bg-[#FFB800] hover:bg-[#E6A600] focus:bg-[#E6A600] focus:text-white cursor-pointer py-3 rounded-full font-bold text-base transition-colors border-none outline-none"
                                              onClick={(e) => {
                                                  e.preventDefault();
                                                  handleStatusUpdate(user._id, USER_STATUS.INACTIVE);
                                              }}
                                              disabled={isUpdating || user.status === USER_STATUS.INACTIVE}
                                          >
                                              Deactivate
                                          </DropdownMenuItem>
                                          <DropdownMenuItem 
                                              className="flex items-center justify-center text-white bg-[#34C759] hover:bg-[#2DB34F] focus:bg-[#2DB34F] focus:text-white cursor-pointer py-3 rounded-full font-bold text-base transition-colors border-none outline-none"
                                              onClick={(e) => {
                                                  e.preventDefault();
                                                  handleStatusUpdate(user._id, USER_STATUS.ACTIVE);
                                              }}
                                              disabled={isUpdating || user.status === USER_STATUS.ACTIVE}
                                          >
                                              Reactivate
                                          </DropdownMenuItem>
                                          <DropdownMenuItem 
                                              className="flex items-center justify-center text-white bg-[#FF3B30] hover:bg-[#E6352B] focus:bg-[#E6352B] focus:text-white cursor-pointer py-3 rounded-full font-bold text-base transition-colors border-none outline-none"
                                              onClick={(e) => {
                                                  e.preventDefault();
                                                  handleStatusUpdate(user._id, USER_STATUS.DELETED);
                                              }}
                                              disabled={isUpdating}
                                          >
                                              Delete
                                          </DropdownMenuItem>
                                      </DropdownMenuContent>
                                  </DropdownMenu>
                              </div>
                        </div>
                    ))
                )}
            </div>

            {/* Pagination */}
            {meta && meta.totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                    <Button 
                        variant="outline" 
                        size="sm" 
                        disabled={page === 1 || isFetching} 
                        onClick={() => setPage(p => p - 1)}
                    >
                        Previous
                    </Button>
                    <span className="flex items-center px-4 text-sm font-medium">
                        Page {page} of {meta.totalPages}
                    </span>
                    <Button 
                        variant="outline" 
                        size="sm" 
                        disabled={page === meta.totalPages || isFetching} 
                        onClick={() => setPage(p => p + 1)}
                    >
                        Next
                    </Button>
                </div>
            )}
        </div>
    );
}
