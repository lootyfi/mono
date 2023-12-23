import React from 'react'
import Link from 'next/link'
import LogoIcon from '../../icons/LogoIcon'
import DiscordIcon from '../../icons/DiscordIcon';
import XIcon from '../../icons/XIcon';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='static bottom-0 flex w-full mx-auto items-center justify-between bg-[#332950] py-10'>
            <div className='flex w-full items-center justify-center'>
                <div className='flex flex-col lg:flex-row w-full max-w-7xl justify-between gap-4'>
                    <div className='flex items-center justify-center'>
                        <div className='flex items-center'>
                            <Link href={'/'} className={`relative w-fit  text-[18px] text-center tracking-[0] leading-[normal]`}>
                                <LogoIcon className="flex w-full h-full" />
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 justify-center'>
                        <Link href={'https://twitter.com/looty_fi'} target='_blank' className={`relative w-fit  text-[18px] text-center tracking-[0] leading-[normal]`}>
                            <DiscordIcon className='cursor-pointer' />
                        </Link>
                        <Link href={'https://twitter.com/looty_fi'} target='_blank' className={`relative w-fit  text-[18px] text-center tracking-[0] leading-[normal]`}>
                            <XIcon className='cursor-pointer' />
                        </Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="27" viewBox="0 0 2 27" fill="none">
                            <path d="M1.36914 0V27" stroke="#D7CCE0" />
                        </svg>
                        <span className='font-normal font-sans text-[#D7CCE0]'>© {currentYear} Looty. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer