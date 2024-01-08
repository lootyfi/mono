import { redirect } from 'next/navigation'
import React from 'react'

function Rewards() {
    redirect('/coming-soon')
    return (
        <div className='flex w-full'>
            <div className='flex flex-col w-full justify-center mt-24 mx-auto max-w-7xl text-center'>
                <h1 className='text-[70px] text-white '>Your <span className='text-[#B73FFF]'>rewards</span></h1>
                <p className='flex font-sans text-[#D7CCE0] w-full justify-center mt-4'>
                    You can find all your rewards on this page.
                </p>
            </div>
        </div>
    )
}

export default Rewards