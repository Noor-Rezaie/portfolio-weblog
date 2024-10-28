import { HiSave } from "react-icons/hi";
import { content } from "../Content";
import { createElement, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const { Contact } = content;

  // EMAIL JS
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    // client id: 771289864943-d90sbn6hsp27feks292h15rl2ak5qnan.apps.googleusercontent.com
    // USED FOR SEND AND CATCHING THE EAMILS
    emailjs
      .sendForm("service_mptjpmp", "template_3vs1r45", form.current, {
        publicKey: "k6XOgw7Eoo8L-5tDK",
      })
      .then(
        () => {
          toast.success(
            "Email has been sent Successfully, I will check your Eamil dear."
          );
          console.log("SUCCESS!");
        },
        (error) => {
          toast.error(
            "Sorry The Email could not be sent, Please try again.",
            error.text
          );
          console.log("FAILED...", error.text);
        }
      );
  }

  return (
    <section id="contact" className="py-10 bg-green-100 text-slate-100">
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
        <h2 className="italic font-bold">{Contact.title}</h2>
        <h4 className="text-slate-300">{Contact.subtitle}</h4>
        <br />

        <div className="flex flex-col gap-12 md:flex-row">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-6 shadow-sm"
          >
            {/* NAME */}
            <input
              type="text"
              name="from_name"
              className="h-12 px-5 duration-200 border rounded-lg shadow-xl hover:scale-105 text-slate-800 border-slate-400"
              required
              placeholder="Your name..."
            />

            {/* EMAIL */}
            <input
              type="email"
              name="user_email"
              className="h-12 px-5 duration-200 border rounded-lg shadow-xl hover:scale-105 border-slate-400 text-slate-800"
              required
              // pattern="[/\S+@\S+\.\S+/]"
              placeholder="Your email address..."
            />

            {/* TEXT AREA */}
            <textarea
              className="h-40 px-5 duration-200 border rounded-lg shadow-xl border-slate-400 text-slate-800 hover:scale-105"
              name="message"
              required
              placeholder="The messages..."
            ></textarea>
            <button className="flex items-center gap-2 px-6 text-center align-middle duration-200 bg-green-500 shadow-lg hover:scale-105 btn text-slate-800">
              <HiSave />
              Sent me
            </button>
          </form>

          <div className="flex-col flex-1 gap-6">
            {Contact.social_media.map((content, index) => (
              <div key={index} className="flex items-center gap-6 py-2">
                <h3 className="text-green-400">
                  {createElement(content.icon)}
                </h3>
                <a
                  href={content.link}
                  target="_blank"
                  className="text-green-950 font-Poppins"
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
