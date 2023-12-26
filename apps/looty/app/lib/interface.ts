import { StaticImageData } from "next/image"

export interface MintProps {
    data?: IProject[]
}
export type IProject = {
    organizationId: string
    id: string
    name: string
    projectName: string
    image: string | StaticImageData
    rewardsNumber: string
    maxMintPrice: string
    mintMintPrice: string
    stepMintPrice: string
    keysMinted: string
    remainingTime: string
}
