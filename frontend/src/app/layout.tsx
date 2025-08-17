
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Link from "next/link";
import Providers from "@/hooks/providers";


export const metadata: Metadata = {
  title: "Daily Dine",
  description: "Restaurant Table Booking APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Providers>
          
        {children}
        </Providers>
      
      </body>
    </html>
  );
}
