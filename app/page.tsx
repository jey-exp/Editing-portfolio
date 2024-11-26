import Image from "next/image";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import mouse from "../public/mouse.svg";
import spark from "../public/sparks.svg";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-screen">
      <div className="bg-gradient-to-b from-custom-top  to-custom-bottom h-screen flex flex-col items-center relative w-screen">
        <div className="custom-screen-width">
          <Navbar />
          <Herosection />
          <div className="mt-20 h-auto">
            <div className="flex justify-center">
              <span>
                The recipe is made is heaven to take the experience to the hell
                (:
              </span>
            </div>
            <div className="flex flex-col items-center mt-5">
              <Image src={mouse} width={40} height={30} alt="scroll" />
              <div className="font-light text-m">Scroll</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cusom-bottom w-screen bg-custom-bottom flex flex-col items-center">
        <VideoSection />
      </div>
      <Footer />
      <Image
        src={spark}
        height={70}
        width={70}
        alt="spark"
        className="absolute top-1/2 left-56 z-0"
      />
      <Image
        src={spark}
        height={70}
        width={70}
        alt="spark"
        className="absolute bottom-44 left-1/3 z-0"
      />
      <Image
        src={spark}
        height={70}
        width={70}
        alt="spark"
        className="absolute bottom-56 right-56 z-0"
      />
    </div>
  );
}
