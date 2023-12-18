import Image from "next/image";

export default async function Features() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.scss file.
     */
    return (
        <div className="relative w-full">
            <Image
                className="absolute top-0 right-0"
                priority
                src="/images/light-3.svg"
                height={300}
                width={300}
                alt="Light"
            />
            <div className='flex flex-col w-full mx-auto max-w-7xl items-center justify-center gap-12 mt-12 lg:mt-32 px-8 lg:px-0'>
                <h3 className="text-[30px] lg:text-[55px] lg:leading-[5rem] text-white text-center lg:text-start">It`s super easy to <b className="text-[#B73FFF]">get rewards</b>!</h3>
                <div className="flex gap-10 flex-col lg:flex-row text-center w-full items-center justify-center h-full px-8 lg:px-0">
                    <div className="flex flex-col justify-center items-center gap-4 bg-[#201935] py-10 px-8 border border-[#332950] rounded-2xl w-full lg:w-1/4 box-content">
                        <Image src="/images/mint-keys-icon.svg" height={45} width={45} alt="Mint keys" className="h-20" />
                        <p className="text-[30px]  text-white">Mint your keys</p>
                        <p className='flex  text-[#D7CCE0] w-full justify-center text-[21px] font-normal'>
                            Mint keys from your favorite brands and open the box with exclusive rewards.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 bg-[#201935] py-10 px-8 border border-[#332950] rounded-2xl w-full lg:w-1/4 box-content ">
                        <Image src="/images/open-box-icon.svg" height={65} width={65} alt="Open the box" className="h-20" />
                        <p className="text-[30px]  text-white">Open the box</p>
                        <p className='flex  text-[#D7CCE0] w-full justify-center text-[21px] font-normal'>
                            Open the box and claim your rewards. You can find all your rewards on the rewards page.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 bg-[#201935] py-10 px-8 border border-[#332950] rounded-2xl w-full lg:w-1/4 box-content">
                        <Image src="/images/rewards-icon.svg" height={65} width={65} alt="Get rewards" className="h-20" />
                        <p className="text-[30px]  text-white">Get rewards</p>
                        <p className='flex  text-[#D7CCE0] w-full justify-center text-[21px] font-normal'>
                            Get rewards from your favorite brands. You can find all your rewards on the rewards page.
                        </p>
                    </div>
                </div>
                <div className="w-screen bg-[#201935] h-full lg:h-[536px] mt-20  py-8 lg:py-0">
                    <div className="flex w-full flex-col lg:flex-row items-center justify-between gap-0 lg:gap-16 max-w-7xl mx-auto">
                        <Image
                            priority
                            src="/images/hero-treasury.svg"
                            height={420}
                            width={420}
                            className="w-64 lg:w-auto"
                            alt="Key treasury"
                        />
                        <div className="flex flex-col gap-8 max-w-2xl pt-8 lg:pt-0 text-center lg:text-start justify-center px-8 lg:px-0">
                            <h3 className='text-[30px] lg:text-[55px] text-white leading-[3rem] lg:leading-[4rem]'>Open the most exclusive rewards with <span className='text-[#B73FFF]'>your keys</span></h3>
                            <p className='flex  text-[#D7CCE0] w-full justify-center text-[21px] font-normal'>
                                Looty has been collecting exclusive rewards for the most loyal fans. Use your key to receive your reward. Or trade limited supply of keys on the secondary market.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
