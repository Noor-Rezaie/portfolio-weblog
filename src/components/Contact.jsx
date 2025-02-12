import { HiSave } from "react-icons/hi";
import { content } from "../Content";
import { createElement, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const { Contact } = content;
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm("service_mptjpmp", "template_3vs1r45", form.current, {
        publicKey: "k6XOgw7Eoo8L-5tDK",
      })
      .then(
        () => {
          toast.success(
            "Email has been sent Successfully, I will check your Email dear."
          );
        },
        (error) => {
          toast.error("Sorry, The Email could not be sent. Please try again.");
          console.error("FAILED...", error.text);
        }
      );
  }

  return (
    <section id="contact" className="py-10 bg-green-100 text-slate-100">
      <Toaster position="top-center" />
      <div className="max-w-5xl px-6 pt-16 mx-auto md:px-16">
        <h2 className="italic font-bold text-center md:text-left">
          {Contact.title}
        </h2>
        <h4 className="text-center text-slate-300 md:text-left">
          {Contact.subtitle}
        </h4>
        <br />

        <div className="flex flex-col gap-12 md:flex-row">
          {/* فرم تماس */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="z-20 flex flex-col flex-1 gap-6 p-6 rounded-lg shadow-md bg-green-50"
          >
            {/* NAME */}
            <input
              type="text"
              name="from_name"
              className="w-full h-12 px-5 border rounded-lg shadow-sm outline-none bg-green-50 text-slate-800 border-slate-300 focus:ring-2 focus:ring-green-400"
              required
              placeholder="Your name..."
            />

            {/* EMAIL */}
            <input
              type="email"
              name="user_email"
              className="w-full h-12 px-5 border rounded-lg shadow-sm outline-none bg-green-50 text-slate-800 border-slate-300 focus:ring-2 focus:ring-green-400"
              required
              placeholder="Your email address..."
            />

            {/* TEXT AREA */}
            <textarea
              className="w-full h-24 px-5 border rounded-lg shadow-sm outline-none bg-green-50 text-slate-800 border-slate-300 focus:ring-2 focus:ring-green-400"
              name="message"
              required
              placeholder="The message..."
            ></textarea>

            <button className="flex items-center justify-center w-full gap-2 px-6 py-3 text-white transition bg-green-500 rounded-lg shadow-md hover:bg-green-600">
              <HiSave />
              Send me
            </button>
          </form>

          {/* اطلاعات تماس و شبکه‌های اجتماعی */}
          <div className="flex flex-col flex-1 gap-6">
            {Contact.social_media.map((content, index) => (
              <div key={index} className="flex items-center gap-6 py-2">
                <h3 className="text-2xl text-green-500">
                  {createElement(content.icon)}
                </h3>
                <a
                  href={content.link}
                  target="_blank"
                  className="text-green-800 transition font-Poppins hover:text-green-600"
                >
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
