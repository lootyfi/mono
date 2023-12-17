import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";


export function Faq() {
    return (
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
    )
}
