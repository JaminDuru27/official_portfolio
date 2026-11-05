import { motion, stagger } from "framer-motion";
import { Card } from "../components/card";
import { Nav } from "../components/nav";
import { config } from "../config/config";
import { useEffect, useRef, useState } from "react";
import { BsTools } from "react-icons/bs";
import { BiCheck, BiPhone } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { Grid } from "../components/grid";
import { randomBrightColor } from "../utils/randomColor";
import { FcContacts } from "react-icons/fc";
import { tr } from "framer-motion/client";

export function Contacts({theme,setTheme}){
    const [c, setC] = useState(0)
    const [copied, setCopied] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [message, setMessage] = useState(``) 
    const [sending, setSending] = useState(false)
    const toolsRef = useRef(null)
    const canvasref = useRef(null)
    const [radius, setRadius] = useState(100)
    const [size, setSize] = useState(20)
    const servicesrefs = useRef([])
    const servicescontainerref  = useRef(null)
    const form  = useRef(null)

    useEffect(()=>{
        const {x, y, width, height} = toolsRef.current.getBoundingClientRect()
        const x1  = width/2 ; const y1  = height/2
        const x2  = width; const y2  = height
        const dist = Math.hypot((x2 - x1), (y2 - y1))
        setRadius(dist)
        setSize(width /2)

        config.handles = config.handles.map(c=>({...c, color: randomBrightColor()}))
        console.log(config.handles)
        try{if(!planck)throw new Error(`planck is not defined`)}
        catch(err){;return}

        const world = new planck.World({ gravity: planck.Vec2(0, 10) });
        const mtopx = (v)=> v * 50 ; const pxtom = (v)=> v / 50 
        const boundsMap = servicesrefs.current.map(e=>{
            return { w: pxtom(e.offsetWidth), h: pxtom(e.offsetHeight), el: e}
        })
        const s = servicescontainerref.current.getBoundingClientRect()
        const W = pxtom(s.width), H = pxtom(s.height);
        const t = 1; // wall thickness in meters (thick so nothing tunnels through)

        const addWall = (cx, cy, hw, hh) => {
            const b = world.createBody({ position: planck.Vec2(cx, cy) });
            b.createFixture(planck.Box(hw, hh), { friction: 0.6 });
        };

        addWall(W / 2, H + t, W / 2 + t, t);   // floor
        addWall(-t, H / 2 - 20, t, H / 2 + 20); // left wall (extends high above)
        addWall(W + t, H / 2 - 20, t, H / 2 + 20); // right wall
        
        world.createDynamicBody({
            position: planck.Vec2(0, 0),
            angle: (Math.random() - 0.5) * 0.6
        })
        const bodies = boundsMap.map(({w, h, el}, i)=>{
            const b = world.createDynamicBody({
                position: planck.Vec2(w/2 + Math.random() * (W - w),  -(i * 1.5) -1),
                angle: (Math.random() - 0.5) * 0.6
            })
            b.createFixture(planck.Box(w/2, h/2), {
                density: 1, friction: 0.5, restitution: 0.2
            })
            el.style.opacity = 1
            el.style.backgroundColor = randomBrightColor()
            return {body:b, el: el ?? undefined}
        })

        let  rf
        const animate = ()=>{
            world.step(1/60)
            bodies.forEach(({body, el})=>{
                const p = body.getPosition()
                const x = mtopx(p.x); const y = mtopx(p.y); const rot = body.getAngle()
                el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${rot}rad)`
            })
            
            rf = requestAnimationFrame(animate)

        }
        rf = requestAnimationFrame(animate)
        return ()=>{
            cancelAnimationFrame(rf)
        }
    },[])

    const handleSubmit = async (event)=>{
        console.log(`kkokoko`)
        event.preventDefault()
        setSending(true)
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", config.web3FormAccessKey);

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();
        setMessage(data.success ? "Success!" : "Error");
        setSending(false)
    };
    return (
        <Grid
        theme={theme} 
        children={(
            <>
            <Card
            theme={theme}
            colstart={0} rowstart={0}
            colspan={9} rowspan={4} p={16}
            children={(
                <>
                    <div className="text-bold text-[1.8rem]">Get In Touch</div>
                    <div className="">Direct message to my email are available. Follow me on GitHub, Twitter and linkdIn</div>
                </>
            )}
            />
            <Card
            theme={theme}
            colstart={10} rowstart={0}
            colspan={3} rowspan={4}
            children={(
            <>
            <motion.div
                whileHover={{scale: 1.05}}
                whileTap={{scale: .8}}
                onClick={()=>{
                    navigator.clipboard.writeText(config.phoneNo)
                    setCopied(true)
                }}
                className="w-full cursor-pointer h-full flex text-[2.5rem] flex justify-center items-center"
                >{<BiPhone
                onClick={()=>{
                    const a= document.createElement(`a`)
                    a.href = `tel:${config.phoneNo}`
                    a.click()
                }}
                />}
                    {copied ?(
                        <div className="absolute bg-white/20 rounded-lg text-[.7rem] p-2 capitalize  top-2 right-2 flex items-center gap-x-2">copied number {<BiCheck/>}</div>
                    ):null}
                </motion.div>
                </>
            )}
            />
            
            <Card
            theme={theme}
            colstart={0} rowstart={5}
            colspan={4} rowspan={8}
            style="row-span-3 sm:row-span-3 md:row-span-2 lg:row-span-1"
            children={(
                <div className="w-full h-full overflow-y-auto scrolly ">
                <div className="flex items-center gap-x-2 p-4 text-[1.5rem] text-bold">Send me and email{<CgMail/>}</div>
                <form ref={form} onSubmit={(e)=>{handleSubmit(e)}} className="space-y-6 rounded-2xl p-2 overflow-hidden  relative">
                
                    <motion.div
                    initial={{display:`none`, opacity:0}} 
                    animate={sending?{display:`block`, opacity:1}:null} 
                    className="w-full h-full absolute z-100 bg-white/10 backdrop-blur-2xl">
                    <motion.div 
                    initial={{translateX: `-50%`,translateY: `-50%`}}
                    animate={{translateX: `0%`,translateY: `0%`}}
                    transition={{duration:2}}
                    className="absolute bg-yellow-400/20 w-full h-full top-[-50%] left-[-50%] rounded-2xl absolute"></motion.div>
                    <motion.div 
                    initial={{translateX: `50%`,translateY: `-100%`}}
                    animate={{translateX: `0%`,translateY: `0%`}} 
                    transition={{duration:2}}
                    className="absolute bg-blue-400/20 w-full h-full top-[0%] right-[-50%] rounded-2xl absolute"></motion.div>
                    <motion.div
                    initial={{translateX: `-50%`,translateY: `50%`}}
                    animate={{translateX: `0%`,translateY: `0%`}}
                    transition={{duration:2}}
                    className="absolute bg-emerald-400/20 w-full h-full top-[50%] left-[-50%] rounded-2xl absolute"></motion.div>
                    <motion.div 
                    animate={{
                        left: [0, `60%`, 0, 0], 
                        top: [0, 0, `60%`, 0], 
                    }}
                    transition={{
                        repeat: Infinity,
                        left: {duration: 1, repeat:Infinity},
                        top: {delay: 1, repeat:Infinity}
                    }}
                    style={{backdropFilter:`brightness(70)`}}
                    className="absolute w-30 h-30 top-4 left-4 rounded-full border-2 border-white/20"></motion.div>
                    </motion.div>  
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                    </label>
                    {/* <Input id="name" placeholder="Your name" className="bg-card border-border" required /> */}
                    <input required type="text" className="w-full full border-2 border-[#ffffff9f] rounded-lg  p-1" name="" id="" />

                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                    </label>
                    <input required type="email" className="w-full full border-2 border-[#ffffff9f] rounded-lg  p-1" name="" id="" />
                    {/* <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-card border-border"
                    required
                    /> */}
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                    </label>
                    {/* <Input id="subject" placeholder="Project inquiry" className="bg-card border-border" required /> */}
                    <input required type="input" className="w-full full border-2 border-[#ffffff9f] rounded-lg  p-1" name="" id="" />
                    
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                    </label>
                    <textarea name="" className="w-full max-h-[50vh] h-[25vh] full border-2 border-[#ffffff9f] rounded-lg  p-1" id=""></textarea>
                    {/* <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    className="bg-card border-border min-h-32"
                    required
                    /> */}
                </div>

                <button type="submit" size="lg" className="cursor-pointer border-2 text-[#ee0996d0] p-1 rounded-lg bg-[#ee099620] w-full bg-primary hover:bg-primary/90">
                Submit</button>

                {submitted && (
                    <div className="p-4 bg-primary/20 border border-primary/50 rounded-lg text-center">
                    <p className="text-primary font-medium">Message sent successfully! I'll get back to you soon.</p>
                    </div>
                )}
                </form>
                </div>
            )}
            />
            <Card
            theme={theme}
            colstart={5} rowstart={5}
            colspan={3} rowspan={8} p={0}
            children={(
                <>
                    <div 
                    ref={servicescontainerref}
                    className="w-full h-full relative">
                        <div className="absolute top-4 left-4 capitalize p-2 rounded-lg bg-white/10"> services</div>
                        <canvas className="w-full h-full absolute top-0 left-0" ref={canvasref}></canvas>
                        {
                            config.services.map((s, k)=>{
                                return (
                                    <motion.div
                                    ref={(el)=>{if(el)servicesrefs.current[k] = el}} 
                                    key={k} 
                                    className="absolute text-[.7rem] md:text-[.8rem] lg:text-[1rem] opacity-0 top-0 left-0 text-[#000000cd] px-2 py-2 rounded-full bg-white/20">{s}</motion.div>
                                )
                            })
                        }
                    </div>
                </>
            )}
            />
            <Card
            theme={theme}
            colstart={8} rowstart={5}
            colspan={5} rowspan={8} p={0}
            children={(
                <>
                <div 
                style={{boxShadow: `0 0px 20px -12px ${config?.handles?.[c]?.color || ` #ffffff2f`} inset`}}
                ref={toolsRef}
                onClick={()=>{
                    setC(p=>(p + 1) % config.handles.length)
                }}
                className="w-full relative h-full">
                    <motion.div 
                    animate={{rotate: `-${((360/config.handles.length) * c) + 45}deg`, background: `${config?.handles?.[c]?.color || ` #ffffff2f`}`}}
                    className="w-20 h-20 bg-white/20 rounded-full absolute right-0 bottom-0 translate-[50%]"
                    >
                        {config.handles.map(({icon, link, color}, k )=>{
                            const Icon = icon
                            const total = config.handles.length
                            const angle  = (k / total) *   360
                            return (
                                <motion.div 
                                href={link}
                                key = {k}
                                animate ={k === c?{background: `${color}`, border:`2px solid #ffffff58`, opacity:1}:null}
                                style={{    
                                    width: size + `px`,
                                    height: size + `px`,
                                    transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                                    transformOrigin: `center center`,
                                    borderRadius:`100%`,
                                }}
                                className="w-10 h-10 flex items-center  justify-center gap-2 opacity-[.5] rounded-full bg-black/20 absolute top-1/2 left-1/2 translate-[-50%]"
                                >
                                    <div 
                                    style={{
                                        transform:`rotate(${angle + 45}deg)`,
                                        transformOrigin: `center center`,
                                    }}
                                    className="">
                                        <Icon 
                                        onClick={()=>{
                                            const a = document.createElement(`a`); a.href = link; a.target=`_blank`; a.click()
                                        }}
                                        size={size/3} />
                                    </div>
                                </motion.div>
                                // ><Icon/></div>
                            )
                        })}
                    </motion.div>

                </div>
                </>
            )}
            />
            </>
        )}
        />
    )
}