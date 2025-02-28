// import React from 'react'
import styles from './Hero.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import LeetLight from '../../assets/LeetCode_logo_Light.webp'
import LeetDark from '../../assets/LeetCode_logo_Dark.png'
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/Prashant-Raj-Bagwar_12111058.pdf';
import { useTheme } from '../../common/themeContext';


function Hero() {
    const {theme,toggleTheme}=useTheme();
    const themeIcon= theme==='light' ? sun : moon;
    const twitterIcon= theme==='light' ? twitterLight : twitterDark;
    const linkedinIcon= theme==='light' ? linkedinLight : linkedinDark;
    const githubIcon= theme==='light' ? githubLight : githubDark;
    const LeetcodeIcon= theme==='light' ? LeetLight : LeetDark;

  return   <section className={styles.container} id="hero">

    <div className={styles.colorModeContainer}>
        <img 
          className={styles.hero}
          src={heroImg}
          alt="profile pic - Prashant Raj"
        />

        <img className={styles.modeswitch} 
         src={themeIcon}
         alt="icon" 
         onClick={toggleTheme}
        />
    </div>

    <div className={styles.info}>
        <h1>Prashant Raj <br/> Bagwar</h1>
        <p>Software Developer</p>
        <span>
            <a href="https://leetcode.com/u/rajp_18/" target="_blank">
                <img src={LeetcodeIcon} alt="twitterIcon" />
            </a>
            <a href="https://github.com/prashantrajbagwar" target="_blank">
                <img src={githubIcon} alt="githubIcon" />
            </a>
            <a href="https://www.linkedin.com/in/prashant-raj-bagwar-638ba5229/" target="_blank">
                <img src={linkedinIcon} alt="linkedinIcon" />
            </a>
            <a href="https://leetcode.com/u/rajp_18/" target="_blank">
                <img src={twitterIcon} alt="twitterIcon" />
            </a>
            
        </span>

        <p className={styles.description}>I am a passionate MERN stack developer with expertise in building scalable web applications, real-time features using WebSockets, and advanced search optimizations. With a strong foundation in DSA and competitive programming, I strive to create efficient and user-centric solutions.</p>

        <a href={CV} download>
            <button className="hover"> Resume</button>
        </a>
    </div>
  </section>;
  
}

export default Hero
