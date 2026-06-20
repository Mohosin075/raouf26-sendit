"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
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

// ─── Static / demo mode ───────────────────────────────────────────────────────
// API integration will replace this later.
const MOCK_TOKEN = "mock-admin-token-sendit";
const MOCK_ROLE  = "ADMIN";
// ─────────────────────────────────────────────────────────────────────────────

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const router   = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "web.mohosin@gmail.com",
            password: "12345678",
            rememberMe: false,
        },
    });

    /** Shared helper — sets Redux state then navigates to dashboard */
    const doMockLogin = () => {
        dispatch(setCredentials({ accessToken: MOCK_TOKEN, role: MOCK_ROLE }));
        toast.success("Login successful!");
        router.push("/");
    };

    const handleLogin = async (_data: LoginFormData) => {
        setIsLoading(true);
        // TODO: replace with real API call when backend is ready
        // const response = await login(_data).unwrap();
        doMockLogin();
        setIsLoading(false);
    };

    const handleDemoLogin = () => {
        setIsLoading(true);
        doMockLogin();
        setIsLoading(false);
    };

    return (
        <div className="w-full max-w-[500px] p-6">
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold text-[#2563EB] mb-8">
                    Sendit Admin
                </h1>
                <p className="text-gray-600 text-sm">
                    Sign in to continue as Admin
                </p>
            </div>

            <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                        Email
                    </label>
                    <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Mail className="w-5 h-5" />
                        </div>
                        <input
                            type="email"
                            {...register("email")}
                            placeholder="your@email.com"
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-gray-300"
                        />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                        Password
                    </label>
                    <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Lock className="w-5 h-5" />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            {...register("password")}
                            placeholder="........"
                            className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-gray-300"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                </div>

                <div className="flex items-center">
                    <Link href="/auth/forgot-password" title="Forgot Password ?" className="text-gray-700 text-sm font-semibold hover:underline transition-colors">
                        Forgot Password?
                    </Link>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                >
                    {isLoading ? "Logging in..." : "Login"}
                </button>

                {/* Demo Login Button */}
                <div className="pt-2 text-center">
                    <button
                        type="button"
                        onClick={handleDemoLogin}
                        disabled={isLoading}
                        className="text-blue-600 text-sm font-semibold hover:underline"
                    >
                        {isLoading ? "Logging in..." : "Demo Login"}
                    </button>
                </div>
            </form>
        </div>
    );
}
