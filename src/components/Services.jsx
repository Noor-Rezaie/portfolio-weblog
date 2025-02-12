import { content } from "../Content";

function Services() {
  const { services } = content;

  return (
    <section id="services" className="bg-green-100 py-14">
      <div className="container px-6 mx-auto md:px-12">
        {/* عنوان و توضیحات */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-green-800">
            {services.title}
          </h2>
          <h5 className="mt-2 text-lg text-slate-500">{services.subtitle}</h5>
        </div>

        {/* کارت‌های خدمات */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 lg:px-36">
          {/* <div className="flex flex-wrap items-center justify-between gap-6 mx-auto group md:px-20"> */}
          {services.service_content.map((content, index) => (
            <div
              key={index}
              className="p-6 text-center transition-all duration-300 transform bg-green-200 border-2 border-green-300 shadow-md rounded-xl hover:scale-105 hover:shadow-lg"
            >
              <img
                src={content.logo}
                alt="Service Icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h6 className="text-lg font-semibold text-green-900">
                {content.title}
              </h6>
              <p className="mt-2 text-left text-slate-600">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
