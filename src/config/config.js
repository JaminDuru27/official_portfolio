import { BiPhone } from "react-icons/bi";
import { BsTypescript } from "react-icons/bs";
import { DiHtml5, DiNodejs } from "react-icons/di";
import { FaFacebook, FaGithub, FaInstagram, FaJs, FaLinkedin, FaReact, FaTwitter } from "react-icons/fa6";
import { FcNext } from "react-icons/fc";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiTailwindcss, SiVite } from "react-icons/si";

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
        {icon: FaGithub, link:``,color: ``,},
        {icon: FaLinkedin, link:``,color: ``},
        {icon: FaTwitter, link:``,color: ``},
        {icon: FaInstagram, link:``,color: ``},
        {icon: FaFacebook, link:``,color: ``},
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

    ],

    // Projects 
    productCard1:{
        src: `/web3.jpg`,
        title: `Academic`,
        link:``,
        text: `School management app`
    },
    productCard2:{
        src: `/web4.jpg`,
        title: `Good Will Project`,
        link:``,
        text: `Do better as a person`
    },
    featuredProject: {
        title: "School Management System (SMS)",
        tagline: "Desktop-First Administrative Platform",
        description: "Architected a high-performance administrative platform tailored for secondary schools. Features offline database sync, automated student grading pipelines, and custom layout views.",
        stack: [FaReact, SiVite, "Tailwind CSS", "PostgreSQL"],
        demoUrl: "https://example.com/demo",
        docsUrl: "https://github.com/example/docs",
        
    },

    // Performance / Experimental Lab Card
    labProject: {
        title: "Canvas Animation Engine",
        tagline: "Graphics & UI Performance",
        description: "GPU-accelerated HTML5 canvas background pipeline eliminating main-thread layout lag while maintaining infinite 60fps animations.",
        stack: ["HTML5 Canvas", "GPU Acceleration", "Framer Motion"]
    },

    // Array powering the Arc Ring & Grid
    lovedProjects: [
        {
        name: "The Goodwill Project",
        category: "Web Application",
        descr: "Interactive platform built with a modern UI stack and responsive layouts.",
        stack: [FaReact, SiTailwindcss ],
        link: "https://github.com/example/goodwill",
        src: `/web3.jpg`
        },
        {
        name: "Life Conservationist Org",
        category: "Non-Profit Portal",
        descr: "Full-stack web application featuring dynamic content management and fast client rendering.",
        stack: [FaReact, SiVite, DiNodejs],
        link: "https://github.com/example/life-conservation",
        src: `/web4.jpg`
        },
        {
        name: "RUSH Hour",
        category: "Web App",
        descr: "High-performance web dashboard with clean component structure and real-time state updates.",
        stack: [FaReact, SiTailwindcss ],
        link: "https://github.com/example/rush-hour",
        src: `/web1.jpg`
        },
        {
        name: "School board",
        category: "Web App",
        descr: "High-performance web dashboard with clean component structure and real-time state updates.",
        stack: [FaReact, SiTailwindcss ],
        link: "https://github.com/example/rush-hour",
        src: `/web2.jpg`
        },
        
    ],
    allProjects: [
        {
        name: "The Goodwill Project",
        category: "Web Application",
        descr: "Interactive platform built with a modern UI stack and responsive layouts.",
        stack: [FaReact, SiTailwindcss ],
        link: "https://github.com/example/goodwill",
        src: `/web3.jpg`
        },
        {
        name: "Life Conservationist Org",
        category: "Non-Profit Portal",
        descr: "Full-stack web application featuring dynamic content management and fast client rendering.",
        stack: [FaReact, SiVite, DiNodejs],
        link: "https://github.com/example/life-conservation",
        src: `/web4.jpg`
        },
        {
        name: "RUSH Hour",
        category: "Web App",
        descr: "High-performance web dashboard with clean component structure and real-time state updates.",
        stack: [FaReact, SiTailwindcss ],
        link: "https://github.com/example/rush-hour",
        src: `/web1.jpg`
        },
        {
        name: "School board",
        category: "Web App",
        descr: "High-performance web dashboard with clean component structure and real-time state updates.",
        stack: [FaReact, SiTailwindcss ],
        link: "https://github.com/example/rush-hour",
        src: `/web1.jpg`
        },
        {
        name: "Md Editor",
        category: "Web App",
        descr: "High-performance web dashboard with clean component structure and real-time state updates.",
        stack: [FaReact, SiTailwindcss ],
        link: "https://github.com/example/rush-hour",
        src: `/web1.jpg`
        },
        
    ],

    //Contact

    services:[
        `webflow`, `SEO`, `UX/UI Design`, `Framer`, `WebFlow`, `3D design`, `Social Media`,`Branding` 
    ],
    phoneNo: `+234870000000`,
}