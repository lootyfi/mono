import { StaticImageData } from "next/image"

export interface MintProps {
    data?: IProject[]
}

export interface IMintConfig {
    mintPrice: number;
    maxPurchase: number;
    name: string;
    startingAt: string;
    endingAt: string;
    eligibleAddresses: string[];
}

export interface IProject {
    _id: string;
    name: string;
    description: string;
    image: StaticImageData;
    logo: StaticImageData;
    organization: string;
    keysContractAddress: string;
    boxesContractAddress: string;
    chain: string;
    totalSupply: number;
    mintConfig: IMintConfig[];
    remainingSupply: number;
}

