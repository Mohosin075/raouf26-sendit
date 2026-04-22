"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useResetPasswordMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

const resetPasswordSchema = z
    .object({
        newPassword: z.string().min(6, "Password must be at least 6 characters").max(50, "Password must be less than 50 characters"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [resetPassword] = useResetPasswordMutation();
    const router = useRouter();
    const searchParams = useSearchParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            newPassword: "",
            confirmPassword: "",
        },
    });

    const handleResetPassword = async (data: ResetPasswordFormData) => {
        setIsLoading(true);
        const toastId = toast.loading("Resetting password...");

        try {
            // Here you would typically include the token/email from searchParams
            const response = await resetPassword(data).unwrap();

            if (response.success) {
                toast.success(response.message || "Password reset successfully!");
                router.push("/auth/login");
            } else {
                toast.error(response.message || "Something went wrong");
            }
        } catch (error: any) {
            console.error("Reset password error:", error);
            toast.error(error?.data?.message || "Failed to reset password");
        } finally {
            setIsLoading(false);
            toast.dismiss(toastId);
        }
    };

    return (
        <div className="bg-white p-8 md:p-10 rounded-[12px] shadow-sm w-full max-w-[480px]">
            <form onSubmit={handleSubmit(handleResetPassword)} className="w-full">
                {/* Icon & Header */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                        <Lock className="w-8 h-8 text-[#0052FF]" strokeWidth={1.5} />
                    </div>
                    <h1 className="text-[28px] text-center font-normal text-[#1A1A1A] mb-3">
                        NEW PASSWORD
                    </h1>
                    <p className="text-[#5A5A5A] text-center text-sm">
                        Create a strong password for your account
                    </p>
                </div>

                {/* New Password Field */}
                <div className="mb-6 space-y-2">
                    <label className="block text-sm font-medium text-[#1A1A1A]">
                        New Password
                    </label>
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Lock className="w-5 h-5" />
                        </div>
                        <input 
                            type={showNewPassword ? "text" : "password"} 
                            {...register("newPassword")} 
                            placeholder="At least 6 characters" 
                            className="w-full pl-12 pr-12 py-3.5 border border-[#1D4ED8] rounded-full focus:outline-none focus:ring-1 focus:ring-[#1D4ED8] bg-white placeholder:text-gray-400" 
                        />
                        <button 
                            type="button" 
                            onClick={() => setShowNewPassword(!showNewPassword)} 
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    {errors.newPassword && <p className="text-red-500 text-sm mt-1">{errors.newPassword.message}</p>}
                </div>

                {/* Confirm Password Field */}
                <div className="mb-10 space-y-2">
                    <label className="block text-sm font-medium text-[#1A1A1A]">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Lock className="w-5 h-5" />
                        </div>
                        <input 
                            type={showConfirmPassword ? "text" : "password"} 
                            {...register("confirmPassword")} 
                            placeholder="Confirm your password" 
                            className="w-full pl-12 pr-12 py-3.5 border border-[#1D4ED8] rounded-full focus:outline-none focus:ring-1 focus:ring-[#1D4ED8] bg-white placeholder:text-gray-400" 
                        />
                        <button 
                            type="button" 
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    disabled={isLoading} 
                    className="w-full bg-[#0052FF] hover:bg-blue-700 text-white font-semibold text-base py-3.5 px-4 rounded-full transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-200"
                >
                    {isLoading ? "Resetting..." : "Reset Password"}
                </button>
            </form>
        </div>
    );
}
