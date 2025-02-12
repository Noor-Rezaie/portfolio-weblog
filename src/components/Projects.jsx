import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Projects() {
  const { Projects } = content;
  return (
    <section id="projects" className="py-12 bg-green-50">
      <div className="flex flex-col justify-between min-h-screen px-6 md:min-h-20 md:px-20 lg:py-12 lg:px-40">
        {/* <div> */}
        {/* عنوان */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-green-700">
            {Projects.title}
          </h1>
          <h4 className="text-slate-500 md:text-lg">{Projects.subtitle}</h4>
          <br />
        </div>

        {/* بخش نمایش پروژه‌ها */}
        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row">
          <img
            className="max-w-sm md:max-w-md lg:max-w-[30vw] rounded-lg z-10 md:hidden"
            // className="w-full max-w-sm md:max-w-md lg:max-w-[45vw] rounded-lg"
            src={Projects.image}
            alt="Projects"
          />

          {/* Swiper - اسلایدر پروژه‌ها */}
          <Swiper
            pagination={{ clickable: true }}
            navigation={true} // اضافه کردن دکمه‌های بعدی و قبلی
            modules={[Pagination, Navigation]}
            spaceBetween={24} // فاصله بین اسلایدها
            scrollbar={{ draggable: true }}
            // spaceBetween={50} // فاصله بین اسلایدها
            slidesPerView={1} // در موبایل فقط یک اسلاید نمایش داده شود
            breakpoints={{
              768: { slidesPerView: 2 }, // در تبلت دو اسلاید نمایش داده شود
              1024: { slidesPerView: 3 }, // در دسکتاپ سه اسلاید نمایش داده شود
            }}
            // className="w-full max-w-md md:max-w-lg lg:max-w-xl drop-shadow-lg"
            className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[80%] drop-shadow-xl relative z-10"
            // className="hover:scale-105 hover:shadow-lg w-full max-w-[95%] md:max-w-[90%] lg:max-w-[80%] drop-shadow-xl relative z-10"
          >
            {Projects.project_content.map((content, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center p-4 text-center transition-all duration-300 bg-green-200 border-b-2 border-r-2 shadow-md rounded-xl hover:shadow-xl"
              >
                <img
                  src={content.image}
                  alt="Project"
                  className="w-full max-w-xs rounded-md shadow-sm"
                />
                <h4 className="mt-3 text-lg font-bold oleo-script-regular">
                  {content.title}
                </h4>
                <a href={content.link} className="mt-3 mb-4">
                  <button className="px-4 py-2 text-white transition-all duration-300 bg-green-600 rounded-lg shadow-md hover:scale-105 hover:bg-green-700">
                    Demo
                  </button>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Projects;
