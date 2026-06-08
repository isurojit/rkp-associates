import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RKP Associates - Assurance Taxation Consultancy",
  description:
    "Empowering Growth Through Expert Financial Solutions. Established 1986. Internal Audit, Statutory Audit, Tax Consultancy, and IT Services.",
  keywords: [
    "CA",
    "Chartered Accountant",
    "Audit",
    "Tax",
    "Consultancy",
    "Financial Services",
    "India",
  ],
  authors: [{ name: "RKP Associates" }],
  openGraph: {
    title: "RKP Associates - Assurance Taxation Consultancy",
    description: "Empowering Growth Through Expert Financial Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            success: {
              style: {
                background: "#2563eb",
                color: "#fff",
              },
            },
            error: {
              style: {
                background: "#dc2626",
                color: "#fff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
