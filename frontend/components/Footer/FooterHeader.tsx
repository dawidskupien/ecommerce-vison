import { splitText } from "@/utils/splitText"
import Image, { StaticImageData } from "next/image"

export default function FooterHeader ({logo, desc}: {logo: StaticImageData, desc: string}) {
    const [firstHalf, secondHalf] = splitText(desc)
    return (
        <div className="lg:pr-[15px]">
            <Image className="mb-[28px]" src={logo} alt="logo" height={30} width={136}/>
            <div className='mb-[40px] font-bold text-[20px]'>
                <span>{firstHalf}</span>
                <br />
                <span>{secondHalf}</span>
            </div>
        </div>
    )
}