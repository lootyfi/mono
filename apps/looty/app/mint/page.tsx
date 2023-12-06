import React from 'react'
import { DataTable } from '../projects/dataTable'
import { Projects, columns } from '../projects/columns'
// import Table from '../components/tables'

// const data = [
//     {
//         id: '1',
//         projectName: 'Looty',
//         image: 'https://picsum.photos/200',
//         rewardsNumber: '1000',
//         maxMintPrice: '0.1',
//         keysMinted: '0',
//         remainingTime: '1d 2h 3m 4s'
//     },
//     {
//         id: '2',
//         projectName: 'Looty',
//         image: 'https://picsum.photos/200',
//         rewardsNumber: '1000',
//         maxMintPrice: '0.1',
//         keysMinted: '0',
//         remainingTime: '1d 2h 3m 4s'
//     },
//     {
//         id: '3',
//         projectName: 'Looty',
//         image: 'https://picsum.photos/200',
//         rewardsNumber: '1000',
//         maxMintPrice: '0.1',
//         keysMinted: '0',
//         remainingTime: '1d 2h 3m 4s'
//     },
//     {
//         id: '4',
//         projectName: 'Looty',
//         image: 'https://picsum.photos/200',
//         rewardsNumber: '1000',
//         maxMintPrice: '0.1',
//         keysMinted: '0',
//         remainingTime: '1d 2h 3m 4s'
//     },
//     {
//         id: '5',
//         projectName: 'Looty',
//         image: 'https://picsum.photos/200',
//         rewardsNumber: '1000',
//         maxMintPrice: '0.1',
//         keysMinted: '0',
//         remainingTime: '1d 2h 3m 4s'
//     },
//     {
//         id: '6',
//         projectName: 'Looty',
//         image: 'https://picsum.photos/200',
//         rewardsNumber: '1000',
//         maxMintPrice: '0.1',
//         keysMinted: '0',
//         remainingTime: '1d 2h 3m 4s'
//     },
//     {
//         id: '7',
//         projectName: 'Looty',
//         image: 'https://picsum.photos/200',
//         rewardsNumber: '1000',
//         maxMintPrice: '0.1',
//         keysMinted: '0',
//         remainingTime: '1d 2h 3m 4s'
//     },
// ]

async function getData(): Promise<Projects[]> {
    // Fetch data from your API here.
    return [
        {
            // organizationId: random uuid,
            organizationId: "uuid-1",
            id: "uuid-1",
            projectName: "Looty",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGjyoWRac_X8CyGRsCVtJxbwgO6KzbD6VdL0MQyfBnw&s",
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
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGjyoWRac_X8CyGRsCVtJxbwgO6KzbD6VdL0MQyfBnw&s",
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
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGjyoWRac_X8CyGRsCVtJxbwgO6KzbD6VdL0MQyfBnw&s",
            rewardsNumber: "10,000",
            maxMintPrice: "0.1",
            mintMintPrice: "0.1",
            stepMintPrice: "0.1",
            keysMinted: "800",
            remainingTime: '2023-12-23T23:30:18.000Z',
        }
    ]
}

const Mint = async () => {
    const data = await getData()
    return (
        <div className='flex flex-col'>
            <div className='flex w-full'>
                <div className='flex flex-col w-full justify-center mt-20 mx-52 text-center'>
                    <h1 className='text-[70px] text-white '>Mint your <span className='text-[#B73FFF]'>keys</span> to open the box</h1>
                    <p className='flex font-sans text-[#D7CCE0] w-full justify-center mt-4'>
                        Participate in Auction to mint your keys to Open the box with rewards. You can win special rewards like tickets, presale spots, tshirts, water bottles, VIP tickets, access to DJ stage, pre-access to recordings, special tours, special packages and special events.
                    </p>
                </div>
            </div>
            <div className="container mx-auto py-10 px-32">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    )
}

export default Mint