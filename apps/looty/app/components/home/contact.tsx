'use client'
import Image from "next/image";
import DiscordIcon from "../../icons/DiscordIcon";
import useMediaQuery from "../../hooks/useDevice";


export const Contact = () => {
    const isSmallDevice = useMediaQuery();
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.scss file.
     */
    return (
        <div className="relative flex justify-center items-center w-full mt-8 lg:mt-12">
            <div className="flex flex-col w-full justify-center items-center gap-8 lg:gap-10 mb-56">
                <div className="flex flex-col gap-4  justify-center items-center">
                    <h3 className="text-[30px] leading-[2rem] lg:text-[55px] lg:leading-[5rem] text-white">Still have questions?</h3>
                    <p className="text-[21px]  text-[#D7CCE0] text-left font-normal">Contact us in our Discord.</p>
                </div>
                <button className="text-white z-20 text-[18px] font-bold bg-gradient-to-r from-[#D630FF] to-[#B130FF] hover:outline outline-4 outline-white rounded-2xl px-10 py-5"
                // onClick={() => { }}
                >
                    <div className="flex items-center gap-2">
                        <DiscordIcon className="z-20" /> Discord
                    </div>
                </button>
            </div>
            {
                isSmallDevice ?
                    <Image
                        className="absolute bottom-0 left-0 z-0"
                        priority
                        src="/images/bg-footer-mobile.svg"
                        height={382}
                        width={1173}
                        alt="footer"
                    />
                    :
                    <Image
                        className="absolute bottom-0 lg:bottom-0 left-0 z-0"
                        priority
                        src="/images/bg-footer.svg"
                        height={354}
                        width={2400}
                        alt="footer"
                    />
            }
        </div>
    );
}


export default Contact;