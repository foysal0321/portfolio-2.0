import About from "../Home/About/About";
import Blog from "../Home/Blog/Blog";
import Contact from "../Home/Contact/Contact";
import HeaderImg from "../Home/Headers/HeaderImg";
import Projects from "../Home/Projects/Projects";

function SideberHome() {
  return (
    <div className="">
      <HeaderImg />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default SideberHome;
