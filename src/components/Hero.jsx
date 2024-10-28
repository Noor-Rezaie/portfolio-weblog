import toast, { Toaster } from "react-hot-toast";
import { content } from "../Content";
// import resume from "../assets/resume/resume.pdf";
import resume from "/resume.pdf";

function Hero() {
  const { hero } = content;
  return (
    <section id="home">
      {/* MAIN CONTENTS */}
      <div className="relative flex flex-col-reverse items-center justify-center min-h-screen md:items-end md:flex-row">
        <div className="absolute top-0 bottom-0 right-0 w-8/12 h-full bg-green-300 -z-10 md:w-4/12">
          {/* <h1 className="text-green-50 top-6 z-50 text-xl sm:text-6xl  sm:rotate-90 absolute sm:right-[-15%] sm:top-[33%] "> */}
          <h1 className="text-green-50 z-50 sm:-z-20 text-xl sm:text-6xl  rotate-90 absolute right-[-15%] sm:top-[33%] top-[25%] ">
            {/* for H1 the -rotate-12 for small screns */}
            {hero.firstName}
            {"-"}
            <span className="z-50 text-slate-800">{hero.LastName}</span>
          </h1>
        </div>
        {/* test THIS IS THE ROUNDED COLOR ON THE CORNER */}
        <span className="absolute block overflow-hidden rotate-45 bg-white rounded -top-36 left-32 md:bg-green-300 h-[100%] -z-10 md:w-12"></span>

        {/*1) NEXT COLUMN */}
        <div className="px-6 pt-6 pb-20">
          <h3 className=" md:font-bold md:text-green-400">
            <div className="uppercase">I am a </div>
            {hero.title}
          </h3>
          <br />
          <div className="flex justify-around">
            {/* Toast message */}
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 4000,
                },
                error: {
                  duration: 5000,
                },
                style: {
                  fontSize: "18px",
                  minWidth: "md:400px",
                  mazWidth: "700px",
                  padding: "18px 26px",
                  backgroundColor: "#eee",
                  color: "#777",
                },
              }}
            />
            <a href="#contact">
              <button
                className="duration-300 bg-green-100 btn hover:scale-105"
                onClick={() => {
                  toast.success(
                    "I will be happy recieving your Email, I will check as faster as possible!"
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
                className="duration-300 btn hover:scale-105 hover:bg-green-200"
              >
                Download CV
              </button>
            </a>
          </div>
          <div className="flex flex-col gap-8 mb-4 mt-7 ">
            {hero.hero_content.map((content, index) => (
              <div
                key={index}
                className={`flex items-center justify-center w-80 gap-6`}
              >
                <h3>{content.count}</h3>
                <p className="md:text-lg">{content.text}</p>
                <p>{console.log(content.text)}</p>
              </div>
            ))}
          </div>
        </div>
        {/*2) NEXT COLUMN */}
        {/* <div className="md:h-[37rem] h-96 "> */}
        <div className="md:h-[27rem] h-72 md:mb-20">
          <img
            src={hero.image}
            alt="Avatar"
            className="object-cover h-full sm:border-l-[20px] border-l-[13px] border-green-300 rounded-full -z-10"
            // className="object-cover h-full border-8 border-green-300 rounded-full -z-10"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
