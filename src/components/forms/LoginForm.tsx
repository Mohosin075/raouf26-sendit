"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setCredentials } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const loginSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters").max(50, "Password must be less than 50 characters"),
    rememberMe: z.boolean(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [login] = useLoginMutation();
    const dispatch = useDispatch();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "web.mohosin@gmail.com",
            password: "12345678",
            rememberMe: false,
        },
    });

    const handleLogin = async (data: LoginFormData) => {
        setIsLoading(true);
        const toastId = toast.loading("Logging in...");

        try {
            const response = await login(data).unwrap();

            if (response.success && response.data) {
                dispatch(
                    setCredentials({
                        accessToken: response.data.accessToken,
                        role: response.data.role,
                    })
                );
                toast.success("Login successful!");
                router.push("/");
            } else {
                toast.error(response.message || "Login failed");
            }
        } catch (error: any) {
            console.error("Login failed:", error);
            toast.error(error?.data?.message || "Login failed");
        } finally {
            setIsLoading(false);
            reset();
            toast.dismiss(toastId);
        }
    };

    const handleDemoLogin = async () => {
        setIsLoading(true);
        const toastId = toast.loading("Logging in with demo account...");

        try {
            const demoData = {
                email: "web.mohosin@gmail.com",
                password: "12345678",
                rememberMe: false,
            };
            const response = await login(demoData).unwrap();

            if (response.success && response.data) {
                dispatch(
                    setCredentials({
                        accessToken: response.data.accessToken,
                        role: response.data.role,
                    })
                );
                toast.success("Demo login successful!");
                router.push("/");
            } else {
                toast.error(response.message || "Demo login failed");
            }
        } catch (error: any) {
            console.error("Demo login failed:", error);
            toast.error(error?.data?.message || "Demo login failed");
        } finally {
            setIsLoading(false);
            toast.dismiss(toastId);
        }
    };

    return (
        <div className="bg-white p-8 md:p-10 rounded-[12px] shadow-sm w-full max-w-[480px]">
            <form onSubmit={handleSubmit(handleLogin)} className="w-full">
                {/* Header */}
                <div className="flex flex-col items-center mb-8">
                    <h1 className="text-[28px] text-center font-normal text-[#1A1A1A] mb-6">
                        Welcome again.
                    </h1>
                    

                </div>

                {/* Email Field */}
                <div className="mb-6 space-y-2">
                    <label className="block text-sm font-medium text-[#1A1A1A]">
                        Email
                    </label>
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Mail className="w-5 h-5" />
                        </div>
                        <input 
                            type="email" 
                            {...register("email")} 
                            placeholder="Enter your @ Email" 
                            className="w-full pl-12 pr-4 py-3.5 border border-[#1D4ED8] rounded-full focus:outline-none focus:ring-1 focus:ring-[#1D4ED8] bg-white placeholder:text-gray-400" 
                        />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                {/* Password Field */}
                <div className="mb-6 space-y-2">
                    <label className="block text-sm font-medium text-[#1A1A1A]">
                        Password
                    </label>
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Lock className="w-5 h-5" />
                        </div>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            {...register("password")} 
                            placeholder="Enter your Password" 
                            className="w-full pl-12 pr-12 py-3.5 border border-[#1D4ED8] rounded-full focus:outline-none focus:ring-1 focus:ring-[#1D4ED8] bg-white placeholder:text-gray-400" 
                        />
                        <button 
                            type="button" 
                            onClick={() => setShowPassword(!showPassword)} 
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center">
                        <input 
                            type="checkbox" 
                            id="rememberMe" 
                            {...register("rememberMe")} 
                            className="h-4 w-4 rounded border-gray-300 text-[#1D4ED8] focus:ring-[#1D4ED8]" 
                        />
                        <label htmlFor="rememberMe" className="ml-2 text-xs text-gray-500">
                            Rememebr me
                        </label>
                    </div>
                    <Link href="/auth/forgot-password" title="Forgot Password ?" className="text-gray-500 text-xs hover:text-[#1D4ED8] transition-colors">
                        Forgot Password ?
                    </Link>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    disabled={isLoading} 
                    className="w-full bg-[#0052FF] hover:bg-blue-700 text-white font-semibold text-base py-3.5 px-4 rounded-full transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-200"
                >
                    {isLoading ? "Logging in..." : "Login"}
                </button>

                {/* Demo Login Button */}
                <div className="mt-4 text-center">
                    <button 
                        type="button" 
                        onClick={handleDemoLogin}
                        disabled={isLoading} 
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm py-2.5 px-4 rounded-full transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Logging in..." : "Demo Login"}
                    </button>
                </div>
            </form>
        </div>
    );
}
