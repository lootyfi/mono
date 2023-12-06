"use client"

import { ColumnDef } from "@tanstack/react-table"
import Image, { StaticImageData } from "next/image"
import { formatDate } from "../lib/utils"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Projects = {
    organizationId: string
    id: string
    projectName: string
    image: string | StaticImageData
    rewardsNumber: string
    maxMintPrice: string
    mintMintPrice: string
    stepMintPrice: string
    keysMinted: string
    remainingTime: string
}

export const columns: ColumnDef<Projects>[] = [
    {
        accessorKey: "projectName",
        header: () => <div className="text-left font-normal">Project</div>,
        cell: ({ row }) => {
            const project = row.original

            return (
                <div className="flex items-center gap-4">
                    <Image
                        src={project.image}
                        alt={project.projectName}
                        width={100}
                        height={100}
                        className="rounded-2xl mr-2 w-[65px] h-[65px]"
                    />
                    <div className="text-2xl">
                        <div className="font-semibold">{project.projectName}</div>
                        <div className="text-xs opacity-60 flex items-center gap-2">Show Rewards
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.75" y="0.75" width="13.5" height="13.5" rx="6.75" stroke="#887299" stroke-width="1.5" />
                                <path d="M7.09234 11.0569L10.5615 7.58775M10.5615 7.58775L7.09234 4.11857M10.5615 7.58775L3.62316 7.58775" stroke="#887299" stroke-width="2" stroke-linejoin="round" />
                            </svg>

                        </div>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "rewardsNumber",
        header: () => <div className="text-left font-normal">Rewards number</div>,
        cell: ({ row }) => {
            const rewards = row.original.rewardsNumber;
            return <div className="text-left font-semibold text-2xl">{rewards}</div>
        }
    },
    {
        accessorKey: "maxMintPrice",
        header: () => <div className="text-left">Max Mint Price</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("maxMintPrice"))

            return <div className="flex flex-col gap-1">
                <div className="text-left font-semibold text-2xl flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                        <path d="M15.9849 11.6586C16.5067 10.7572 17.3488 10.7572 17.8707 11.6586L21.1203 17.3633C21.6422 18.2647 21.2152 19 20.1715 19H13.6247C12.5929 19 12.1659 18.2647 12.6759 17.3633L15.9849 11.6586ZM9.699 0.67603C10.2208 -0.225343 11.0511 -0.225343 11.5729 0.67603L12.2964 1.98065L14.0042 4.98127C14.4193 5.83521 14.4193 6.84332 14.0042 7.69725L8.27578 17.6242C7.75393 18.4307 6.88814 18.9407 5.92747 19H1.17154C0.12784 19 -0.299126 18.2765 0.222721 17.3633L9.699 0.67603Z" fill="white" />
                    </svg>
                    {amount}
                </div>
                <div className="text-xs opacity-60 flex items-center gap-2">Minimum mint price: 2.79 AVAX</div>
            </div>
        },
    },
    {
        accessorKey: "keysMinted",
        header: () => <div className="text-left font-normal">Keys Minted</div>,
        cell: ({ row }) => {
            const keys = row.original.keysMinted;
            return <div className="text-left font-semibold text-[#53F493] text-2xl">{keys}</div>
        }
    },
    {
        accessorKey: "remainingTime",
        header: () => <div className="text-left font-normal">Remaining Time</div>,
        cell: ({ row }) => {
            const time = row.original.remainingTime;
            const formatted = formatDate(time);
            return <div className="text-left font-semibold text-2xl">{formatted}</div>
        }
    },
    // last column save for cta button
    {
        id: "actions",
        cell: ({ row }) => {
            return (
                <button className="text-white text-[18px] bg-gradient-to-r from-[#D630FF] to-[#B130FF] rounded-2xl px-10 py-5">
                    Mint
                </button>
            )
        },
    },
]
