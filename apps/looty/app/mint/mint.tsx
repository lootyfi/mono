'use client'
import React, { FC, Suspense } from 'react'
import { Skeleton } from '../components/ui/skeleton'
import { columns } from '../projects/columns'
import { DataTable } from '../projects/dataTable'
import { MintProps } from './interface'
import { Drawer, DrawerDirection } from '../components/ui/drawer'


export const MintContent: FC<MintProps> = ({ projectsData }) => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);



    console.log(isDrawerOpen, 'isDrawerOpen');


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