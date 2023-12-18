import Image from "next/image";

export default async function Partners() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.scss file.
     */
    return (
        <div className='relative flex flex-col w-full mx-auto max-w-7xl items-center justify-center gap-8 mt-10'>
            <h5 className="text-white text-[21px]">Trusted by:</h5>
            <div className="flex w-full justify-start lg:justify-center gap-5 lg:gap-12 px-4 lg:px-0">
                <Image
                    priority
                    src="/images/sponsor-avax.svg"
                    height={38}
                    width={186}
                    className="w-1/3 lg:w-auto"
                    alt="Follow us on Twitter"
                />
                <Image
                    priority
                    src="/images/sponsor-exit.svg"
                    height={38}
                    width={86}
                    className="w-1/4 lg:w-auto"
                    alt="Follow us on Twitter"
                />
                <Image
                    priority
                    src="/images/sponsor-solana.svg"
                    height={38}
                    width={186}
                    className="w-1/3 lg:w-auto"
                    alt="Follow us on Twitter"
                />
            </div>
        </div>
    );
}
