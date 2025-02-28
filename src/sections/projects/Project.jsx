import React from 'react'
import styles from './ProjectStyle.module.css'
import aboutme from '../../assets/aboutme-img.webp'
import chessImg from '../../assets/chess-img.webp'
import blogImg from '../../assets/Blog-Img.webp'
import ecomImg from '../../assets/Ecom-Img.webp'
import ProjectCards from '../../common/ProjectCards'


function Project() {
  return (
    <section id="Project" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectContainer}>
      <ProjectCards
      src={aboutme}
      link="https://github.com/prashantrajbagwar/"
      title="About Me"
      para="Portfolio"
      />
      <ProjectCards
      src={ecomImg}
      link="https://github.com/prashantrajbagwar/Ecommerce_web"
      title="Ecommerce web"
      para="Ecommerce Platform"
      />
      <ProjectCards
      src={blogImg}
      link="https://github.com/prashantrajbagwar/My_blog_app"
      title="V-Log"
      para="Blogging Web"
      />
      <ProjectCards
      src={chessImg}
      link="https://github.com/prashantrajbagwar/Chess-Master"
      title="Chess-Master"
      para="Gaming App"
      />

      </div>
    </section>
  )
}

export default Project

