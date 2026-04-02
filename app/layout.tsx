import type { Metadata } from "next";
import type { ReactNode } from "react";
import { UiProvider } from "@/components/providers/ui-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sentryn",
  description: "Premium AI governance platform for controlled company AI usage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#050b14] antialiased text-foreground">
        <UiProvider>{children}</UiProvider>
      </body>
    </html>
  );
}
