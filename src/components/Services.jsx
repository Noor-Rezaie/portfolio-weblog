import { content } from "../Content";

function Services() {
  const { services } = content;

  return (
    <section id="services" className="bg-green-100">
      <div className="px-4 py-14 md:container">
        <div className=" px-14 md:px-10">
          <h2>{services.title}</h2>
          <h5 className="font-bold text-slate-500">{services.subtitle}</h5>
        </div>
        <br />

        <div className="flex flex-wrap items-center justify-between gap-4 px-16 mx-auto group md:px-20">
          {services.service_content.map((content, index) => (
            <div
              className=" group-hover:blur-sm hover:!blur-none md:flex-1 md:min-w-[14] border-2 rounded-lg duration-200 cursor-pointer  border-green-200 shadow-xl bg-green-200 p-5 mt-2 md:mx-10 text-center"
              key={index}
            >
              <img
                src={content.logo}
                alt="SERVISES THAT I CAN OFFER YOU IMAGE!"
                className="mx-auto"
              />
              <h6 className="font-bold font-Paprika">{content.title}</h6>
              <p className="leading-8 font-Paprika">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
