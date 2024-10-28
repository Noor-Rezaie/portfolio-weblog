import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Projects() {
  const { Projects } = content;
  return (
    <section id="projects" className="bg-green-50">
      <div className="flex flex-col justify-between min-h-screen px-5 pt-14 md:px-56">
        <div>
          <h1 className="">{Projects.title}</h1>
          <h4 className="text-slate-300">{Projects.subtitle}</h4>
          <br />
        </div>

        <div className="flex flex-col-reverse items-center gap-6 lg:flex-row">
          <img
            className="md:max-w-[45vw] max-w-[35vw] md:min-w-[22rem] min-w-[18rem]"
            src={Projects.image}
            alt="PROJECTS IMAGES"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            spaceBetween={22}
            className="self-start rounded-lg max-w-[100%] pb-14 md:m-10 md:max-w-xl drop-shadow-primary"
          >
            {Projects.project_content.map((content, index) => (
              <SwiperSlide
                className="p-4 bg-green-200 border-b-4 border-r-4 shadow-sm rounded-xl"
                key={index}
              >
                <img src={content.image} alt="THE PROJECTS IMAGES" />
                <div className="">
                  <h4 className="font-bold">{content.title}</h4>
                  <a href="https://github.com/Noor-Rezaie/react-final.git">
                    <button className="duration-300 btn sm:hover:scale-105 hover:bg-green-700/25">
                      Git-Hub Link
                    </button>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Projects;
