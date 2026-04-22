import type { Metadata } from "next";
import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";

export const metadata: Metadata = {
    title: "Forgot Password",
};

export default function ForgotPasswordPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-4" style={{ backgroundImage: "url('/bg-client.jpg')" }}>
            <ForgotPasswordForm />
        </div>
    );
}
