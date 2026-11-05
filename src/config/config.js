import { BiPhone } from "react-icons/bi";
import { BsTypescript } from "react-icons/bs";
import { DiHtml5, DiNodejs } from "react-icons/di";
import { FaFacebook, FaGithub, FaInstagram, FaJs, FaLinkedin, FaReact, FaTwitter } from "react-icons/fa6";
import { FcNext } from "react-icons/fc";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiTailwindcss, SiTauri, SiVite } from "react-icons/si";

export const config = {
    //Home
    backgroundSrc: `/bg.jpeg`,
    picsrc:`/pic.jpg`,
    profilesrc: `/profile.jpg`, 
    yearsOfExperience: 5,
    email: `jaminduru5@gmail.com`,
    weatherSrc: `/pic2.jpg`,
    about: `Passionate about his work. Codes with disciple`,
    quote: {
        words: `Simplicity is prerequisite for reliability`,
        by: `Edsger W. Dijkstra` 
    },
    cvlink: ``, //link to download or view cv
    intro: {
        name: `Jamin Duru`,
        bio: `Software developer, currently working at remote job as a full-stack developer. Passionate about building scalable web applications and exploring new technologies.`,
    },
    tech:[
        {icon: FaJs, fill: `yellow`, stroke:`transparent`},
        {icon: RiTailwindCssLine, fill: `blue`, stroke:`transparent`},
        {icon: BsTypescript, fill: `blue`, stroke:`transparent`},
        {icon: FcNext, fill: `yellow`, stroke:`transparent`},
        {icon: DiHtml5, fill: `red`, stroke:`transparent`},
        {icon: DiNodejs, fill: `green`, stroke:`transparent`},
        {icon: SiTauri, fill: `green`, stroke:`transparent`},
    ],
    handles:[
        {icon: FaGithub, link:`https://github.com/JaminDuru27`,color: ``,},
        {icon: FaLinkedin, link:`https://www.linkedin.com/in/germaine-duru-035340406?utm_source=share_via&utm_content=profile&utm_medium=member_android`,color: ``},
    ],
    projects: [
        {name: `Loom and Line`, link: `https://loom-line-nigerian-wardrobe.vercel.app/`},
        {name: `Glow Haus`, link: `https://glowhaus-nu.vercel.app/`},   
        {name: `Amakas Kitchen`, link: `https://amaka-kitchen-deliciously-made.vercel.app/`},
    ],

    //Work
    watchSrc: `/watch.jpg`,
    timeline: [
        { 
            year: 2021, 
            descr: "Wrote my first lines of code and started exploring software fundamentals." 
        },
        { 
            year: 2023, 
            descr: "Dived deep into modern web development, mastering HTML, CSS, and modern JS." 
        },
        { 
            year: 2024, 
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
            link: "#"
        },
        {
            title: "Javascript Certification",
            by: "PriyGop",
            year: "2026",
            about: "Javascript certification for advanced web development, including ES6+, asynchronous programming, and modern frameworks.",
            link: "https://priygop.com/certificate/verify/CERT-MURNYO5X-0J59XJ"
        },
        ],
        badges:[
            {impressions: 50, unit: `%`, title:`Commits`},
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
        src: `https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85`,
        title: `Loom And Line`,
        link:`https://loom-line-nigerian-wardrobe.vercel.app/`,
        text: `Fashion e-commerce platform built with React, Tailwind CSS, and Vite.`
    },
    productCard2:{
        src: `https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1200&q=85`,
        title: `Glow Haus`,
        link:`https://glowhaus-nu.vercel.app/`,
        text: `Modern skincare e-commerce platform. Seamless user experience.`
    },
    featuredProject: {
        title: "Loom And Line",
        tagline: "E-commerce Platform Designed for Fashion Retail",
        description: "Fashion e-commerce platform built with React, Tailwind CSS, and Vite. Features responsive design, dynamic product listings, and seamless user experience.",
        stack: [FaReact, SiVite, "Tailwind CSS", "Vite"],
        demoUrl: "https://loom-line-nigerian-wardrobe.vercel.app/",
        docsUrl: "https://loom-line-nigerian-wardrobe.vercel.app/",
        
    },

    // Performance / Experimental Lab Card
    labProject: {
        title: "ClasioDesk",
        tagline: "School Management Multi tenant SaaS Platform",
        description: "A high-performance, desktop-first school management system built with React, Tailwind CSS, and Node.js. Features real-time data updates, custom canvas engines, and a modular architecture for scalability.",
        stack: ["HTML5 Canvas", "GPU Acceleration", "Framer Motion", "Tailwind CSS", "Node.js", "React"],
    },

    // Array powering the Arc Ring & Grid
    lovedProjects: [
        {
        name: "Loom And Line",
        category: "Web Application",
        descr: "Fashion e-commerce platform built with React, Tailwind CSS, and Vite. Features responsive design, dynamic product listings, and seamless user experience.",
        stack: [FaReact, SiTailwindcss ],
        link: "https://github.com/example/goodwill",
        src: `https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85`
        },
        {
        name: "Glow Haus",
        category: "Web Application",
        descr: "Modern skincare e-commerce platform with a focus on clean design and seamless user experience.",
        stack: [FaReact, SiTailwindcss, SiVite, DiNodejs],
        link: `https://glowhaus-nu.vercel.app/`,
        src: `https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1200&q=85`,
    
        },
        {
        name: "Amaka's Kitchen",
        category: "Web App",
        descr: "High-performance web dashboard with clean component structure and real-time state updates.",
        stack: [FaReact, SiTailwindcss ],
        link: `https://amaka-kitchen-deliciously-made.vercel.app/`,
        src: `https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80`
        },
        
    ],
    allProjects: [
        {
        name: "Amaka's Kitchen",
        category: "Web App",
        descr: "High-performance web dashboard with clean component structure and real-time state updates.",
        stack: [FaReact, SiTailwindcss ],
        link: `https://amaka-kitchen-deliciously-made.vercel.app/`,
        src: `https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80`
        },
        {
        name: "Loom And Line",
        category: "Web Application",
        descr: "Fashion e-commerce platform built with React, Tailwind CSS, and Vite. Features responsive design, dynamic product listings, and seamless user experience.",
        stack: [FaReact, SiTailwindcss, SiVite, DiNodejs],
        link: "https://loom-line-nigerian-wardrobe.vercel.app/",
        src: `https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85`
        },
        {
        name: "Glow Haus",
        category: "Web Application",
        descr: "Modern skincare e-commerce platform with a focus on clean design and seamless user experience.",
        stack: [FaReact, SiTailwindcss, SiVite, DiNodejs],
        link: `https://glowhaus-nu.vercel.app/`,
        src: `https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1200&q=85`,
        },
        
    ],

    //Contact

    services:[
        `UX/UI Design`, `Web Development`, `Web Design`, `Software Engineering` 
    ],
    phoneNo: `+2347072773050`,
}