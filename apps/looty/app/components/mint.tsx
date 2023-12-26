'use client'
import React, { Suspense } from 'react'
import { Skeleton } from './ui/skeleton'
import { columns } from './projects/columns'
import { DataTable } from './projects/dataTable'
import { IProject } from '../lib/interface'
import { useRouter } from "next/navigation";


export function MintContent({ projectsData }: { projectsData: IProject[] }): JSX.Element {
    const router = useRouter();

    const onRowClick = (row: IProject) => {
        // eslint-disable-next-line
        router.push(`mint/${row?.name}`)
    }

    return (
        <div>
            <Suspense fallback={<Skeleton />}>
                <DataTable columns={columns} data={projectsData} onRowClick={(row) => onRowClick(row)} />
            </Suspense>
        </div>
    )
}

export default MintContent;