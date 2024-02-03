import homeImg from "../assets/home-background.jpg";

const Home = () => {
  return (
    <div id="home" className="top-0">
      <div className=" md:h-full h-dvh md:relative">
        <img className="max-w-full h-full" src={homeImg} />
        <div className="text-center absolute md:top-1/2 md:left-1/3 top-1/3 left-[50px] text-white xl:top-[300px] xl:left-[520px]">
          <p className="font-normal text-2xl font-roboto">
            Hello,I am Nagalakshmi.
            <br />
            I'm a full-stack web developer.
          </p>

          <button className="border p-2 m-8">
            <a href="#about">View my work &#8594;</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
