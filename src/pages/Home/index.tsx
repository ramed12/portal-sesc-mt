import { Footer } from "../../components/Footer";
import { NavbarHome } from "../../components/Navbar";

import { Hero } from "./Hero";

import News from "./News";
import Programming from "./ProgramingHome";
import QuickAccess from "./QuickAccess";
import Slider from "./Slider";

export function Home() {
  return (
    <>
      <NavbarHome />

      <Hero />
      <Programming />
      <News />
      <Slider />
      <QuickAccess />

      <Footer />
    </>
  );
}
