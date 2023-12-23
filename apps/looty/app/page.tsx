import { Faq } from "./components/home/faq";
import Hero from "./components/home/hero";
import Partners from "./components/home/partners";
import Features from "./components/home/features";
import Contact from "./components/home/contact";
import Banner from "./components/home/banner";

export default async function HomePage() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className='relative flex flex-col w-full items-center justify-center overflow-y-auto overflow-x-hidden gap-8'>

      <Hero />
      <Partners />
      <Features />
      <Banner />
      <Faq />
      <Contact />
    </div >
  );
}
