// #region ============================== Imports

// components
import Header from "@/components/Header/Header";
import Hero from "@/components/_SECTIONS/1_Hero/Hero";
import MenuMobile from "@/components/MenuMobile/MenuMobile";
import VideoSection from "@/components/_SECTIONS/2_VideoSection/VideoSection";
import About from "@/components/_SECTIONS/3_About/About";
import Process from "@/components/_SECTIONS/4_Process/Process";
import Portfolio from "@/components/_SECTIONS/5_Portfolio/Portfolio";
import Banner from "@/components/_SECTIONS/6_Banner/Banner";
import Manufacture from "@/components/_SECTIONS/7_Manufacture/Manufacture";
import Footer from "@/components/_SECTIONS/8_Footer/Footer";

// #endregion ===========================

export default function Home() {
  return (
    <>
      <Header />
      <MenuMobile />
      <Hero />
      <VideoSection />
      <About />
      <Process />
      <Portfolio />
      <Banner />
      <Manufacture />
      <Footer />
    </>
  );
}
