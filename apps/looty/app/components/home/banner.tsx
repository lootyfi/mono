'use client'
import Image from "next/image";
import useMediaQuery from "../../hooks/useDevice";

export const Banner = () => {
    const isSmallDevice = useMediaQuery();

    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.scss file.
     */
    return (
        <>
            {isSmallDevice ?
                (<div className='relative flex flex-col w-full mx-auto max-w-7xl items-center justify-center my-12 lg:my-32'>
                    <Image src="/images/deal-banner-mobile.svg" height={594} width={350} alt="Key treasury" />
                    <button className="cursor-not-allowed text-[#B73FFF] text-[18px] font-bold bg-white rounded-2xl px-10 py-5 absolute bottom-72 lg:bottom-10 left-[52px] lg:left-[70px]"
                    // onClick={() => { }}
                    >
                        Mint now
                    </button>
                </div>)
                :
                <div className='relative flex flex-col w-full mx-auto max-w-7xl items-center justify-center my-12 lg:my-32'>
                    <Image src="/images/deal-banner.svg" height={399} width={1400} alt="Key treasury" />

                    <button className="cursor-not-allowed text-[#B73FFF] text-[18px] font-bold bg-white rounded-2xl px-10 py-5 absolute bottom-72 lg:bottom-10 left-[52px] lg:left-[70px]"
                    // onClick={() => { }}
                    >
                        Mint now
                    </button>
                </div>
            }
        </>
    );
}

export default Banner;