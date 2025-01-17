import Image from "next/image";
import HeroSlider from "./_components/(landingPage)/HeroSlider";
import AboutUs from "./_components/(landingPage)/AboutUs";
import Highlights from "./_components/(landingPage)/Highlights";
import Products from "./_components/(landingPage)/Products";
import OurValues from "./_components/(landingPage)/OurValues";
import Footer from "./_components/(landingPage)/Footer";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <div className="px-4 xl:px-56">
        <AboutUs />
        <Highlights/>
        <Products/>
        <OurValues/>
        <Footer/>
      </div>
    </>
  );
}
