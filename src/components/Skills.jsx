import { createElement, useState } from "react";
import { content } from "../Content";
import Modal from "react-modal";

// THE MODAL
const customStyles = {
  content: {
    position: "fixed",
    top: "50%",
    left: "50%",
    right: "auto",
    transform: "translate(-50%, -50%)",

    borderRadius: "1.1rem",
    padding: "1.2rem 1.5rem",
    transition: "all 0.5s",
  },

  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    backgroundColor: "",
    backdropFilter: "blur(5px)",
    zIndex: 1000,
    transition: "all 0.5s",
  },
};
Modal.setAppElement("#root");

function Skills() {
  ////////////////////////////
  const { skills } = content;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  // OPEN TEH MODAL
  function openModal() {
    setIsOpenModal(true);
    console.log(skills);
  }
  // CLOSE THE MODAL
  function closeModal() {
    setIsOpenModal(false);
  }
  ////////////////////////////

  return (
    <section id="skills" className="py-14 bg-green-50">
      <div className="container px-6 mx-auto">
        {/* ////////////////////////// */}
        {/* HERE IS WHERE WE CAN SHOW THE MODAL */}
        <Modal
          className="bg-green-300 md:w-2/6"
          isOpen={isOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="flex items-center justify-between gap-4">
              <img
                src={selectSkill?.logo}
                className="h-10"
                alt="The skills images!"
              />
              <h5 className="text-xl font-bold">{selectSkill?.name}</h5>
            </span>
            {/* test for paragraph */}
            <p className="px-1 text-xs !leading-8 list-decimal rounded-md md:text-sm font-Poppins">
              {selectSkill?.details}
            </p>
          </div>
          <br />

          <br />
          <button
            onClick={closeModal}
            // className="flex items-center justify-end bg-red-500 text-slate-200 btn"
            className="w-full px-6 py-3 text-lg font-medium text-black transition-all duration-300 ease-in-out border-2 rounded-lg bg-green-50 border-slate-600 hover:bg-red-400 hover:text-white hover:border-transparent active:scale-95 active:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            {/* <HiOutlineArrowCircleLeft className="mr-2" />{" "} */}
            <span className="font-bold text-black">Close</span>
          </button>
        </Modal>
        {/* ////////////////////////// */}

        {/* عنوان بخش */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-green-800">{skills.title}</h2>
          <h5 className="mt-2 text-lg text-slate-500">{skills.subtitle}</h5>
        </div>

        {/* نمایش مهارت‌ها */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {skills.skills_content.map((skill, index) => (
            <div
              key={index}
              className="relative flex items-center gap-4 p-5 transition-all duration-300 bg-green-100 shadow-md rounded-xl group hover:scale-105 hover:shadow-lg"
            >
              {/* آیکون مهارت */}
              <img
                className="transition-all duration-300 rounded-lg w-14 h-14 group-hover:scale-110"
                src={skill.logo}
                alt={skill.name}
              />

              {/* اطلاعات مهارت */}
              <div className="flex flex-col">
                <h5 className="text-lg font-semibold text-green-900">
                  {skill.name}
                </h5>
                <h6 className="text-sm italic text-slate-500">{skill.para}</h6>
              </div>

              {/* دکمه اطلاعات بیشتر */}
              <button
                onClick={() => {
                  setSelectSkill(skill);
                  openModal();
                }}
                className="absolute p-2 transition-all duration-200 bg-green-400 rounded-md top-3 right-3 hover:bg-green-500"
              >
                {createElement(skills.icon)}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
