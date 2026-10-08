import { BsTypescript } from "react-icons/bs";
import { DiHtml5 } from "react-icons/di";
import { FaFacebook, FaGithub, FaInstagram, FaJs, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FcNext } from "react-icons/fc";
import { RiTailwindCssLine } from "react-icons/ri";

export const config = {
    //Home
    backgroundSrc: `/bg.jpeg`,
    picsrc:`/pic.jpg`,
    profilesrc: `/profile.jpg`, 
    yearsOfExperience: 12,
    email: `example@gmail.com`,
    weatherSrc: `/pic2.jpg`,
    about: `Passionate about his work. Codes with disciple`,
    quote: {
        words: `Simplicity is prerequisite for reliability`,
        by: `Edsger W. Dijkstra` 
    },
    cvlink: ``, //link to download or view cv
    intro: {
        name: `Henry Dami`,
        bio: `Software developer, currently working at RenCo on the developer team in London`
    },
    tech:[
        {icon: FaJs, fill: `yellow`, stroke:`transparent`},
        {icon: RiTailwindCssLine, fill: `blue`, stroke:`transparent`},
        {icon: BsTypescript, fill: `blue`, stroke:`transparent`},
        {icon: FcNext, fill: `yellow`, stroke:`transparent`},
        {icon: DiHtml5, fill: `red`, stroke:`transparent`},
    ],
    handles:[
        {icon: FaGithub, link:``},
        {icon: FaLinkedin, link:``},
        {icon: FaTwitter, link:``},
        {icon: FaInstagram, link:``},
        {icon: FaFacebook, link:``},
    ],
    projects: [
        {name: `The Goodwill Project`, link: ``},
        {name: `Life Conservationist Org`, link: ``},
        {name: `RUSH Hour`, link: ``},
    ],

    //Work
    watchSrc: `/watch.jpg`,
    timeline: [
        { 
            year: 2014, 
            descr: "Wrote my first lines of code and started exploring software fundamentals." 
        },
        { 
            year: 2020, 
            descr: "Dived deep into modern web development, mastering HTML, CSS, and modern JS." 
        },
        { 
            year: 2021, 
            descr: "Started building full-stack web applications and taking on freelance projects." 
        },
        { 
            year: 2025, 
            descr: "Architected high-performance UI systems, custom canvas engines, and Bento layouts." 
        },
        { 
            year: 2026, 
            descr: "Engineering a desktop-first School Management System & scalable web platforms." 
        },
    ],
    certificates:[
    {
        title: "Full-Stack Web Development Architecture",
        by: "Meta / Coursera",
        year: "2023",
        about: "Building scalable frontend UIs with React alongside robust RESTful APIs and backend database modeling.",
        link: ""
    },
    ],
    badges:[
        {impressions: 500, unit: `%`, title:`Commits`},
        {impressions: 45, unit: `+`, title:`Starts`},
        {impressions: 100, unit: `%`, title:`Uptime`},
    ],
     
    testimonials: [
    {
        src: "/profile (1).jpg",
        name: "Alex Morgan",
        role: "Project Manager",
        comment: "Extremely detail-oriented developer. Built our UI components with zero layout lag and delivered ahead of schedule."
    },
    {
        src: "/profile (2).jpg",
        name: "David Chen",
        role: "Senior Full-Stack Engineer",
        comment: "Clean code structure, solid component architecture, and great mastery over complex animations and responsive layouts."
    },
    // {
    //     src: "/profile (3).jpg",
    //     name: "Sarah Jenkins",
    //     role: "Product Lead",
    //     comment: "Transformed our complex web portal into an intuitive, ultra-fast experience. A pleasure to collaborate with!"
    // }
]
}