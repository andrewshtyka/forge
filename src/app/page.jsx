// #region ============================== Imports

// components
import Header from "@/components/_INTERACTIVE/Header/Header";
import Hero from "@/components/_SECTIONS/1_Hero/Hero";
import MenuMobile from "@/components/_INTERACTIVE/MenuMobile/MenuMobile";
import VideoSection from "@/components/_SECTIONS/2_VideoSection/VideoSection";
import About from "@/components/_SECTIONS/3_About/About";
import Process from "@/components/_SECTIONS/4_Process/Process";
import Portfolio from "@/components/_SECTIONS/5_Portfolio/Portfolio";
import Banner from "@/components/_SECTIONS/6_Banner/Banner";
import Manufacture from "@/components/_SECTIONS/7_Manufacture/Manufacture";
import Footer from "@/components/_SECTIONS/8_Footer/Footer";
import HomePageWrapper from "@/components/_WRAPPERS/HomePageWrapper/HomePageWrapper";
import VideoSectionWrapper from "@/components/_WRAPPERS/VideoSectionWrapper/VideoSectionWrapper";

// #endregion ===========================

export default function Home() {
  return (
    <HomePageWrapper>
      <Header />
      <MenuMobile />

      <Hero />
      <VideoSectionWrapper />
      <Process />
      <Portfolio />
      <Banner />
      <Manufacture />
      <Footer />
    </HomePageWrapper>
  );
}
