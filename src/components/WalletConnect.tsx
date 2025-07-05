import React, { useCallback } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import truncateString from "@/utils/truncateString";
const WalletConnect: React.FC = () => {
    const { connected, wallet, connect, disconnect, publicKey } = useWallet();
    const { setVisible } = useWalletModal();
    const handleConnect = useCallback(async () => {
        if (!connected) {
            setVisible(true);
        }
    }, [setVisible, connected]);

    const handleDisconnect = useCallback(async () => {
        if (wallet) {
            await disconnect();
        }
    }, [wallet, disconnect]);

    return (
        <div>
            {connected ? (
                <div className="glass-card px-4 py-2 text-primary hover:text-white hover:bg-primary/80 transition-colors duration-200">
                    <button onClick={handleDisconnect}>
                        {truncateString({ str: publicKey.toBase58() })}
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => handleConnect()}
                    className="glass-card px-4 py-2 text-primary hover:text-white hover:bg-primary/80 transition-colors duration-200"
                >
                    Connect Wallet
                </button>
            )}
        </div>
    );
};

export default WalletConnect;
