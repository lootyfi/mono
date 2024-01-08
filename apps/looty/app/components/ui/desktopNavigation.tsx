'use client'
import React from "react";
import Link from "next/link";
import LogoIcon from "../../icons/LogoIcon";
import { usePathname } from 'next/navigation'
import { getCsrfToken, signIn, useSession, signOut } from "next-auth/react";
import { useAccount, useSignMessage } from "wagmi";
import { SiweMessage } from "siwe";
import { useWeb3Modal } from "@web3modal/react";
import { avalanche } from "viem/chains";

import dayjs from "dayjs";
import XIcon from "../../icons/XIcon";
import Image from "next/image";

export const DesktopNavigation = () => {
    const pathName = usePathname();
    const { address, isConnected } = useAccount();
    const { open } = useWeb3Modal();
    const { signMessageAsync } = useSignMessage();

    const { status, data } = useSession({
        required: false,
    });

    console.log("status", status);
    console.log("data", data);


    const handleSign = async () => {
        if (!isConnected) open();
        try {
            const message = new SiweMessage({
                domain: window.location.host,
                uri: window.location.origin,
                version: "1",
                address: address as `0x${string}`,
                statement: process.env.NEXT_PUBLIC_SIGNIN_MESSAGE,
                nonce: await getCsrfToken(),
                chainId: avalanche.id,
            });

            const signedMessage = await signMessageAsync({
                message: message.prepareMessage(),
            });

            console.log("signedMessage", signedMessage);
            console.log("message", message);
            console.log(JSON.stringify(message));




            const response = await signIn("web3", {
                wallet: address as `0x${string}`,
                message: JSON.stringify(message),
                signedMessage,
                nonce: await getCsrfToken(),
                unixTimestamp: dayjs().unix(),
                callbackUrl: "/mint",
            });

            console.log("response", response);

            if (response?.error) {
                console.log("Error occured:", response.error);
            }

        } catch (error) {
            console.log("Error Occured", error);
        }
    };

    const handleSignOut = async () => {
        await signOut({ callbackUrl: "/" });
    };


    const highlightNavLinks = (path: string) => {
        if (pathName === path) {
            return 'text-[#b73fff]'
        } else {
            return 'text-neutral-50 hover:text-[#B73FFF]'
        }
    }



    return (
        <div className="fixed w-full flex bg-[#1B142E] z-40">
            <div className="flex w-full items-center justify-center my-3">
                <div className="flex w-full max-w-7xl">
                    <div className="flex w-full">
                        <div className='flex justify-start mr-[70px] items-center'>
                            <Link href={'/'} className={`relative w-fit  text-[18px] text-center tracking-[0] leading-[normal]`}>
                                <LogoIcon className="flex w-full h-full" />
                            </Link>
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
                    {/* todo move to separate component */}
                    <div className='flex items-center justify-end gap-4'>

                        {status === 'authenticated' ?
                            <div>
                                <span className="flex w-fit h-fit px-8 justify-center items-center py-1.5 rounded-xl bg-[#2A2144] text-[#FAFAFA] whitespace-nowrap">
                                    {address?.slice(0, 6)}...{address?.slice(-4)}
                                    <div className="w-[1px] h-[20px] bg-[#FAFAFA] mx-[10px]"></div>
                                    <button onClick={() => handleSignOut()}>Log out</button>
                                </span>
                            </div>
                            :
                            <button
                                onClick={() => handleSign()}
                                className="flex w-fit h-fit px-8 justify-center items-center py-1.5 border rounded-xl border-[#B73FFF] text-[#FAFAFA] whitespace-nowrap">
                                Connect wallet
                            </button>
                        }
                        {data?.user?.name && data?.user.image ?
                            <div
                                className="flex w-fit gap-2 h-fit px-8 justify-center items-center py-1.5 rounded-xl text-[#FAFAFA] whitespace-nowrap">
                                <span>{data?.user?.name}</span>
                                <Image src={data?.user?.image} width={32} height={32} alt="test" className="rounded-lg " />
                            </div>
                            :
                            <button
                                onClick={() => signIn('twitter')}
                                className="flex w-fit gap-2 h-fit px-8 justify-center items-center py-1.5 border rounded-xl border-[#D7CCE0] text-[#FAFAFA] whitespace-nowrap">
                                Connect <XIcon className='flex w-4 h-4' />
                            </button>

                        }

                    </div>
                </div>
            </div>
            {/* divider line */}
            <div className="absolute w-full h-[4px] bg-[#201935] top-[60px]"></div>
        </div >
    );
};

export default DesktopNavigation;