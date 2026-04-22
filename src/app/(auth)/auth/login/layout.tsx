"use client";

import NonAuthenticatedGuard from "@/providers/NonAuthenticatedGuard";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return <NonAuthenticatedGuard>{children}</NonAuthenticatedGuard>;
}
