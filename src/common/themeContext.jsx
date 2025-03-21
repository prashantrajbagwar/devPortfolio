import React, {createContext,useEffect,useContext,useState} from 'react';
import { Children } from 'react';

const ThemeContext=createContext();


export  const useTheme=()=>useContext(ThemeContext);

export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState(
        ()=>localStorage.getItem('theme') || 'light'
    );

    useEffect(()=>{
        document.body.setAttribute('data-theme',theme);
        localStorage.setItem('theme',theme);
    },[theme]);

    const toggleTheme=()=>{
        console.log("theme swiching")
        setTheme((prevTheme)=>(prevTheme==='light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
