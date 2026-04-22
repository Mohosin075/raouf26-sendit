import type { Metadata } from "next";
import TermsConditionsContent from "./TermsConditionsContent";

export const metadata: Metadata = {
    title: "Terms & Conditions",
};

export default function TermsConditionsPage() {
    return <TermsConditionsContent />;
}
