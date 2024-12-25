import type { Metadata } from "next";

import "./globals.css";

import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    `${GeistSans.variable} ${GeistMono.variable}`,
                    "antialiased",
                    "bg-neutral-900"
                )}
            >
                {children}
            </body>
        </html>
    );
}
