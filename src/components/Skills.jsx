import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { content } from "../Content";
import { createElement, useState } from "react";
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

//
// THE SKILLS FUNCTION.
function Skills() {
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

  return (
    <section id="skills" className="min-h-screen bg-green-50">
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
          {/* <ul className="px-1 text-xs !leading-8 list-decimal rounded-md md:text-sm font-Poppins">
            {skills.skills_content.map((value, index) => {
              <li key={index}>{selectSkill?.details}</li>;
            })}
          </ul> */}
        </div>
        <br />

        {/* <ol className="px-1 text-xs !leading-8 list-decimal rounded-md md:text-sm font-Poppins">
          <li>In here we can write some text to be shown for</li>
          <li>In here we can write is seeing this</li>
          <li>In here we can write some text to be shown</li>
        </ol> */}
        <br />
        <button
          onClick={closeModal}
          className="flex items-center justify-end bg-red-500 text-slate-200 btn"
        >
          <HiOutlineArrowCircleLeft className="mr-2" />{" "}
          <span className="font-bold text-slate-200">Close</span>
        </button>
      </Modal>

      {/* THE MAIN CONETNET TO BE DISPALYED */}
      <div className="mx-auto py-14 px-14 md:px-56 md:mx-auto">
        <h1 className="">{skills.title}</h1>
        <h4 className="text-slate-300">{skills.subtitle}</h4>
        <br />

        {/* MAPPING THE PICTURES FOR SKILLS */}
        <div className="flex flex-wrap justify-center gap-2 ">
          {skills.skills_content.map((skill, index) => (
            <div
              key={index}
              className="relative flex items-center w-full max-w-sm gap-6 p-6 m-2 bg-green-100 shadow-xl cursor-pointer backdrop-blur-lg rounded-xl group"
            >
              <div>
                <img
                  className="w-12 duration-200 rounded-lg group-hover:scale-110"
                  src={skill.logo}
                  alt="logos"
                />
              </div>
              <div className="text-sm font-bold md:text-xl">
                <h5>{skill.name}</h5>
                <h6 className="text-sm italic md:text-xl text-slate-300">
                  {" "}
                  {skill.para}
                </h6>
                <span className="absolute text-xl cursor-pointer top-3 right-3">
                  <button
                    onClick={() => {
                      setSelectSkill(skill);
                      openModal();
                    }}
                    // onClick={() => setIsOpenModal(!isOpenModal)}
                    className="bg-green-400 btn"
                  >
                    {createElement(skills.icon)}
                  </button>

                  {/* Git button */}
                  {/* <a href="#">
                    <button className="">Veiw Git</button>
                  </a> */}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
