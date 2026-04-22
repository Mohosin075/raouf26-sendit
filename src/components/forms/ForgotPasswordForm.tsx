"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForgotPasswordMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

const forgotPasswordSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [forgotPassword] = useForgotPasswordMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: { email: "" },
    });

    const handleSubmitEmail = async (data: ForgotPasswordFormData) => {
        setIsLoading(true);
        const toastId = toast.loading("Sending reset link...");

        try {
            const response = await forgotPassword(data).unwrap();

            if (response.success) {
                toast.success(response.message || "Reset link sent successfully!");
                router.push(`/auth/verify-otp?email=${encodeURIComponent(data.email)}`);
            } else {
                toast.error(response.message || "Something went wrong");
            }
        } catch (error: any) {
            console.error("Forgot password error:", error);
            toast.error(error?.data?.message || "Failed to send reset link");
        } finally {
            setIsLoading(false);
            toast.dismiss(toastId);
        }
    };

    return (
        <div className="bg-white p-8 md:p-10 rounded-[12px] shadow-sm w-full max-w-[480px] relative">
            {/* Back Button */}
            <div className="absolute top-8 left-8">
                <Link href="/auth/login" className="flex items-center text-sm font-medium text-[#5A5A5A] hover:text-[#0052FF] transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Sign In
                </Link>
            </div>

            <form onSubmit={handleSubmit(handleSubmitEmail)} className="w-full mt-10">
                {/* Icon & Header */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                        <Mail className="w-8 h-8 text-[#0052FF]" strokeWidth={1.5} />
                    </div>
                    <h1 className="text-[28px] text-center font-normal text-[#1A1A1A] mb-3">
                        Forgot Password
                    </h1>
                    <p className="text-[#5A5A5A] text-center text-sm">
                        Enter your email to receive a verification code
                    </p>
                </div>

                {/* Email Field */}
                <div className="mb-8 space-y-2">
                    <label className="block text-sm font-medium text-[#1A1A1A]">
                        Email Address
                    </label>
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Mail className="w-5 h-5" />
                        </div>
                        <input 
                            type="email" 
                            {...register("email")} 
                            placeholder="your@email.com" 
                            className="w-full pl-12 pr-4 py-3.5 border border-[#1D4ED8] rounded-full focus:outline-none focus:ring-1 focus:ring-[#1D4ED8] bg-white placeholder:text-gray-400" 
                        />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    disabled={isLoading} 
                    className="w-full bg-[#0052FF] hover:bg-blue-700 text-white font-semibold text-base py-3.5 px-4 rounded-full transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-200 mb-8"
                >
                    {isLoading ? "Sending..." : "Send Verification Code"}
                </button>
            </form>
        </div>
    );
}
