import React, { useState } from 'react'
import '../global.css';
import Link from 'next/link';
import XIcon from '../icons/XIcon';


function Comingsoon() {
    return (
        <div className='flex flex-col w-full h-full items-center justify-center gap-8 mt-12 lg:mx-auto lg:max-w-7xl'>
            <div className='flex flex-col w-full h-full justify-center items-center mt-0 lg:mt-40 px-8 lg:px-0'>
                <div className='flex items-start justify-start'>
                    <h1 className='flex items-baseline justify-center flex-wrap text-[45px] lg:text-[70px] text-white gap-1'>
                        We are coming
                        <span className='text-[#B73FFF]'>soon</span>
                        <div className="progress"></div>
                        <div className="progress"></div>
                        <div className="progress"></div>
                    </h1>
                </div>
                <p className='flex font-sans text-[#D7CCE0] w-full h-full justify-center mt-4'>
                    If you want to get notified when the website goes live, subscribe to our mailing list.
                </p>
            </div>

            <div className='flex w-full justify-center items-center px-8 lg:px-0'>
                <Link href={'https://twitter.com/looty_fi'} target='_blank' className='flex gap-4 w-fit items-center h-12 bg-gradient-to-r from-[#D630FF] to-[#B130FF] hover:outline outline-4 outline-white rounded-2xl border-[1px] border-[#B73FFF]  text-[#FAFAFA] px-4 mt-4'>
                    <XIcon className='flex w-6 h-6 mr-2' />
                    <p className='flex text-[18px] font-bold text-[#FAFAFA]'>
                        Twitter
                    </p>
                </Link>
            </div>
        </div >
    )
}

export default Comingsoon