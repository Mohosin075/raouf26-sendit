import { LayoutDashboard, Users, Truck, Wallet, Bell, Shield, MessageSquare, Settings, FileText, BarChart2 } from "lucide-react";
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
        url: "/messages",
        icon: MessageSquare,
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
        url: "/risk-policy",
        icon: Shield,
    },
    {
        title: "Reports & Analytics",
        url: "/content-moderation",
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


