import About from "./sections/About";
import Competencies from "./sections/Competencies";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Portfolio from "./sections/Portfolio";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="bg-slate-600 ml-[256px]" >
        <About />
        <Experience />
        <hr/>
        <Competencies />
        <hr/>
        <Portfolio />
        <hr/>
        <Education />
      </div>
    </div>
  );
}
