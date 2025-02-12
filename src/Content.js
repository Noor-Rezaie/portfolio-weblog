// import images
import Hero_person from "/person.png";

// import reactjs from "./assets/images/Skills/react.png";
import nodejs from "/node.png";
import html from "/HTML.png";
import js from "/JS.png";
import reactjs from "/react.png";

import services_logo from "/logo1.png";

import project1 from "/project1.png";
import project4 from "/project4.png";
import project3 from "/project3.png";
import project2 from "/project2.png";
import person_project from "/porjectImg.png";

import Hireme_person from "/hiremeImg.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdCall, MdOutlineArrowDownward } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Front-end Developer",
    firstName: "Noorullah",
    LastName: "Rezaie",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "+2",
        text: "Years of Experinse in Web development",
      },
      {
        count: "",
        text: "Fronted Web Developer Skilled in JavaScript, React Js, Node js, Tailwind css and Bootstrap css.",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML/CSS",
        para: "",
        details: "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐",
        // logo: services_logo,
        logo: html,
      },
      {
        name: "JavaScript",
        para: "Specialist",
        details: "⭐⭐⭐⭐⭐",
        logo: js,
      },
      {
        name: "React js",
        para: "Fully experienced",
        logo: reactjs,
        details: "Fully experienced",
      },
      {
        name: "Node js",
        para: "Specialist",
        logo: nodejs,
        details: "Fully experienced",
      },
      {
        name: "Bootstrap Css",
        para: "Responsive web Applications",
        details: "Responsive web Applications",
        logo: services_logo,
      },
      {
        name: "Tailwind Css",
        para: "Responsive web Applications",
        details: "Responsive web Applications",
        logo: services_logo,
      },
    ],
    icon: MdOutlineArrowDownward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "I am an enthusiastic and skilled web developer specializing in creating dynamic and responsive web applications. With exceptional skills in HTML, CSS, and JavaScript, I build interactive interfaces using React and develop full-stack solutions with Node.js and Express. By utilizing Tailwind CSS and Bootstrap, I design modern and user-friendly websites that combine functionality with aesthetics.",
        logo: services_logo,
      },
      {
        title: "MERN Stuck",
        para: "I am an enthusiastic and skilled web developer specializing in creating dynamic and responsive web applications. With exceptional skills in HTML, CSS, and JavaScript, I build interactive interfaces using React and develop full-stack solutions with Node.js and Express. By utilizing Tailwind CSS and Bootstrap, I design modern and user-friendly websites that combine functionality with aesthetics.",
        logo: services_logo,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "My Portfolio",
        image: project1,
        link: "https://noor-weblog.vercel.app",
      },
      {
        title: "Fast-Pizza-menu",
        image: project3,
        link: "https://fast-react-project.vercel.app",
      },
      {
        title: "Hotel Management",
        image: project2,
        link: "https://hotel-management-chi-sandy.vercel.app",
      },
      {
        title: "Mern Ecomerce",
        image: project4,
        link: "#",
        // link: "https:// HERE PASTE THE LINK",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: "",
    para: "I am Specialist in createing Rsposive and dynamic web applications, I have built many interactive interfaces using React,Tailwind,Node and many other.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "noorullahrezaie00300@gmail.com",
        icon: GrMail,
        link: "#",
      },
      {
        text: "+93 774366292",
        icon: MdCall,
        link: "https://wa.me/qr/QQSKXAK2UOGTA1",
      },
      {
        text: "NoOr Rezaie",
        icon: BsLinkedin,
        link: "Noor Rezaie",
      },
      {
        text: "NoOr Rezaie",
        icon: BsInstagram,
        link: "#",
      },
      {
        text: "Noorullah Rezaie",
        icon: BsGithub,
        link: "https://github.com/Noor-Rezaie",
      },
    ],
  },
  Footer: {
    title: "Noor-Rezaie",
    text: "All © Copy Right Reserved 2025",
  },
};
