import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { SideBar } from "@/components/SideBar/SideBar";
import { SideBarProvider } from "@/context/SideBarContext";
import { Footer } from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Página Inicial | UltraRifa",
  description: "O melhor site de Rifas Online do Brasil!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`flex flex-col bg-gray-50 overflow-x-hidden ${inter.className}`}>
          <SideBarProvider>
            <Header/>
            <SideBar />
            {children}
            <Footer />
          </SideBarProvider>
      </body>
    </html>
  );
}
