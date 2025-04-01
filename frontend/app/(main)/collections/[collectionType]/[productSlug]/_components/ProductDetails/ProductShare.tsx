import Link from "next/link";
import Image from "next/image"
import { FaFacebook } from "react-icons/fa";

const socialMedia = [
    {
      icon: '',
      url: 'https://www.facebook.com/',
    },
    {
      icon: 'fb',
      url: 'https://twitter.com/',
    },
    {
      icon: 'fb',
      url: 'https://www.pinterest.com/',
    },
  ];
  
  export default function ProductShare() {
    return (
      <div className="product-share flex gap-4 mb-[25px]">
        <span className="text-sm font-medium">Share:</span>
        {socialMedia.map((social, i) => (
          <Link href={social.url} key={i}>
            {/* <Image src={social.icon} alt={social.icon} width={24} height={24} /> */}
            <FaFacebook />
          </Link>
        ))}
      </div>
    );
  }