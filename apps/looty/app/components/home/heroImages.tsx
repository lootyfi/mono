'use client'
import Image from "next/image";
import { useMediaQuery } from "@uidotdev/usehooks";

export const HeroImages = () => {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

    return (
        <>
            {!isSmallDevice && <Image
                className="absolute top-10 left-20 z-0 w-full"
                priority
                src="/images/bg-image.svg"
                height={454}
                width={2000}
                alt="Follow us on Twitter"
            />}
            {!isSmallDevice && <Image
                className="absolute top-0 right-20 z-0"
                priority
                src="/images/light.svg"
                height={932}
                width={932}
                alt="Follow us on Twitter"
            />}</>
    );
}

export default HeroImages;