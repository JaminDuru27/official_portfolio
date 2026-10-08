import { BsTypescript } from "react-icons/bs";
import { DiHtml5 } from "react-icons/di";
import { FaFacebook, FaGithub, FaInstagram, FaJs, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FcNext } from "react-icons/fc";
import { RiTailwindCssLine } from "react-icons/ri";

export const config = {
    backgroundSrc: `/bg.jpeg`,
    picsrc:`/pic.jpg`,
    profilesrc: `/profile.jpg`, 
    yearsOfExperience: 12,
    email: `example@gmail.com`,
    weatherSrc: `/pic2.jpg`,
    about: `Passionate about his work. Codes with disciple`,
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
    ]

}