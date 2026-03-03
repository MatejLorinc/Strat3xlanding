import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
    title: "STRAT3X | Strategic Growth Partner",
    description: "Strategic Growth Partner for ambitious companies.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
