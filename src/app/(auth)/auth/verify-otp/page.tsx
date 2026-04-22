import type { Metadata } from "next";
import OTPVerifyForm from "@/components/forms/OTPVerifyForm";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Verify OTP",
};

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-4" style={{ backgroundImage: "url('/bg-client.jpg')" }}>
            <Suspense fallback={<div>Loading...</div>}>
                <OTPVerifyForm />
            </Suspense>
        </div>
    );
};

export default page;
