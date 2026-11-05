import { useEffect, useState } from "react"

export function useTheme (){
    const [theme, setTheme] = useState(()=>{
        return (
            localStorage.getItem(`theme`) === `dark`?`dark`:`light` ||
            (window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`)
        )
    })
    useEffect(()=>{
        document.documentElement.setAttribute(`data-theme`, theme)
        localStorage.setItem(`theme`, theme)
    },[theme])
    const toggle = (th)=> {
        if(th){
            setTheme(th)
        }else{
            setTheme((t)=>(t === `light`?`dark`:`light`))
        }

    }
    return {theme, setTheme, toggle}
}

