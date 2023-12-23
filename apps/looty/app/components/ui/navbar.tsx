'use client'
import React, { useEffect, useMemo } from "react";

// import {
//     ConnectWallet,
//     darkTheme,

// } from "@thirdweb-dev/react";
import MobileNavigation from "./mobileNavigation";
import useMediaQuery from "../../hooks/useDevice";
import DesktopNavigation from "./desktopNavigation";

// const WalletMultiButtonDynamic = dynamic(
//     async () =>
//         (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
//     { ssr: false }
// );

export const Navbar = () => {
    const isSmallDevice = useMediaQuery();

    useEffect(() => {
        console.log('isSmallDevice', isSmallDevice)
    }, [isSmallDevice])

    const renderNavbar = useMemo(() => {
        return (
            isSmallDevice && <MobileNavigation /> ||
            !isSmallDevice && <DesktopNavigation />
        )
    }, [isSmallDevice])

    return (
        <>
            {renderNavbar}
        </>
    );
};

export default Navbar;