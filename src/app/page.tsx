import Intro from "@/components/Intro";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Services />
      <Tools />
      {/* Add more components as needed */}
      <Projects />
      <Contact />
    </div>
  );
}
