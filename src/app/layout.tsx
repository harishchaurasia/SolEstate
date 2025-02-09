import Link from "next/link";
import "./globals.css";
import AppWalletProvider from "@/components/AppWalletProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppWalletProvider>
          {/* <header className="bg-indigo-600 text-white p-4">
            <nav className="flex justify-between items-center container mx-auto">
              <Link href="/" className="text-xl font-bold">
                MyApp
              </Link>
              <div className="space-x-4">
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
                <Link href="/marketplace" className="hover:text-gray-300">
                  Marketplace
                </Link>
                <Link href="/submit" className="hover:text-gray-300">
                  Submit Project
                </Link>
              </div>
            </nav>
          </header> */}
          {children}
        </AppWalletProvider>
      </body>
    </html>
  );
}
