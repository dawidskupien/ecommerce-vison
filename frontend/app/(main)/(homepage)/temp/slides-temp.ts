import sliderImage from "@/assets/images/slide1.webp";
import sliderImage2 from "@/assets/images/slide2.webp";
import sliderImage3 from "@/assets/images/slide3.webp";
import sliderImageMobile from "@/assets/images/mobile/slide1-mobile.webp";
import sliderImage3Mobile from "@/assets/images/mobile/slide3-mobile.webp";

export interface SliderProps {
  id: number | string;
  subheader: string;
  headline: string;
  description: string;
  bgUrl: string;
  mobileBgUrl?: string;
  bgVideo?: string;
  variant: "white" | "black" | "video";
  buttonText: string;
}
const sliderVideo = "/videos/slide2.mp4";
export const slides: SliderProps[] = [
  {
    id: 0,
    subheader: "WEAR TECHNOLOGY",
    headline: "What's the time? It's time to wear tech",
    description:
      "Smart watches can run apps and play back all sorts of digital media, like radio streamed to Bluetooth headphones.",
    bgUrl: sliderImage.src,
    mobileBgUrl: sliderImageMobile.src,
    variant: "white",
    buttonText: "Buy Now - 120$",
  },
  {
    id: 1,
    subheader: "SMART LIVING",
    headline: "Control Everything From Your Phone",
    description:
      "Smart watches can run apps and play back all sorts of digital media, like radio streamed to Bluetooth headphones.",
    bgUrl: sliderImage2.src,
    bgVideo: sliderVideo,
    variant: "video",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    subheader: "Security Cameras",
    headline: "Outdoor Security Cameras With Lights",
    description:
      "Surround your home with smart security and stop crime before it happens.",
    bgUrl: sliderImage3.src,
    mobileBgUrl: sliderImage3Mobile.src,
    variant: "black",
    buttonText: "Buy Now - 45$",
  },
];
