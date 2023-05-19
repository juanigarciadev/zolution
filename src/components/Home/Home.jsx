import React from "react";
import { BiChevronsDown } from "react-icons/bi";

const Home = () => {
  return (
    <section className="homeContainer">
      <div>
        <h1 className="homeHero">
          <span className="highlightHero">Original</span> and{" "}
          <span className="highlightHero">modern</span> design at your
          fingertips.
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
      <div>
        <BiChevronsDown className="decorativeIcons" />
      </div>
    </section>
  );
};

export default Home;
