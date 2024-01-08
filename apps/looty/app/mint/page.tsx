import React, { Suspense, use } from 'react'
import MintContent from '../components/projects/projectList'
import { IProject } from '../lib/interface'

async function getData(): Promise<IProject[]> {
    try {
        const response = await fetch('http://localhost:3000/api/project/get', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        });
        console.log(response, 'response');

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}



export default function Page() {
    const data = use(getData());

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='flex flex-col w-full items-center justify-center'>
                <div className='flex w-full mt-24 mx-auto max-w-7xl'>
                    <div className='flex flex-col w-full justify-center text-center items-center'>
                        <h1 className='text-[70px] text-white '>Mint your <span className='text-[#B73FFF]'>keys</span> to open the box</h1>
                        <p className='flex font-sans text-[#D7CCE0] w-full justify-center mt-4 text-[21px] font-normal'>
                            Participate in Auction to mint your keys to Open the box with rewards. You can win special rewards like tickets, presale spots, <br /> tshirts, water bottles, VIP tickets, access to DJ stage, pre-access to recordings, special tours, special packages and special events.
                        </p>
                    </div>
                </div>
                <div className="container mx-auto py-10 max-w-7xl">
                    <MintContent projectsData={data} />
                </div>
            </div>
        </Suspense>
    )
}