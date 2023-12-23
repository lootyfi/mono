'use client'
import React, { useEffect } from 'react'
import HamburgerIcon from '../../icons/HamburgerIcon';
import LogoIcon from '../../icons/LogoIcon';
import { Drawer, DrawerDirection } from './drawer';
import Link from 'next/link';
import DiscordIcon from '../../icons/DiscordIcon';
import XIcon from '../../icons/XIcon';
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

const MobileNavigation = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const router = usePathname();
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false)
    }, [router]);

    return (
        <div>
            <div className="w-full flex bg-[#1B142E] z-40">
                <div className="flex w-full items-center justify-center">
                    <div className="flex w-full h-full my-6 justify-between items-center">
                        <div className="flex w-1/3 justify-start items-center px-8">
                            <Link href={'/'} className={`relative w-fit  text-[18px] text-center tracking-[0] leading-[normal]`}>
                                <LogoIcon />
                            </Link>
                        </div>
                        {/* connect wallet */}
                        <div className='flex gap-4'>
                            <button className="flex w-fit h-fit px-2 justify-center items-center py-2 border rounded-xl border-[#B73FFF] text-[#FAFAFA] whitespace-nowrap">
                                Connect wallet
                            </button>
                            <div className="flex w-full justify-end items-center pr-8">
                                <div onClick={handleClick}>
                                    <motion.nav
                                        animate={!isOpen ? "open" : "closed"}
                                        variants={variants}
                                    >
                                        <HamburgerIcon />
                                    </motion.nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* divider line */}
                <div className="absolute w-full h-[4px] bg-[#201935] top-[85px]"></div>
            </div>
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} direction={DrawerDirection.Left}>
                <motion.nav
                    animate={isOpen ? "open" : "closed"}
                    variants={variants}
                >
                    <div className="flex w-full flex-col justify-between items-center">
                        <div className="flex w-full flex-col items-center justify-center text-white text-2xl gap-8">
                            <Link href={'/mint'}>
                                MINT
                            </Link>
                            <Link href={'/open'}>
                                OPEN THE BOX
                            </Link>
                            <Link href={'/rewards'}>
                                REWARDS
                            </Link>
                        </div>
                        <div className='flex justify-start items-center gap-8 py-24'>
                            <Link href={'/'} className={`relative w-fit  text-[18px] text-center tracking-[0] leading-[normal]`}>
                                <DiscordIcon className="flex w-full h-full" />
                            </Link>
                            <Link href={'/'} className={`relative w-fit  text-[18px] text-center tracking-[0] leading-[normal]`}>
                                <XIcon className='cursor-pointer' />
                            </Link>
                        </div>
                    </div>
                </motion.nav>
            </Drawer>

        </div>

    )
}


export default MobileNavigation