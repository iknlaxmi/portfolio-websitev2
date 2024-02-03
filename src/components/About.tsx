const experience_data = [
  {
    icon: "/src/assets/web-design.png",
    title: "Systems",
    description: "Designed systems and implemented software architecture",
  },
  {
    icon: "/src/assets/list.png",
    title: "Quality",
    description:
      "Understand client's requirements, and provide technical solutions",
  },
  {
    icon: "/src/assets/add.png",
    title: "Implement",
    description: "Fullstack projects with Nextjs, Typescript, Nodejs, Mongodb",
  },
  {
    icon: "/src/assets/ui-design.png",
    title: "Design",
    description:
      "Ideating component structures to align styles with organization standards",
  },
];

const skills_data = [
  {
    id: 1,
    skill: "HTML/CSS",
    level: "Advanced",
  },
  {
    id: 2,
    skill: "React",
    level: "Advanced",
  },
  {
    id: 3,
    skill: "Nextjs",
    level: "Advanced",
  },
  {
    id: 4,
    skill: "Nodejs",
    level: "Advanced",
  },
  {
    id: 5,
    skill: "TypeScript",
    level: "Advanced",
  },
  {
    id: 6,
    skill: "MongoDB",
    level: "Advanced",
  },
  {
    id: 7,
    skill: "Python",
    level: "Intermediate",
  },
  {
    id: 8,
    skill: "TailwindCSS",
    level: "Intermediate",
  },
];

const About = () => {
  return (
    <div id="about">
      <div className="-ml-12">
        <h1 className="text-5xl md:text-4xl text-center mt-20 mb-2">ABOUT</h1>
        <hr className="w-[60px]  border-[#20311A] border-2 m-auto" />
      </div>

      <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-8 md:mt-24 mt-16 ml-32 lg:ml-20 xl:ml-32">
        {experience_data.map((data) => {
          return (
            <div className="flex flex-col">
              <div className="hexagon md:m-4 align-middle m-4 ml-2 md:ml-4">
                <img
                  className="w-10 h-10 m-2 ml-6 -rotate-90"
                  src={data.icon}
                />
              </div>
              <div className="text-xl lg:text-lg xl:text-xl text-gray-600  mt-2 font-bold text-center lg:-ml-24 xl:-ml-40 -ml-44">
                <h3>{data.title}</h3>
              </div>
              <div className="text-gray-400 font-light max-w-64 md:max-w-80 xl:max-w-80 lg:max-w-56  -ml-8 lg:-ml-4 xl:-ml-8 text-left ">
                <p>{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row m-2 md:m-5 md:ml-48 ml-6 lg:-ml-2 xl:ml-6">
        <div className="flex flex-col md:grow-0 md:wrap md:w-1/3 md:p-10 p-4 m-6">
          <div className="hexagon-container m-5 ">
            <div className="hexagonpic rotate-90">
              <img
                src="/src/assets/profile-pic.jpg"
                alt="Rotated Hexagon"
                className="hexagon-image"
              />
            </div>
          </div>
          <div className="text-gray-400 text-justify max-w-72 -ml-4 md:ml-0 md:max-w-none">
            <p>
              I'm a Problem Solver, Full Stack Developer and lifelong Learner. I
              am currently working as Freelancer. Consider following me if you
              want to gain insights on startups and Fullstack web technologies.
              I'm open to collaborating with fellow developers and designers to
              build kick-ass products.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-5 m-5 mt-10 md:ml-10 -ml-5 md:mt-20 lg:ml-6 xl:ml-10">
          {skills_data.map((skill) => {
            return (
              <div className="flex items-center justify-center">
                <div className="w-[18rem] md:w-[38rem] md:h-8 h-6 flex ">
                  <div className="flex-none bg-[#06C2C9]  md:w-40 w-20 text-white text-sm md:text-xl p-1">
                    {skill.skill}
                  </div>

                  {skill.level === "Advanced" && (
                    <div className=" flex-auto bg-[#00A1A6] w-32 md:w-64"></div>
                  )}

                  {skill.level === "Advanced" && (
                    <div className=" flex-auto bg-gray-300 w-16 md:w-32"></div>
                  )}
                  {skill.level === "Intermediate" && (
                    <div className=" flex-auto bg-[#00A1A6] w-16 md:w-32"></div>
                  )}

                  {skill.level === "Intermediate" && (
                    <div className=" flex-auto bg-gray-300 w-32 md:w-64"></div>
                  )}
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
