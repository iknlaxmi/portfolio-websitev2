import React from "react";
// import iconApp from "../assets/";
const experience_data = [
  {
    icon: "/src/assets/add.png",
    title: "Implement",
    description: "Fullstack projects with Nextjs,Typescript,Nodejs,Mongodb",
  },
  {
    icon: "/src/assets/web-design.png",
    title: "Systems",
    description: "Designed systems and implemented software architecture",
  },
  {
    icon: "/src/assets/ui-design.png",
    title: "Design",
    description:
      "Ideating component structures to align styles with organization standards",
  },
  {
    icon: "/src/assets/list.png",
    title: "Quality",
    description:
      "Understand client's requirements, and provide technical solutions",
  },
];
const data1 = 32;
const skills_data = [
  {
    id: 1,
    skill: "HTML/CSS",
    level: 32,
  },
  {
    id: 2,
    skill: "React",
    level: 32,
  },
  {
    id: 3,
    skill: "Nextjs",
    level: 32,
  },
  {
    id: 4,
    skill: "Nodejs",
    level: 32,
  },
  {
    id: 5,
    skill: "TypeScript",
    level: 32,
  },
  {
    id: 6,
    skill: "MongoDB",
    level: 32,
  },
  {
    id: 7,
    skill: "Python",
    level: 0,
  },
  {
    id: 8,
    skill: "TailwindCSS",
    level: 0,
  },
  // {
  //   id: 9,
  //   skill: "HTML",
  //   level: 1,
  // },
  // {
  //   id: 10,
  //   skill: "HTML",
  //   level: 1,
  // },
];

const About = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl md:text-4xl text-center mt-10 mb-2">ABOUT</h1>
        <hr className="w-[60px]  border-[#20311A] border-2 m-auto" />
      </div>

      <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 mt-24 ml-32">
        {experience_data.map((data) => {
          return (
            <div className="flex flex-col">
              <div className="hexagon m-4 align-middle">
                <img
                  className="w-10 h-10 m-2 ml-6 -rotate-90"
                  src={data.icon}
                />
              </div>
              <div className="text-xl text-gray-600  mt-2 font-bold text-center -ml-40">
                <h3>{data.title}</h3>
              </div>
              <div className="text-gray-400 font-light md:max-w-80 -ml-8">
                <p>{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row m-5 md:ml-48 ml-12">
        <div className="md:grow-0 md:wrap w-1/3 p-10">
          <div className="hexagon-container m-5 ">
            <div className="hexagonpic rotate-90">
              <img
                src="/src/assets/profile-pic.jpg"
                alt="Rotated Hexagon"
                className="hexagon-image"
              />
            </div>
          </div>
          <div className="text-gray-400">
            <p>
              I'm a Problem Solver, Full Stack Developer and lifelong Learner. I
              am currently working as Freelancer. Consider following me if you
              want to gain insights on startups and Fullstack web technologies.
              I'm open to collaborating with fellow developers and designers to
              build kick-ass products.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-5 m-5 mt-10 ml-10">
          {skills_data.map((skill) => {
            return (
              <div className="flex items-center justify-center">
                <div className="w-[38rem] h-8 flex">
                  <div className="flex-none bg-[#06C2C9]  w-40 p-2 text-white">
                    {skill.skill}
                  </div>
                  <div
                    className={
                      "flex-auto bg-[#00A1A6] " + `w-${64 - skill.level}`
                    }
                  ></div>
                  <div
                    className={
                      "flex-auto bg-gray-300 w-32" + `w-${skill.level + 32}`
                    }
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
