import IMG1 from "../assets/mi-store.png";
import IMG2 from "../assets/windbnb.png";
import IMG3 from "../assets/my-store.png";
import IMG4 from "../assets/weatherapp.png";

const project_data = [
  {
    id: 1,
    image: IMG1,
    title: "MI Store Clone",
    github: "https://github.com/iknlaxmi/mi-store-clone",
    demo: "https://mistore-miclone.netlify.app/",
  },

  {
    id: 2,
    image: IMG2,
    title: "Windbnb(Airbnb Clone)",
    github: "https://github.com/iknlaxmi/wind-bnb-app",
    demo: "https://wind-bnb-app.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "My Store",
    github: "https://github.com/iknlaxmi/my-store-app",
    demo: "https://my-app-store-demo.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Weather App",
    github: "https://github.com/iknlaxmi/WeatherApp",
    demo: "https://weather-data-dev-app.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div id="projects">
      <div className="-ml-12">
        <h1 className="text-5xl md:text-4xl text-center mt-20 mb-2">
          PROJECTS
        </h1>
        <hr className="w-[60px]  border-[#20311A] border-2 m-auto" />
      </div>
      <div className="mt-16 xl:ml-16 md:ml-5  ml-5 container grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3  gap-4 items-center">
        {project_data.map(({ id, title, image, github, demo }) => {
          return (
            <article
              key={id}
              className="w-[90%] xl:w-[100%] bg-gray-100 dark:bg-gray-800 p-5 rounded-lg border border-transparent hover:border-primary-500 transition-all"
            >
              <div className="overflow-hidden rounded-md ">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <div className="flex justify-center space-x-2 mt-4">
                <a
                  href={github}
                  className=" text-gray-700 hover:text-white hover:bg-gray-700 border-black border-2 rounded-lg p-2 m-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="ml-2 text-gray-700 hover:text-white hover:bg-gray-700 border-black border-2 rounded-lg p-2 m-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
