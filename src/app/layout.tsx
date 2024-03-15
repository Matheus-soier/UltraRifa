import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { SideBar } from "@/components/SideBar/SideBar";
import { SideBarProvider } from "@/context/SideBarContext";

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
      <body className={`flex flex-col ${inter.className}`}>
          <SideBarProvider>
            <Header/>
            <SideBar />
            {children}
          </SideBarProvider>
      </body>
    </html>
  );
}
