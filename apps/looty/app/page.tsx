import Image from "next/image";
import { Faq } from "./components/home/faq";
import DiscordIcon from "./icons/DiscordIcon";
export default async function HomePage() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className='relative flex flex-col w-full items-center justify-center overflow-y-auto overflow-x-hidden'>
      <div className='relative flex w-full mt-60 mx-auto max-w-7xl'>
        <div className='flex flex-col justify-center text-left items-center w-1/2 gap-12'>
          <div className="flex flex-col gap-6">
            <h1 className='text-[90px] leading-[5rem] text-white '>Get  <span className='text-[#B73FFF]'>exclusive rewards</span> for being loyal</h1>
            <p className='flex  text-[#D7CCE0] w-full justify-center mt-4 text-[21px] font-normal'>
              Mint keys from your favorite brands and open the box with exclusive rewards.
            </p>
          </div>
          <div className="flex w-full justify-start gap-6">
            <button className="text-white text-[18px] font-bold bg-gradient-to-r from-[#D630FF] to-[#B130FF] hover:outline outline-4 outline-white rounded-2xl px-10 py-5"
            // onClick={() => { }}
            >
              Mint now
            </button>
            <button className="text-white text-[18px] font-bold border-solid border-2 border-[#B130FF] bg-transparent hover:outline outline-4 outline-white rounded-2xl px-10 py-5"
            // onClick={() => { }}
            >
              Open the box
            </button>
          </div>
        </div>
        {/* background image tailwind  */}
        <Image
          priority
          src="/images/hero-image.svg"
          height={537}
          width={640}
          alt="Follow us on Twitter"
          className="z-20 translate-y-[-50px] translate-x-[20px]"
        />
      </div>
      <Image
        className="absolute top-0 left-10 z-0 w-full"
        priority
        src="/images/bg-image.svg"
        height={454}
        width={2000}
        alt="Follow us on Twitter"
      />
      <Image
        className="absolute top-0 right-20 z-0"
        priority
        src="/images/light.svg"
        height={932}
        width={932}
        alt="Follow us on Twitter"
      />
      <div className='relative flex flex-col w-full mx-auto max-w-7xl items-center justify-center gap-8'>
        <h5 className="text-white text-[21px]">Trusted by:</h5>
        <div className="flex gap-12">
          <Image
            priority
            src="/images/sponsor-avax.svg"
            height={38}
            width={186}
            alt="Follow us on Twitter"
          />
          <Image
            priority
            src="/images/sponsor-exit.svg"
            height={38}
            width={86}
            alt="Follow us on Twitter"
          />
          <Image
            priority
            src="/images/sponsor-solana.svg"
            height={38}
            width={186}
            alt="Follow us on Twitter"
          />
        </div>
      </div>
      <div className="relative w-full">
        <Image
          className="absolute top-0 right-0"
          priority
          src="/images/light-3.svg"
          height={300}
          width={300}
          alt="Light"
        />
        <div className='flex flex-col w-full mx-auto max-w-7xl items-center justify-center gap-12 mt-32'>
          <h3 className="text-[55px] leading-[5rem] text-white">It`s super easy to <b className="text-[#B73FFF]">get rewards</b>!</h3>
          <div className="flex gap-10 text-center w-full items-center justify-center h-full">
            <div className="flex flex-col justify-center items-center gap-4 bg-[#201935] py-10 px-8 border border-[#332950] rounded-2xl w-1/4 box-content">
              <Image src="/images/mint-keys-icon.svg" height={45} width={45} alt="Mint keys" className="h-20" />
              <p className="text-[30px]  text-white">Mint your keys</p>
              <p className='flex  text-[#D7CCE0] w-full justify-center text-[21px] font-normal'>
                Mint keys from your favorite brands and open the box with exclusive rewards.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 bg-[#201935] py-10 px-8 border border-[#332950] rounded-2xl w-1/4 box-content ">
              <Image src="/images/open-box-icon.svg" height={65} width={65} alt="Open the box" className="h-20" />
              <p className="text-[30px]  text-white">Open the box</p>
              <p className='flex  text-[#D7CCE0] w-full justify-center text-[21px] font-normal'>
                Open the box and claim your rewards. You can find all your rewards on the rewards page.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 bg-[#201935] py-10 px-8 border border-[#332950] rounded-2xl w-1/4 box-content">
              <Image src="/images/rewards-icon.svg" height={65} width={65} alt="Get rewards" className="h-20" />
              <p className="text-[30px]  text-white">Get rewards</p>
              <p className='flex  text-[#D7CCE0] w-full justify-center text-[21px] font-normal'>
                Get rewards from your favorite brands. You can find all your rewards on the rewards page.
              </p>
            </div>
          </div>
          <div className="w-screen bg-[#201935] h-[536px] mt-32">
            <div className="flex w-full items-center justify-between gap-16 max-w-7xl mx-auto">
              <Image
                priority
                src="/images/hero-treasury.svg"
                height={512}
                width={490}
                alt="Key treasury"
              />
              <div className="flex flex-col gap-6 max-w-2xl pt-28">
                <h3 className='text-[55px] text-white leading-[5rem]'>Open the most exclusive rewards with <span className='text-[#B73FFF]'>your keys</span></h3>
                <p className='flex  text-[#D7CCE0] w-full justify-center mt-4 text-[21px] font-normal'>
                  Looty has been collecting exclusive rewards for the most loyal fans. Use your key to receive your reward. Or trade limited supply of keys on the secondary market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative flex flex-col w-full mx-auto max-w-7xl items-center justify-center my-32'>
        <Image src="/images/deal-banner.svg" height={399} width={1400} alt="Key treasury" />
        <button className="text-[#B73FFF] text-[18px] font-bold bg-white rounded-2xl px-10 py-5 absolute bottom-10 left-[70px]"
        // onClick={() => { }}
        >
          Mint now
        </button>
      </div>
      <div className='relative flex flex-col w-full mx-auto items-center justify-center mb-32'>
        <Image
          className="absolute top-0 left-0 z-0"
          priority
          src="/images/light-2.svg"
          height={300}
          width={300}
          alt="Light"
        />
        <div className="flex flex-col w-full mx-auto items-center justify-center max-w-5xl">
          <Image src="/images/faq.svg" height={367} width={1051} alt="FAQ" className="absolute top-0 z-0" />
        </div>
        <div className="max-w-4xl z-20">
          <div className="flex flex-col w-full justify-start gap-10">
            <h3 className="text-[55px] leading-[5rem] text-white">Frequently Asked Questions</h3>
            <p className="text-[24px]  text-white text-left font-normal">How do I mint keys?</p>
          </div>
          <Faq />
        </div>
      </div>
      <div className="relative flex justify-center items-center w-full mt-12">
        <div className="flex flex-col w-full justify-center items-center gap-10 mb-56">
          <h3 className="text-[55px] leading-[5rem] text-white">Still have questions?</h3>
          <p className="text-[21px]  text-[#D7CCE0] text-left font-normal">Contact us in our Discord.</p>
          <button className="text-white z-20 text-[18px] font-bold bg-gradient-to-r from-[#D630FF] to-[#B130FF] hover:outline outline-4 outline-white rounded-2xl px-10 py-5"
          // onClick={() => { }}
          >
            <div className="flex items-center gap-2">
              <DiscordIcon className="z-20" /> Discord
            </div>
          </button>
        </div>
        <Image
          className="absolute bottom-0 left-0 z-0"
          priority
          src="/images/bg-footer.svg"
          height={354}
          width={2400}
          alt="footer"
        />
      </div>
    </div >
  );
}
