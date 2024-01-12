"use client";
import Wallet from "./Wallet";
import { useListen } from "@/hooks/useListen";
import { useMetamask } from "@/hooks/useMetamask";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const { dispatch } = useMetamask();
  const listen = useListen();

  useEffect(() => {
    if (typeof window !== undefined) {
      const ethereumProviderInjected = typeof window.ethereum !== "undefined";

      const isMetamaskInstalled =
        ethereumProviderInjected && Boolean(window.ethereum.isMetaMask);

      const local = window.localStorage.getItem("metamaskState");

      if (local) {
        listen();
      }

      const { wallet, balance, chainId } = local
        ? JSON.parse(local)
        : { wallet: null, balance: null };

      dispatch({
        type: "pageLoaded",
        isMetamaskInstalled,
        wallet,
        balance,
        chainId,
      });
    }
  }, []);

  return (
    <nav
      style={{
        backgroundColor: "var(--light-black-color)",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          color: "var(--white-color)",
          fontSize: "1.8rem",
          fontWeight: "bold",
          letterSpacing: "0.1rem",
          paddingLeft: "3rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0.8rem",
            left: "0.8rem",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          <Link href={"/"}>
            <Image
              src="/logo.png"
              width={45}
              height={45}
              style={{
                borderRadius: "50%",
              }}
            />
          </Link>
        </div>
        DigiFreelance Hub
      </div>
      <Wallet />
    </nav>
  );
};

export default Header;
