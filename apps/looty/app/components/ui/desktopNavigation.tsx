'use client'
import React from "react";
import Link from "next/link";
import LogoIcon from "../../icons/LogoIcon";
import { usePathname } from 'next/navigation'
import { signIn, signOut } from "next-auth/react"
// import { ethers } from "ethers";
// import dayjs from "dayjs";
// import { useSession } from "next-auth/react";
// import { useRouter } from 'next/navigation'


// import { signOut, useSession } from "next-auth/react";
// async function onSignInWithCrypto() {
//     try {
//         if (!window.ethereum) {
//             window.alert("Please install MetaMask first.");
//             return;
//         }

//         // Get the wallet provider, the signer and address
//         const provider = new ethers.BrowserProvider(window.ethereum);
//         const signer = await provider.getSigner();
//         const publicAddress = await signer.getAddress();

//         // Sign the received nonce
//         const signedNonce = await signer.signMessage(dayjs().unix().toString());

//         // Use NextAuth to sign in with our address and the nonce
//         await signIn("crypto", {
//             publicAddress,
//             signedNonce,
//             callbackUrl: "/mint",
//         });
//     } catch {
//         window.alert("Error with signing, please try again.");
//     }
// }


export const DesktopNavigation = () => {
    // const router = useRouter();
    const pathName = usePathname();
    // const { status } = useSession({
    //     required: true,
    //     onUnauthenticated() {
    //         router.push("/auth");
    //     },
    // });

    // if (status !== "authenticated") return null;

    // const { status, data } = useSession({
    //     required: true,
    // });




    const highlightNavLinks = (path: string) => {
        if (pathName === path) {
            return 'text-[#b73fff]'
        } else {
            return 'text-neutral-50 hover:text-[#B73FFF]'
        }
    }


    // This function requests a nonce then signs it, proving that
    //  the user owns the public address they are using

    return (
        <>
            <div className="fixed w-full flex bg-[#1B142E] z-40">
                <div className="flex w-full items-center justify-center my-6">
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
                        <div className='flex items-center justify-end'>
                            {/* <div className="flex w-full border border-[#B73FFF] rounded-3xl"> */}
                            {/* <WalletMultiButtonDynamic /> */}
                            {/* <ConnectWallet
                                    theme={darkTheme({
                                        colors: {
                                            accentText: "#B73FFF",
                                            accentButtonBg: "#B73FFF",
                                        },
                                    })}
                                    modalSize={"wide"}
                                    welcomeScreen={{ title: "Welcome to Looty", subtitle: "Connect your wallet to continue", img: { src: 'https://ik.imagekit.io/nqz2h82e3/Group%20266.png?updatedAt=1702045973913', width: 100 }, }}
                                    modalTitleIconUrl={""}
                                /> */}
                            {/* <Link href={'/api/auth/callback/twitter'} className="flex w-fit h-fit px-8 justify-center items-center py-3 border rounded-xl border-[#B73FFF] text-[#FAFAFA] whitespace-nowrap">
                                Connect wallet
                            </Link> */}
                            {/* {status ? */}
                            {true ?
                                <span className="flex w-fit h-fit px-8 justify-center items-center py-3 border rounded-xl border-[#B73FFF] text-[#FAFAFA] whitespace-nowrap">
                                    <button onClick={() => signOut()}>Log out</button>
                                </span>
                                :
                                <button
                                    onClick={() => signIn('twitter')}
                                    className="flex w-fit h-fit px-8 justify-center items-center py-3 border rounded-xl border-[#B73FFF] text-[#FAFAFA] whitespace-nowrap">
                                    Connect wallet
                                </button>}
                        </div>
                    </div>
                </div>
                {/* divider line */}
                <div className="absolute w-full h-[4px] bg-[#201935] top-[95px]"></div>
            </div >
        </>
    );
};

export default DesktopNavigation;