import { content } from "../Content";
function Footer() {
  const { Footer } = content;
  const currentYear = new Date().getFullYear();

  return (
    <div className="max-h-screen p-2 text-center bg-green-300 min-h-20">
      <h6>{Footer.title}</h6>
      {/* <p className="text-slate-700">{Footer.text}</p> */}
      <p className="text-slate-700">
        All &copy; Reserved {currentYear} by Noorullah Rezaie
      </p>
    </div>
  );
}

export default Footer;
