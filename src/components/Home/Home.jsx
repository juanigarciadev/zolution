import React from "react";
import { BiChevronsDown } from "react-icons/bi";

const Home = () => {
  return (
    <section className="homeContainer">
      <div>
        <h1 className="homeHero">
          Crafting <span className="highlightHero">Beautiful</span> and{" "}
          <span className="highlightHero">functional</span> websites.
        </h1>
      </div>
      <div>
        <h3 className="subtitles homeSubtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          totam dignissimos, hic molestiae cum ratione veritatis repudiandae
          reiciendis quibusdam, quo exercitationem consectetur culpa explicabo
          dolorum deserunt voluptates. Quo veniam explicabo blanditiis repellat
          in debitis corrupti, deleniti rerum dolores odio eligendi tempora
          perferendis! Qui est esse reiciendis exercitationem cupiditate
          molestias ipsum.
        </h3>
      </div>
      <div className="decorativeArrowContainer">
        <BiChevronsDown className="decorativeIcons" />
      </div>
    </section>
  );
};

export default Home;
