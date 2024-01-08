'use client'
import React, { Suspense } from 'react'
import { useRouter } from "next/navigation";
import { IProject } from '../../lib/interface';
import { Skeleton } from '../ui/skeleton';
import { columns } from './columns';
import { DataTable } from './dataTable';


export function MintContent({ projectsData }: { projectsData: IProject[] }): JSX.Element {
    const router = useRouter();

    const onRowClick = (row: IProject) => {
        router.push(`mint/${row?._id}`)
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