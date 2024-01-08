import React from 'react'
import { IProject } from '../../lib/interface'
import Image from 'next/image'
import { countToTheDate } from '../../lib/utils'
// import { formatDate } from '../../lib/utils'

interface IProjectData {
    data: IProject
}

const ProjectMint = (data: IProjectData) => {
    console.log(data.data.mintConfig, 'data?.mintConfig');

    return (
        <div className='flex w-full justify-between mt-24 mx-auto max-w-7xl gap-8'>
            <div className='flex flex-col text-start'>
                <p className='flex font-sans text-[#887299] w-full justify-start uppercase font-light'>
                    Project
                </p>
                <div className="flex flex-col gap-4">
                    <h1 className='text-[70px] text-white'>{data?.data?.name}</h1>
                    <Image src={data?.data?.image} width={500} height={500} />
                </div>
            </div>
            <div className='flex flex-col text-start bg-[#201935] py-8 px-5 rounded-lg max-w-2xl w-full'>
                <p className='flex font-sans text-[#887299] w-full justify-start uppercase font-light'>
                    Mint stages
                </p>
                {data?.data?.mintConfig.map((conf, index) => (
                    <>
                        <div className='flex items-center gap-6 w-full py-2'>
                            <div className='flex w-full justify-between items-center gap-4 border-2 border-[#2A2144] p-2 text-white rounded-lg'>
                                <div className='flex gap-4 h-fit items-center'>
                                    <div className='flex items-center gap-2 bg-[#2A2144] py-4 px-5 rounded-lg'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.2499 8.51091V5.24549C13.2499 3.85314 12.6967 2.51782 11.7122 1.53327C10.7277 0.548729 9.39234 -0.00439453 7.99999 -0.00439453C6.60763 -0.00439453 5.27231 0.548729 4.28777 1.53327C3.30322 2.51782 2.7501 3.85314 2.7501 5.24549V8.51091C1.73722 9.54467 1.0521 10.8545 0.780623 12.2761C0.509146 13.6976 0.663367 15.1677 1.22403 16.502C1.78469 17.8363 2.72681 18.9753 3.93222 19.7762C5.13763 20.5772 6.55271 21.0046 7.99999 21.0046C9.44726 21.0046 10.8623 20.5772 12.0678 19.7762C13.2732 18.9753 14.2153 17.8363 14.7759 16.502C15.3366 15.1677 15.4908 13.6976 15.2193 12.2761C14.9479 10.8545 14.2628 9.54467 13.2499 8.51091ZM7.99999 2.09556C8.8354 2.09556 9.63662 2.42741 10.2273 3.01814C10.8181 3.60886 11.1499 4.41008 11.1499 5.24549V7.01477C10.1673 6.54131 9.09068 6.29534 7.99999 6.29534C6.90929 6.29534 5.83263 6.54131 4.85005 7.01477V5.24549C4.85005 4.41008 5.1819 3.60886 5.77263 3.01814C6.36336 2.42741 7.16457 2.09556 7.99999 2.09556ZM7.99999 18.8952C6.96166 18.8952 5.94666 18.5873 5.08333 18.0104C4.21999 17.4336 3.54709 16.6137 3.14974 15.6544C2.75239 14.6951 2.6484 13.6395 2.85097 12.6211C3.05354 11.6027 3.55356 10.6673 4.28777 9.93309C5.02198 9.19888 5.95739 8.69886 6.97577 8.4963C7.99415 8.29373 9.04971 8.39771 10.009 8.79506C10.9683 9.19241 11.7882 9.86531 12.3651 10.7287C12.942 11.592 13.2499 12.607 13.2499 13.6453C13.2482 15.0372 12.6945 16.3716 11.7103 17.3557C10.7262 18.3399 9.39183 18.8935 7.99999 18.8952Z" fill="#FAFAFA" />
                                            <path d="M8.00002 16.7954C8.86984 16.7954 9.57498 16.0903 9.57498 15.2205C9.57498 14.3506 8.86984 13.6455 8.00002 13.6455C7.13019 13.6455 6.42505 14.3506 6.42505 15.2205C6.42505 16.0903 7.13019 16.7954 8.00002 16.7954Z" fill="#FAFAFA" />
                                        </svg>
                                        <span>{conf.name}</span>
                                    </div>
                                    <div className='border-[#2A2144]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none">
                                            <rect x="1.19971" y="0.5" width="32" height="32" rx="9.5" stroke="#2A2144" />
                                            <path d="M10.4167 13.6666H21.7501V17.9166H23.1667V11.5416C23.1667 11.1659 23.0175 10.8056 22.7518 10.5399C22.4861 10.2742 22.1258 10.125 21.7501 10.125H21.0417V8H19.6251V11.5416H18.9167V10.125H13.9584V8H12.5417V11.5416H11.8333V10.125H10.4167C10.0409 10.125 9.68061 10.2742 9.41493 10.5399C9.14926 10.8056 9 11.1659 9 11.5416V20.7499C9 21.1256 9.14926 21.4859 9.41493 21.7516C9.68061 22.0172 10.0409 22.1665 10.4167 22.1665H18.9167V20.7499H10.4167V13.6666Z" fill="#FAFAFA" />
                                            <path d="M26 21.4585H23.875V19.3335H22.4583V21.4585H20.3333V22.8751H22.4583V25.0001H23.875V22.8751H26V21.4585Z" fill="#FAFAFA" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex items-center gap-2 bg-[#1B142E] py-4 px-5 rounded-lg'>
                                        <div className='flex items-center gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                                <path d="M5.5 0.5C4.4122 0.5 3.34884 0.822539 2.44437 1.42689C1.5399 2.03123 0.834945 2.89028 0.418663 3.89528C0.00238045 4.90027 -0.106534 6.00613 0.105684 7.07303C0.317903 8.13992 0.841726 9.11993 1.61092 9.88912C2.3801 10.6583 3.36011 11.1821 4.42701 11.3943C5.49391 11.6065 6.59977 11.4976 7.60476 11.0814C8.60975 10.6651 9.46873 9.9601 10.0731 9.05563C10.6774 8.15116 11 7.0878 11 6C10.9984 4.54181 10.4184 3.14377 9.38729 2.11267C8.35619 1.08157 6.95819 0.501618 5.5 0.5ZM5.5 10.2778C4.65393 10.2778 3.82688 10.0269 3.1234 9.55686C2.41992 9.08681 1.87162 8.41873 1.54784 7.63707C1.22407 6.85541 1.13935 5.99528 1.30441 5.16547C1.46947 4.33566 1.8769 3.57344 2.47516 2.97518C3.07342 2.37692 3.83564 1.96949 4.66545 1.80443C5.49525 1.63937 6.35536 1.72407 7.13703 2.04785C7.91869 2.37162 8.58679 2.91989 9.05684 3.62337C9.52689 4.32684 9.77778 5.15394 9.77778 6C9.77648 7.13414 9.32538 8.22145 8.52342 9.02341C7.72146 9.82537 6.63414 10.2765 5.5 10.2778Z" fill="#FAFAFA" />
                                                <path d="M6.11077 2.94434H4.88855V6.32686L6.99383 7.73237L7.67154 6.71552L6.11016 5.67658L6.11077 2.94434Z" fill="#FAFAFA" />
                                            </svg>
                                            <span className='uppercase text-[#887299]'>Starts in:</span>
                                        </div>
                                        {/* <span>{countToTheDate(conf.endingAt)}</span> */}
                                        <span>12d 23h 34m 19s</span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center gap-2 text-[#887299]'>
                                            <span className='uppercase'>Mint price:</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                                <path d="M11.6355 7.9769C11.9925 7.36018 12.5687 7.36018 12.9257 7.9769L15.1492 11.8801C15.5062 12.4969 15.2141 13 14.5 13H10.0206C9.31461 13 9.02247 12.4969 9.37141 11.8801L11.6355 7.9769ZM7.33458 0.462547C7.69164 -0.154182 8.25968 -0.154182 8.61673 0.462547L9.11174 1.35518L10.2803 3.40824C10.5643 3.99251 10.5643 4.68227 10.2803 5.26654L6.3608 12.0587C6.00375 12.6105 5.41136 12.9594 4.75406 13H1.5C0.785895 13 0.49376 12.505 0.850813 11.8801L7.33458 0.462547Z" fill="white" />
                                            </svg>
                                            <span className='text-white'>{conf.mintPrice}</span>
                                        </div>
                                        <div className='flex items-center gap-2 text-[#887299]'>
                                            <span className='uppercase'>Limit:</span>
                                            <span className='text-white'>{conf.maxPurchase}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>

    )
}

export default ProjectMint