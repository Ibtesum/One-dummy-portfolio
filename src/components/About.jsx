import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque saepe
          quaerat veritatis et, amet possimus aliquid ullam distinctio
          assumenda. Fuga aliquid possimus, saepe eligendi facilis tenetur
          dolores corrupti repellat voluptates amet corporis temporibus eaque
          natus doloremque deserunt porro voluptatem nulla asperiores hic! Nulla
          molestiae suscipit, dicta iste illo minima natus.
        </p>

        <br />

        <p className="text-xl text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          obcaecati, assumenda eius praesentium, facilis soluta neque dolorum
          veniam eligendi quia illum accusamus molestiae modi officiis debitis
          aut officia nulla consectetur ut amet pariatur, aliquid quisquam!
          Aliquid, ex! Quaerat a soluta optio, minima voluptates quibusdam esse
          tempora. Libero assumenda consequatur autem!
        </p>
      </div>
    </div>
  );
};

export default About;
