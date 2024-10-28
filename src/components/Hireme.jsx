import toast, { Toaster } from "react-hot-toast";
import { content } from "../Content";

function Hireme() {
  // const [hireMe, setHireMe] = useState("");

  const { Hireme } = content;
  return (
    <section id="hireme" className="p-4 bg-green-50">
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
      <div className="px-6 pt-16 md:px-56">
        <h1 className="">{Hireme.title}</h1>
        <h4 className="text-slate-300">{Hireme.subtitle}</h4>
        <br />

        <div className="flex flex-col-reverse items-center md:flex-row">
          <img
            className="max-w-sm pl-3 mt-8 w-60 md:w-auto"
            src={Hireme.image1}
            alt="hire me"
          />
          <div className="max-w-sm p-6 sm:min-w-[24rem] bg-green-100 rounded-br-[8rem] border-green-200 shadow-xl rounded-xl">
            <p className="font-semibold leading-6 md:text-xl">{Hireme.para}</p>
            <a href="#contact">
              <button
                onClick={() =>
                  toast.success("I would be glad receiveing you email...")
                }
                className="mt-3 bg-green-600 text-slate-100 btn hover:scale-105"
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
