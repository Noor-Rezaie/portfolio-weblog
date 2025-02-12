import toast, { Toaster } from "react-hot-toast";
import { content } from "../Content";

function Hireme() {
  const { Hireme } = content;
  return (
    <section id="hireme" className="p-6 bg-green-50">
      {/* Toast message */}
      <Toaster position="top-center" />

      <div className="z-20 px-4 text-center md:px-24 lg:px-56 md:text-left">
        <h1 className="z-20 text-2xl font-bold text-green-700 md:text-3xl">
          {Hireme.title}
        </h1>
        <h4 className="z-20 text-slate-500 md:text-lg">{Hireme.subtitle}</h4>
        <br />

        <div className="z-20 flex flex-col-reverse items-center gap-6 md:flex-row">
          <img
            className="z-20 w-full max-w-sm rounded-lg sm:w-60 md:w-auto"
            src={Hireme.image1}
            alt="hire me"
          />
          <div className="max-w-lg z-20 p-6 sm:min-w-[20rem] bg-green-100 rounded-br-[5rem] md:rounded-br-[8rem] border border-green-200 shadow-xl rounded-xl">
            <p className="text-sm font-semibold leading-6 sm:text-base md:text-lg">
              {Hireme.para}
            </p>
            <a href="#contact">
              <button
                onClick={() =>
                  toast.success("I would be glad receiving your email...")
                }
                className="px-6 py-3 mt-4 font-medium text-white transition-all duration-300 bg-green-600 rounded-lg shadow-md sm:w-auto hover:scale-105 hover:bg-green-700"
              >
                {Hireme.btnText}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hireme;
