import { BiChevronsDown } from "react-icons/bi";
import ProjectsContainer from "../Projects/ProjectsContainer";
import ContactUs from "../ContactUs/ContactUs";
import AboutUs from "../AboutUs/AboutUs";
import OurTeam from "../OurTeam/OurTeam";

const Home = () => {
  return (
    <>
      <section className="homeContainer">
        <div className="relative">
          <h1 className="homeHero">
            Crafting <span className="highlightHero">Beautiful</span> and{" "}
            <span className="highlightHero">functional</span> websites.
          </h1>
        </div>
        <div>
          <h3 className="subtitles homeSubtitle">
            You dream, we take care of making it come true.
          </h3>
        </div>
        <div className="decorativeArrowContainer">
          <BiChevronsDown className="decorativeIcons" />
        </div>
      </section>
      <ProjectsContainer />
    </>
  );
};

export default Home;
