"use client"

import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import { formatDate } from "../../lib/utils"
import { IProject } from "../../lib/interface"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<IProject>[] = [
    {
        accessorKey: "projectName",
        header: () => <div className="text-left font-normal">Project</div>,
        cell: ({ row }) => {
            const project = row.original;
            return (
                <div className="flex items-center gap-4">
                    <Image
                        src={project.logo}
                        alt={project.name}
                        width={100}
                        height={100}
                        className="rounded-2xl mr-2 w-[65px] h-[65px]"
                    />
                    <div className="text-2xl">
                        <div className="font-semibold">{project.name}</div>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "totalSupply",
        header: () => <div className="text-left font-normal">Rewards inside</div>,
        cell: ({ row }) => {
            const rewards = row.original.totalSupply;
            return <div className="text-left font-semibold text-2xl">{rewards}</div>
        }
    },
    {
        accessorKey: "mintPrice",
        header: () => <div className="text-left">Mint Price</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("mintPrice"))

            return <div className="flex flex-col gap-1">
                <div className="text-left font-semibold text-2xl flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                        <path d="M15.9849 11.6586C16.5067 10.7572 17.3488 10.7572 17.8707 11.6586L21.1203 17.3633C21.6422 18.2647 21.2152 19 20.1715 19H13.6247C12.5929 19 12.1659 18.2647 12.6759 17.3633L15.9849 11.6586ZM9.699 0.67603C10.2208 -0.225343 11.0511 -0.225343 11.5729 0.67603L12.2964 1.98065L14.0042 4.98127C14.4193 5.83521 14.4193 6.84332 14.0042 7.69725L8.27578 17.6242C7.75393 18.4307 6.88814 18.9407 5.92747 19H1.17154C0.12784 19 -0.299126 18.2765 0.222721 17.3633L9.699 0.67603Z" fill="white" />
                    </svg>
                    {amount}
                </div>
                {/* <div className="text-xs opacity-60 flex items-center gap-2">Minimum mint price: 2.79 AVAX</div> */}
            </div>
        },
    },
    {
        accessorKey: "remainingSupply",
        header: () => <div className="text-left font-normal">Keys Minted</div>,
        cell: ({ row }) => {
            const keys = row.original.remainingSupply;
            return <div className="text-left font-semibold text-[#53F493] text-2xl">{keys}</div>
        }
    },
    {
        accessorKey: "endingAt",
        header: () => <div className="text-left font-normal">Remaining Time</div>,
        cell: ({ row }) => {
            const time = row.original.endingAt;
            const formatted = formatDate(time);
            return <div className="text-left font-semibold text-2xl">{formatted}</div>
        }
    },
    // last column save for cta button
    {
        id: "actions",
        cell: ({ row }) => {
            return (
                <button className="text-white text-[18px] bg-gradient-to-r from-[#D630FF] to-[#B130FF] hover:outline outline-4 outline-white rounded-2xl px-10 py-5"
                    onClick={(e) => e.stopPropagation()}
                >
                    Mint
                </button>
            )
        },
    },
]
