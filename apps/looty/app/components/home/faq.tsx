import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import Image from "next/image";

export function Faq() {
    return (
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
            <div className="max-w-4xl z-20 px-8 lg:px-0">
                <div className="flex flex-col w-full justify-center lg:justify-start gap-10">
                    <h3 className="text-[35px] lg:text-[55px] leading-[3rem] lg:leading-[5rem] text-white">Frequently Asked Questions</h3>
                    <p className="text-[24px]  text-white text-left font-normal">How do I mint keys?</p>
                </div>
                <Accordion type="single" collapsible className="w-full text-white">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How do I open the lootbox?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Where can I find my rewards?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What can I do with keys</AccordionTrigger>
                        <AccordionContent>
                            Yes. It`s animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Who can I contact about support?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It`s animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
