import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

interface ProductAccordionProps {
    accordion: { title: string; content: string }[];
}

export default function ProductAccordion({ accordion }: ProductAccordionProps) {
    return (
      <Accordion className="mb-[25px]" type="multiple">
        {accordion.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }