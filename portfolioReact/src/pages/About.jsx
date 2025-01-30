import Section from '../components/Section.jsx'
import SectionItem from '../components/SectionItem.jsx'
import JsonServer from '../data/JsonServer.jsx'

export default () => {

  return (
    <>
      <Section classN="section-container about-section"> 
          <SectionItem name="About" image={true} img='/src/assets/AboutMe2.jpg'/>
      </Section>
    </>
  )
}

