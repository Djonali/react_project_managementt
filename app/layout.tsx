import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme, ThemePanel } from "@radix-ui/themes";
import NavBar from "./NavBar";
import AuthProvider from "./auth/Provider";
import QueryClientProvider from "./QueryClientProvider";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter'} ,);

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Issue Tracker nextjs app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <QueryClientProvider>
        <AuthProvider>
        <Theme accentColor="red" radius="large">
          <NavBar />
          <main className="p-5">{children}</main>        
        </Theme>
        </AuthProvider>
       </QueryClientProvider>
      </body>
    </html>
  );
}
