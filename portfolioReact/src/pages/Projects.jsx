import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import Section from '../components/Section.jsx'
import SectionItem from '../components/SectionItem.jsx'
import Slider from '../components/Slider.jsx'

export default () => {

  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/projects')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setProjects(data)
    })
    .catch(err => console.log(err))
  })

  return (
    <>
    <Section classN="section-container projects-section">
      <div className='projects-slider'>
      <Slider></Slider>
      </div>
      <div className='projects-text'>
        {projects && <SectionItem name={projects[0].name} image={false} img='' subtitle={projects[0].content.subtitle} text={projects[0].content.text} />}
      </div>
    </Section>
    </>

  )
}
