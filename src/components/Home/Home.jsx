import React from "react";
import { BiChevronsDown } from "react-icons/bi";
import ProjectsContainer from "../Projects/ProjectsContainer";

const Home = () => {
  return (
    <>
      <section className="homeContainer">
        <div>
          <h1 className="homeHero">
            Crafting <span className="highlightHero">Beautiful</span> and{" "}
            <span className="highlightHero">functional</span> websites.
          </h1>
        </div>
        <div>
          <h3 className="subtitles homeSubtitle">
            Developing your dreams one at a time
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
