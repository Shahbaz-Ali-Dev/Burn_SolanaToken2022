// src/WalletProvider.tsx
import { connection } from "@/lib/config";
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import React, { ReactNode, useMemo } from "react";

interface WalletContextProviderProps {
    children: ReactNode;
}

const WalletContextProvider: React.FC<WalletContextProviderProps> = ({
    children,
}) => {
    const wallets = useMemo(() => [], []);

    return (
        <ConnectionProvider endpoint={connection.rpcEndpoint}>
            <WalletProvider wallets={wallets} autoConnect={true}>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default WalletContextProvider;
