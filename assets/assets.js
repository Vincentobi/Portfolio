import profileImg from "./profileImg.jpg";
import close_white from "./close-white.png";
import close_black from "./close-black.png";
import code_icon from "./code-icon.png";
import download_icon from "./download-icon.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import figma from "./figma.png";
import git from "./git.png";
import mail_icon_dark from "./mail_icon_dark.png";
import mail_icon from "./mail_icon.png";
import menu_white from "./menu-white.png";
import menu_black from "./menu-black.png";
import mongodb from "./mongodb.png";
import moon_icon from "./moon_icon.png";
import logo_light from "./logo_light.jpg";
import logo_dark from "./logo_dark.jpg";
import project_icon_dark from "./project-icon-dark.png";
import project_icon from "./project-icon.png";
import sun_icon from "./sun_icon.png";
import vscode from "./vscode.png";
import desktop_mac from "./desktop_mac.png";
import database from "./database.png";
import build from "./build.png";
import sylviaImg from "./sylviastudioImg.png";
import bsfImg from "./bsfImg.png";
import icadImg from "./icadImg.png"
import catholicDiocese from "./catholic-diocese-of-nsukka.png"

export const assets = {
    profileImg,
    close_white,
    code_icon,
    download_icon,
    edu_icon,
    edu_icon_dark,
    figma,
    git,
    mail_icon_dark,
    mail_icon,
    menu_white,
    menu_black,
    mongodb,
    moon_icon,
    logo_light,
    logo_dark,
    project_icon_dark,
    project_icon,
    sun_icon,
    vscode,
    close_black,
    desktop_mac,
    database,
    build,
    desktop_mac,
    sylviaImg,
    bsfImg,
    icadImg,
    catholicDiocese
};

export const aboutData = {
    title: "About Me",
    para1: "I'm a passionate Fullstack Developer based in Lagos. With over 5 years of experience in software development, I have a strong foundation in creating dynamic and user-centric web applications.",
    para2: "My journey began with a curiosity for how things work on the internet, which quickly turned into a career. I love bridging the gap between engineering and design — combining my technical knowledge with a keen eye for design to create beautiful products. When I'm not coding, I'm likely praying my rosary ☺️, reading a book, or playing/watching football.",
    location: "Nsukka, Nigeria",
    languages: "Igbo, English",
    degree: "B.eng Computer Engineering",
    mailAdress: "obioravincent123@gmail.com",
}

export const skillsData = [
    {
        code_icon: desktop_mac,
        title: "Frontend",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
        ],
    },
    {
        code_icon: database,
        title: "Backend",
        skills: [
            "Node.js",
            "Express.js",
            "EJS",
            "MongoDB",
            "PostgreSQL",
            "MySQL",
        ],
    },
    {
        code_icon: build,
        title: "Tools & Devops",
        skills: [
            "Git",
            "GitHub",
            "Figma",
            "VSCode",
            "Antigravity",
            "Postman",
            "Docker",
            "AWS",
        ],
    },
]

export const projectData = [

    {
        img: catholicDiocese,
        type: "Church",
        year: "2025",
        title: "Catholic Diocese of Nsukka",
        para: "This is an mvp version of for the website of the Catholic Diocese of Nsukka",
        buttons: [
            { text: "Live Site", link: "https://catholic-diocese-of-nsukka.vercel.app/", variant: "Blue", icon: "visibility" },
            { text: "GitHub", link: "https://github.com/Vincentobi/CATHOLIC-DIOCESE-OF-NSUKKA", variant: "White", icon: "code" },
        ],
    },
    {
        img: sylviaImg,
        type: "Photography",
        year: "2025",
        title: "Sylvia",
        para: "A comprehensive demo of a photography/storytelling agency website, showcasing responsive design, flexible database integration, and customizable content.",
        buttons: [
            { text: "Live Site", link: "https://www.sylviastudios.vercel.app", variant: "Blue", icon: "visibility" },
            { text: "GitHub", link: "https://github.com/Vincentobi/SYLVIASTUDIOS", variant: "White", icon: "code" },
        ],
    },
    {
        img: icadImg,
        type: "NGO",
        year: "2024",
        title: "Icad",
        para: "International center for Accelerated development is a non-profi organization based in Nigeria.",
        buttons: [
            { text: "Live Site", link: "https://www.icadnig.org.ng", variant: "Blue", icon: "visibility" },
            { text: "GitHub", link: "https://github.com/Vincentobi/ICAD", variant: "White", icon: "code" },
        ]
    },
    {
        img: bsfImg,
        type: "Health",
        year: "2024",
        title: "Bright Smile Foundation",
        para: "A health web app for booking appointments and health tips and info on dental health.",
        buttons: [
            { text: "Live Site", link: "https://www.brightsmilefoundation.netlify.app", variant: "Blue", icon: "visibility" },
            { text: "GitHub", link: "https://github.com/Vincentobi", variant: "White", icon: "code" },
        ]
    },
];


