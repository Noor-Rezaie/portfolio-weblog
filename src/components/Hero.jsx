import toast, { Toaster } from "react-hot-toast";
import { content } from "../Content";
import resume from "/resume.pdf";

function Hero() {
  const { hero } = content;
  return (
    <section id="home" className="">
      {/* MAIN CONTENTS */}
      <div className="relative z-20 flex flex-col-reverse items-center justify-center min-h-screen md:items-end md:flex-row">
        <div className="absolute top-0 bottom-0 right-0 w-10/12 h-full bg-green-300 -z-10 md:w-4/12"></div>
        {/* <h1>Noorullah</h1> */}
        {/* ROUNDED COLOR ON THE CORNER */}
        <span className="absolute block overflow-hidden rotate-45 bg-white rounded -top-36 left-16 md:left-32 md:bg-green-300 h-[100%] -z-10 md:w-12"></span>

        {/* LEFT COLUMN */}
        <div className="px-4 pt-6 pb-20 text-center md:text-left">
          {/* The name of my self */}
          <div>
            <h1 className="z-50 pb-2 text-3xl sm:text-5xl md:text-5xl oleo-script-bold">
              {/* <h1 className="z-50 text-lg sm:text-5xl md:text-6xl"> */}
              {hero.firstName}
              {"-"}
              <span className="text-slate-800">{hero.LastName}</span>
            </h1>
          </div>

          <h3 className="text-lg font-bold text-green-800 uppercase md:text-xl">
            I am a {hero.title}
          </h3>
          <br />
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <Toaster position="top-center" />
            <a href="#contact">
              <button
                className="px-6 py-2 duration-300 bg-green-100 rounded-lg shadow-md hover:scale-105 hover:bg-green-300"
                onClick={() => {
                  toast.success(
                    "I will be happy receiving your Email. I will check as soon as possible!"
                  );
                }}
              >
                {hero.btnText}
              </button>
            </a>
            <a href={resume} download rel="noopener noreferrer" target="_blank">
              <button
                onClick={() => {
                  toast.success("Thanks for Downloading my Resume.");
                }}
                className="px-6 py-2 duration-300 bg-green-200 rounded-lg shadow-md hover:scale-105 hover:bg-green-300"
              >
                Download CV
              </button>
            </a>
          </div>
          <div className="flex flex-col gap-6 mt-7">
            {hero.hero_content.map((content, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-full gap-4 md:justify-start md:w-80"
              >
                <h2 className="text-4xl font-bold text-green-600">
                  {content.count}
                </h2>
                <p className="px-4 text-md md:px-0 md:text-left md:text-lg">
                  {content.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - IMAGE */}
        <div className="md:h-[27rem] h-72 md:mb-20 flex justify-center">
          <img
            src={hero.image}
            alt="Avatar"
            className="object-cover h-full w-60 sm:w-72 md:w-80 lg:w-96 border-l-[10px] sm:border-l-[20px] border-green-300 rounded-full -z-10"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
