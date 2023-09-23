import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/provider/provider";
import ToasterProvider from "@/provider/ToasterProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloneflix",
  description: "Netflix Clone Personal Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider/>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
