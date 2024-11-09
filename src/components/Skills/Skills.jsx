import React from 'react'
import "./Skills.css"
import Log_Tech from './Log_Tech'
import Dev_Info from './Dev_Info'


const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Log_Tech/>
        <Dev_Info/>
      </div>

    </section>
  )
}

export default Skills