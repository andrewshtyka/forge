// #region ============================== Imports

// components
import Header from "@/components/Header/Header";
import Hero from "@/components/_SECTIONS/Hero/Hero";
import MenuMobile from "@/components/MenuMobile/MenuMobile";
import VideoSection from "@/components/_SECTIONS/VideoSection/VideoSection";
import About from "@/components/_SECTIONS/About/About";
import Process from "@/components/_SECTIONS/Process/Process";

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
    </>
  );
}
