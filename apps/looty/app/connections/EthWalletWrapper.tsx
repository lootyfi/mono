'use client'
import {
    ThirdwebProvider,
    // ConnectWsallet,
    metamaskWallet,
    coinbaseWallet,
    walletConnect,
    phantomWallet,
    // darkTheme,
} from "@thirdweb-dev/react";

export default function EthWalletWrapper({ children }: { children: React.ReactElement }) {
    return (
        <ThirdwebProvider
            activeChain="mumbai"
            clientId="4d3bcb1eee31f16eeac62baa82dc152e"
            supportedWallets={[
                metamaskWallet(),
                coinbaseWallet({ recommended: true }),
                walletConnect(),
                phantomWallet(),
            ]}
        >
            {children}
        </ThirdwebProvider>
    );
}
