import Image from "next/image";
import Intro from "@/components/Intro";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
export default function Home() {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Services />
    </div>
  );
}
