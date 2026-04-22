import type { Metadata } from "next";
import LoginForm from "@/components/forms/LoginForm";

export const metadata: Metadata = {
    title: "Login",
};

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-4" style={{ backgroundImage: "url('/bg-client.jpg')" }}>
            <LoginForm />
        </div>
    );
};

export default page;
