import React from 'react'
import { Projects } from '../projects/columns'
import MintContent from './mint'

// import Table from '../components/tables'

async function getData(): Promise<Projects[]> {
    // Fetch data from your API here.
    return [
        {
            // organizationId: random uuid,
            organizationId: "uuid-1",
            id: "uuid-1",
            projectName: "Looty",
            image: "https://ik.imagekit.io/nqz2h82e3/Group%20266.png?updatedAt=1702045973913",
            rewardsNumber: "10,000",
            maxMintPrice: "0.1",
            mintMintPrice: "0.1",
            stepMintPrice: "0.1",
            keysMinted: "1350",
            remainingTime: '2024-01-05T23:30:18.000Z',
        },
        {
            organizationId: "uuid-2",
            id: "uuid-2",
            projectName: "Exit Festival",
            image: "https://ik.imagekit.io/nqz2h82e3/Rectangle%20112%20(5).png?updatedAt=1702045973393",
            rewardsNumber: "10,000",
            maxMintPrice: "0.1",
            mintMintPrice: "0.1",
            stepMintPrice: "0.1",
            keysMinted: "230",
            remainingTime: '2024-01-05T23:30:18.000Z',
        },
        {
            organizationId: "uuid-2",
            id: "uuid-2",
            projectName: "Ultra Music Festival",
            image: "https://ik.imagekit.io/nqz2h82e3/Rectangle%20111.png?updatedAt=1702045973570",
            rewardsNumber: "10,000",
            maxMintPrice: "0.1",
            mintMintPrice: "0.1",
            stepMintPrice: "0.1",
            keysMinted: "800",
            remainingTime: '2023-12-23T23:30:18.000Z',
        },
        {
            organizationId: "uuid-2",
            id: "uuid-2",
            projectName: "Arsenal FC",
            image: "https://ik.imagekit.io/nqz2h82e3/Rectangle%20112%20(4).png?updatedAt=1702045973529",
            rewardsNumber: "10,000",
            maxMintPrice: "0.15",
            mintMintPrice: "0.1",
            stepMintPrice: "0.1",
            keysMinted: "534",
            remainingTime: '2023-12-18T23:30:18.000Z',
        },
    ]
}


const Page = async () => {
    const data = await getData()

    // if data is in pending promise show skeleton
    // if data is in error state show error message


    return (
        <div className='flex flex-col w-full items-center justify-center overflow-auto'>
            <div className='flex w-full mt-60 mx-auto max-w-7xl'>
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
    )
}

export default Page