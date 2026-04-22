import type { Metadata } from "next";
import ResetPasswordForm from "@/components/forms/ResetPasswordForm";

export const metadata: Metadata = {
    title: "Reset Password",
};

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-4" style={{ backgroundImage: "url('/bg-client.jpg')" }}>
            <ResetPasswordForm />
        </div>
    );
};

export default page;
