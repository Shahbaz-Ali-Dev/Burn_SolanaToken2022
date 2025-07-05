import { Connection } from "@solana/web3.js";

const MODE = import.meta.env.VITE_MODE;
const MIANNET_RPC = import.meta.env.VITE_RPC_MAINNET;
const DEVNET_RPC = import.meta.env.VITE_RPC_DEVNET;
const connection =
    MODE === "production"
        ? new Connection(MIANNET_RPC)
        : new Connection(DEVNET_RPC);

export { connection, MODE };
