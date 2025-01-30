import Section from '../components/Section.jsx'
import SectionItem from '../components/SectionItem.jsx'

export default () => {

  return (
    <>
      <Section classN="section-container home-section"> 
          <SectionItem name="Home" image={true} img='/src/assets/ID-pic-greenbback.png' />
      </Section>
    </>
  )
}
