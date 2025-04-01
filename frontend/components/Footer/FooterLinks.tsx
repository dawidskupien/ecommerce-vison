import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

interface FooterLinksProps {
    links: {title: string, links: {name: string, url: string}[]}[]
}

export default function FooterLinks ({links}: FooterLinksProps) {
    return (
        <>
            <Accordion className="mb-10 lg:hidden" type="multiple">
                {links.map((item, index) => (
                    <AccordionItem className="border-b-0 border-t border-[#868d94]" key={index} value={index.toString()}>
                        <AccordionTrigger>
                            <span className="text-lg font-roboto text-white">{item.title}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <Links links={item.links} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <div className="hidden lg:flex ">
                {links.map((item, index) => (
                    <div key={index} className="lg:px-[15px] w-1/2">
                        <h3 className="text-lg font-roboto text-white mb-5">{item.title}</h3>
                        <Links links={item.links} />
                    </div>
                ))}
            </div>
        </>
    )
}


function Links ({links}: {links: {name: string, url: string}[]}) {
    return (
        <ul>
            {links.map((link, index) => (
                <li>
                    <Link key={index} href={link.url} className="block py-2 text-[#dadce0] text-sm hover:text-white">{link.name}</Link>
               </li>
            ))}
        </ul>
    )
}