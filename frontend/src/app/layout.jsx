"use client";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { ContractProvider } from "@/contexts/contractContext";
import { MetamaskProvider } from "@/hooks/useMetamask";
import { NotificationContextProvider } from "@/contexts/Notification-context";
import Notifications from "@/components/notification/Notifications";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MetamaskProvider>
          <NotificationContextProvider>
            <ContractProvider>
              {children}
              <Notifications />
            </ContractProvider>
          </NotificationContextProvider>
        </MetamaskProvider>
        <Footer />
      </body>
    </html>
  );
}
