import Image from "next/image";
import HeroImage from "./heroImages";
export default async function Hero() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.scss file.
     */
    return (

        <div className='flex flex-col lg:flex-row w-full mt-20 lg:mt-60 lg:mx-auto lg:max-w-7xl'>
            <div className="flex flex-col w-full px-8 lg:px-0 gap-10 lg:gap-0">
                <div className='flex flex-col lg:flex-row justify-center text-center lg:text-left items-center lg:items-start gap-12'>
                    <div className="flex flex-col gap-12">
                        <h1 className='text-[45px] lg:text-[90px] leading-[3rem] lg:leading-[5rem] text-white '>Get  <span className='text-[#B73FFF]'>exclusive rewards</span> for being loyal</h1>
                        <p className='flex  text-[#D7CCE0] w-full justify-center mt-4 text-[21px] font-normal'>
                            Mint keys from your favorite brands and open the box with exclusive rewards.
                        </p>
                        <div className="flex w-full justify-start gap-6 flex-col lg:flex-row">
                            <button className="cursor-not-allowed text-white text-[18px] font-bold bg-gradient-to-r from-[#D630FF] to-[#B130FF] hover:outline outline-4 outline-white rounded-2xl px-10 py-5"
                            // onClick={() => { }}
                            >
                                Mint now
                            </button>
                            <button className="cursor-not-allowed text-white text-[18px] font-bold border-solid border-2 border-[#B130FF] bg-transparent hover:outline outline-4 outline-white rounded-2xl px-10 py-5"
                            // onClick={() => { }}
                            >
                                Open the box
                            </button>
                        </div>
                    </div>
                    <Image
                        priority
                        src="/images/hero-image.svg"
                        height={537}
                        width={640}
                        alt="Follow us on Twitter"
                        className="z-20 absolute top-4 lg:top-0 opacity-5 lg:opacity-100 lg:relative"
                    />
                </div>
            </div>
            <HeroImage />
        </div>
    );
}
