'use client'
import React, { Suspense } from 'react'
import { Skeleton } from './ui/skeleton'
import { columns } from './projects/columns'
import { DataTable } from './projects/dataTable'
import { Drawer, DrawerDirection } from './ui/drawer'
import { Projects } from '../lib/interface'


export function MintContent({ projectsData }: { projectsData: Projects[] }): JSX.Element {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const onRowClick = (row: unknown) => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    return (
        <div>
            <Suspense fallback={<Skeleton />}>
                <DataTable columns={columns} data={projectsData} onRowClick={(row) => onRowClick(row)} />
            </Suspense>
            <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} direction={DrawerDirection.Left}>
                <span>drawer</span>
            </Drawer>
        </div>
    )
}

export default MintContent;