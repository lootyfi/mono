import { StaticImageData } from "next/image"

export interface MintProps {
    data?: Projects[]
}
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
