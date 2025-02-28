import React from 'react'
import styles from './SkillsStyles.module.css'
import checkIconDark from '../../assets/checkmark-dark.svg'
import checkIconLight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList'


function Skills() {
  return (
    <section className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        
        <SkillList src={checkIconDark} skill="C"/>
        <SkillList src={checkIconDark} skill="C++"/>
        <SkillList src={checkIconDark} skill="HTML"/>
        <SkillList src={checkIconDark} skill="CSS"/>
        <SkillList src={checkIconDark} skill="javaScript"/>
        <SkillList src={checkIconDark} skill="SQL"/>
      </div>
      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkIconDark} skill="React.js"/>
        <SkillList src={checkIconDark} skill="Node.js"/>
        <SkillList src={checkIconDark} skill="Express.js"/>
        <SkillList src={checkIconDark} skill="MongoDB"/>
        <SkillList src={checkIconDark} skill="TailWind CSS"/>
      </div>
      <hr />
      
      <div className={styles.skillList}>
        <SkillList src={checkIconDark} skill="Data Structures"/>
        <SkillList src={checkIconDark} skill="Algorithms"/>
        <SkillList src={checkIconDark} skill="OOP"/>
        <SkillList src={checkIconDark} skill="DBMS"/>
        <SkillList src={checkIconDark} skill="Operating Systems"/>
      </div>
      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkIconDark} skill="Drone Technologies"/>
        <SkillList src={checkIconDark} skill="ANN"/>
        <SkillList src={checkIconDark} skill="System Designs"/>
        <SkillList src={checkIconDark} skill="Redux"/>
      </div>
      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkIconDark} skill="git"/>
        <SkillList src={checkIconDark} skill="gitHub"/>
        <SkillList src={checkIconDark} skill="chatGPT"/>
        <SkillList src={checkIconDark} skill="vsCode"/>
        <SkillList src={checkIconDark} skill="postman"/>
      </div>
      <hr />

    </section>
  )
}

export default Skills
