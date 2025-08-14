import Intro from "@/components/Intro";
import AboutMe from "@/components/AboutMe";
// import Services from "@/components/Services";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
export default function Home() {
  return (
    <div>
      <Intro />
      <AboutMe />
      {/* <Services /> */}
      <Experience />
      <Tools />
      <Projects />
      <Contact />
    </div>
  );
}
