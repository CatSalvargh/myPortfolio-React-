import React from "react"
import Section from '../components/Section.jsx'
import SectionItem from '../components/SectionItem.jsx'
import Slider from '../components/Slider.jsx'
import Button from '../components/Button.jsx'
import Records from '../../db.json'

export default () => {

  const data = Records;

  const handleClick = () => {
    const slideInfo = document.querySelector('.no-show-div')
    slideInfo.classList.toggle('show-section-content')
  }

  return (
    <>
    <Section classN="section-container projects-section">
      <div className='projects-slider'>
      <Slider></Slider>
      </div>
      <div className='no-show-div'>
          {<SectionItem  
                id={data.projects[0].id} 
                name={data.projects[0].name}  
                image={false}
                img='' 
                subtitle={data.projects[0].content.subtitle} 
                text={data.projects[0].content.text}  
          />}
          <div className="links-img">
              <a href="https://github.com/CatSalvargh/ClassicCars" target="_blank">
                <img src="/src/assets/github.png" alt="" />
              </a>
              <a href="https://catsalvargh.github.io/ClassicCars/" target="_blank">Got to site</a>
          </div>
      </div>
    </Section>
    <Button classN="btn btn--primary btn--info" action={() => handleClick()}
        text='More details about this project' />
    </>
  )
}
