import { LayoutDashboard, Users, Truck, LifeBuoy, Wallet, Bell, Shield, BarChart2, Settings, LogOut, FileText } from "lucide-react";
import { MenuItem, Role } from "@/types/navigation";

const commonMenuItems: MenuItem[] = [
    {
        title: "Overview",
        url: "/",
        icon: LayoutDashboard,
    },
    {
        title: "Users & Verification",
        url: "/users-management",
        icon: Users,
    },
    {
        title: "Trips & Shipments",
        url: "/shipments",
        icon: Truck,
    },
    {
        title: "Support & Disputes",
        url: "/content-moderation",
        icon: LifeBuoy,
    },
    {
        title: "Payments & Wallets",
        url: "/promotions",
        icon: Wallet,
    },
    {
        title: "Notifications",
        url: "/notifications",
        icon: Bell,
    },
    {
        title: "Risk & Policy",
        url: "/terms-conditions",
        icon: Shield,
    },
    {
        title: "Reports & Analytics",
        url: "/messages",
        icon: BarChart2,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    },
    {
        title: "Audit Logs",
        url: "/audit-logs",
        icon: FileText,
    },
];

export const MENU_ITEMS: Record<Role, MenuItem[]> = {
    admin: commonMenuItems,
    super_admin: commonMenuItems,
    organizer: commonMenuItems,
};


