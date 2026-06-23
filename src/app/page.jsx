// #region ============================== Imports

// components
import Header from "@/components/_INTERACTIVE/Header/Header";
import Hero from "@/components/_SECTIONS/1_Hero/Hero";
import MenuMobile from "@/components/_INTERACTIVE/MenuMobile/MenuMobile";
import Process from "@/components/_SECTIONS/4_Process/Process";
import Portfolio from "@/components/_SECTIONS/5_Portfolio/Portfolio";
import Banner from "@/components/_SECTIONS/6_Banner/Banner";
import Manufacture from "@/components/_SECTIONS/7_Manufacture/Manufacture";
import Footer from "@/components/_SECTIONS/8_Footer/Footer";
import HomePageWrapper from "@/components/_WRAPPERS/HomePageWrapper/HomePageWrapper";
import VideoSectionWrapper from "@/components/_WRAPPERS/VideoSectionWrapper/VideoSectionWrapper";
import HeroWrapper from "@/components/_WRAPPERS/HeroWrapper/HeroWrapper";
import Preloader from "@/components/_SECTIONS/0_Preloader/Preloader";

// styles
// import css from ".";

// #endregion ===========================

export default function Home() {
  return (
    <HomePageWrapper>
      <Header />
      <MenuMobile />

      <HeroWrapper>
        <Hero />
      </HeroWrapper>

      <VideoSectionWrapper />
      <Process />
      <Portfolio />
      <Banner />
      <Manufacture />
      <Footer />

      <Preloader />
    </HomePageWrapper>
  );
}
