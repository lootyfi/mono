'use client'

import React, { useCallback } from "react";
// import dynamic from "next/dynamic";
import Link from "next/link";
import LogoIcon from "../../icons/LogoIcon";
import { usePathname } from 'next/navigation'
import {
    ConnectWallet,
    darkTheme,
} from "@thirdweb-dev/react";

// const WalletMultiButtonDynamic = dynamic(
//     async () =>
//         (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
//     { ssr: false }
// );

export default function Navbar() {
    const router = usePathname();

    const highlightNavLinks = useCallback((path: string) => {
        if (router === path) {
            return 'text-[#b73fff]'
        } else {
            return 'text-neutral-50'
        }
    }, [router])

    return (
        <div className="fixed w-full flex bg-[#1B142E]">
            <div className="flex w-full items-center justify-center my-12">
                <div className="flex w-full max-w-7xl">
                    <div className="flex w-full">
                        <div className='flex justify-start mr-[70px]'>
                            <LogoIcon className="flex w-full h-[45px]" />
                        </div>
                        <div className="px-[15px] py-[5px] relative flex-[0_0_auto] inline-flex items-center justify-center">
                            <Link href={'/mint'} className={`relative w-fit mt-[-1.00px] [font-family:'Open_Sans-ExtraBold',Helvetica] font-extrabold ${highlightNavLinks('/mint')} text-[18px] text-center tracking-[0] leading-[normal]`}>
                                MINT
                            </Link>
                        </div>
                        <div className="px-[15px] py-[5px] relative flex-[0_0_auto] inline-flex items-center justify-center">
                            <Link href={'/open'} className={`relative w-fit mt-[-1.00px] [font-family:'Open_Sans-ExtraBold',Helvetica] font-extrabold ${highlightNavLinks('/open')} text-[18px] text-center tracking-[0] leading-[normal]`}>
                                OPEN THE BOX
                            </Link>
                        </div>
                        <div className="px-[15px] py-[5px] relative flex-[0_0_auto] inline-flex items-center justify-center">
                            <Link href={'/rewards'} className={`relative w-fit mt-[-1.00px] [font-family:'Open_Sans-ExtraBold',Helvetica] font-extrabold ${highlightNavLinks('/rewards')} text-[18px] text-center tracking-[0] leading-[normal]`}>
                                REWARDS
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center justify-end'>
                        {/* <div className="flex w-full border border-[#B73FFF] rounded-3xl"> */}
                        {/* <WalletMultiButtonDynamic /> */}
                        <ConnectWallet
                            theme={darkTheme({
                                colors: {
                                    accentText: "#B73FFF",
                                    accentButtonBg: "#B73FFF",
                                },
                            })}
                            modalSize={"wide"}
                            welcomeScreen={{ title: "Welcome to Looty", subtitle: "Connect your wallet to continue", img: { src: 'https://ik.imagekit.io/nqz2h82e3/Group%20266.png?updatedAt=1702045973913', width: 100 }, }}
                            modalTitleIconUrl={""}
                        />
                        {/* </div> */}
                    </div>
                </div>
            </div>
            {/* divider line */}
            <div className="absolute w-full h-[4px] bg-[#201935] top-[145px]"></div>
        </div >
    );
};
